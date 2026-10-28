"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { lineMessageUrl, type FittingItem } from "@/content/fitting-room";

// お洋服の基準幅(ステージ幅に対する割合)
const BASE_WIDTH = 0.6;
const EXPORT_WIDTH = 1080;
const EXPORT_HEIGHT = 1350;

interface Placement {
  x: number; // ステージ幅に対する中心位置(0〜1)
  y: number;
  scale: number;
  rotation: number; // 度
}

const defaultPlacement: Placement = { x: 0.5, y: 0.6, scale: 1, rotation: 0 };

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function formatPrice(price: number) {
  return `¥${price.toLocaleString("ja-JP")}(税込)`;
}

export function FittingStudio({ items }: { items: FittingItem[] }) {
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [placement, setPlacement] = useState<Placement>(defaultPlacement);
  const [saving, setSaving] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ pointerId: number; dx: number; dy: number } | null>(null);

  const item = items.find((i) => i.id === selectedId) ?? items[0];

  useEffect(() => {
    return () => {
      if (photoUrl) URL.revokeObjectURL(photoUrl);
    };
  }, [photoUrl]);

  if (!item) {
    return (
      <p className="text-center text-[14px] text-charcoal-soft">
        現在お試着いただける新作はありません。次の新作はInstagramとLINEでお知らせします。
      </p>
    );
  }

  const onPointerDown = (e: PointerEvent<HTMLImageElement>) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    dragRef.current = {
      pointerId: e.pointerId,
      dx: (e.clientX - rect.left) / rect.width - placement.x,
      dy: (e.clientY - rect.top) / rect.height - placement.y,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLImageElement>) => {
    const drag = dragRef.current;
    const stage = stageRef.current;
    if (!drag || drag.pointerId !== e.pointerId || !stage) return;
    const rect = stage.getBoundingClientRect();
    const clamp = (v: number) => Math.min(1, Math.max(0, v));
    setPlacement((p) => ({
      ...p,
      x: clamp((e.clientX - rect.left) / rect.width - drag.dx),
      y: clamp((e.clientY - rect.top) / rect.height - drag.dy),
    }));
  };

  const onPointerUp = () => {
    dragRef.current = null;
  };

  const onSelectPhoto = (file: File | undefined) => {
    if (!file) return;
    setPhotoUrl(URL.createObjectURL(file));
    setPlacement(defaultPlacement);
  };

  // 画面と同じ配置で 4:5 の画像を書き出す(端末内で処理し、送信はしません)
  const onSave = async () => {
    if (!photoUrl) return;
    setSaving(true);
    try {
      const [photo, overlay] = await Promise.all([
        loadImage(photoUrl),
        loadImage(item.overlayImage),
      ]);
      const canvas = document.createElement("canvas");
      canvas.width = EXPORT_WIDTH;
      canvas.height = EXPORT_HEIGHT;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const cover = Math.max(EXPORT_WIDTH / photo.width, EXPORT_HEIGHT / photo.height);
      const pw = photo.width * cover;
      const ph = photo.height * cover;
      ctx.drawImage(photo, (EXPORT_WIDTH - pw) / 2, (EXPORT_HEIGHT - ph) / 2, pw, ph);

      const ow = EXPORT_WIDTH * BASE_WIDTH * placement.scale;
      const oh = ow * (overlay.naturalHeight / overlay.naturalWidth);
      ctx.save();
      ctx.translate(placement.x * EXPORT_WIDTH, placement.y * EXPORT_HEIGHT);
      ctx.rotate((placement.rotation * Math.PI) / 180);
      ctx.drawImage(overlay, -ow / 2, -oh / 2, ow, oh);
      ctx.restore();

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/jpeg", 0.92),
      );
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `puppily-fitting-${item.id}.jpg`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setSaving(false);
    }
  };

  const lineText = [
    "【お試着ルーム】",
    `「${item.name}」について相談したいです。`,
    "",
    "ご希望(お取り置き/ご購入/サイズ相談)：",
    "ご来店予定の店舗：",
    "この子のお名前・犬種：",
    "体重・胴回り(わかる範囲で)：",
  ].join("\n");

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-14">
      <div>
        <div
          ref={stageRef}
          className="relative mx-auto aspect-[4/5] w-full max-w-[560px] touch-none select-none overflow-hidden rounded-sm bg-ivory"
        >
          {photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- 端末内のBlob URLを表示するためnext/imageは使えません
            <img
              src={photoUrl}
              alt="お試着に使うこの子の写真"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          ) : (
            <label
              htmlFor="fitting-photo"
              className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-3 px-8 text-center"
            >
              <span className="font-display text-sm tracking-[0.3em] text-charcoal-soft/70">
                STEP 1
              </span>
              <span className="font-heading text-[20px] tracking-wide text-charcoal">
                この子のお写真を選ぶ
              </span>
              <span className="text-[13px] leading-[1.8] text-charcoal-soft">
                正面から、体全体が写っているお写真がおすすめです。
              </span>
            </label>
          )}

          {photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- ドラッグ・回転のため素のimgで重ねます
            <img
              src={item.overlayImage}
              alt={`${item.name}のお試着`}
              draggable={false}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className="absolute cursor-grab active:cursor-grabbing"
              style={{
                left: `${placement.x * 100}%`,
                top: `${placement.y * 100}%`,
                width: `${BASE_WIDTH * placement.scale * 100}%`,
                transform: `translate(-50%, -50%) rotate(${placement.rotation}deg)`,
              }}
            />
          ) : null}
        </div>

        <div className="mx-auto mt-5 flex max-w-[560px] flex-wrap items-center justify-center gap-3">
          <label
            htmlFor="fitting-photo"
            className="cursor-pointer rounded-sm border border-charcoal/60 px-6 py-3 text-[13px] tracking-[0.15em] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
          >
            {photoUrl ? "写真を変える" : "写真を選ぶ"}
          </label>
          <input
            id="fitting-photo"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => onSelectPhoto(e.target.files?.[0])}
          />
          {photoUrl ? (
            <button
              type="button"
              onClick={onSave}
              disabled={saving}
              className="rounded-sm border border-charcoal/60 px-6 py-3 text-[13px] tracking-[0.15em] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5 disabled:opacity-60"
            >
              {saving ? "保存しています…" : "この一枚を保存する"}
            </button>
          ) : null}
        </div>

        {photoUrl ? (
          <div className="mx-auto mt-6 grid max-w-[560px] grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-[12px] tracking-[0.1em] text-charcoal-soft">
              大きさ
              <input
                type="range"
                min={0.3}
                max={2}
                step={0.01}
                value={placement.scale}
                onChange={(e) => setPlacement((p) => ({ ...p, scale: Number(e.target.value) }))}
                className="accent-charcoal"
              />
            </label>
            <label className="flex flex-col gap-2 text-[12px] tracking-[0.1em] text-charcoal-soft">
              傾き
              <input
                type="range"
                min={-45}
                max={45}
                step={1}
                value={placement.rotation}
                onChange={(e) =>
                  setPlacement((p) => ({ ...p, rotation: Number(e.target.value) }))
                }
                className="accent-charcoal"
              />
            </label>
            <p className="text-[12px] leading-[1.8] text-charcoal-soft sm:col-span-2">
              お洋服を指でなぞると、位置を動かせます。
            </p>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <span className="font-display text-sm tracking-[0.3em] text-charcoal-soft/70">
            NEW ARRIVALS
          </span>
          <ul className="mt-4 grid grid-cols-3 gap-3">
            {items.map((i) => (
              <li key={i.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedId(i.id);
                    setPlacement(defaultPlacement);
                  }}
                  aria-pressed={i.id === item.id}
                  className={`relative block aspect-square w-full overflow-hidden rounded-sm border bg-ivory transition-colors ${
                    i.id === item.id ? "border-charcoal" : "border-line hover:border-charcoal/50"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- 透過画像のサムネイル */}
                  <img src={i.overlayImage} alt={i.name} className="h-full w-full object-contain p-2" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line pt-8">
          {item.sample ? (
            <span className="mb-3 inline-block rounded-sm bg-blush px-2 py-1 text-[11px] tracking-[0.15em] text-charcoal-soft">
              SAMPLE
            </span>
          ) : null}
          <h3 className="font-heading text-[22px] leading-snug tracking-wide text-charcoal">
            {item.name}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.9] text-charcoal-soft">{item.description}</p>
          <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-[13px] text-charcoal-soft">
            <dt>価格</dt>
            <dd className="text-charcoal">
              {item.price !== null ? formatPrice(item.price) : "LINEにてご案内します"}
            </dd>
            {item.sizes.length > 0 ? (
              <>
                <dt>サイズ</dt>
                <dd className="text-charcoal">{item.sizes.join(" / ")}</dd>
              </>
            ) : null}
            {item.limitedQuantity !== null ? (
              <>
                <dt>数量</dt>
                <dd className="text-charcoal">限定{item.limitedQuantity}着</dd>
              </>
            ) : null}
          </dl>
          {item.instagramUrl ? (
            <a
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[13px] tracking-[0.1em] text-charcoal-soft underline underline-offset-4 hover:text-charcoal"
            >
              Instagramの紹介投稿を見る
            </a>
          ) : null}
        </div>

        <a
          href={lineMessageUrl(lineText)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm border border-charcoal bg-charcoal px-8 py-4 text-[13px] tracking-[0.15em] text-white transition-colors hover:bg-charcoal/85"
        >
          この一着をLINEで相談・お取り置き
        </a>
      </div>
    </div>
  );
}
