import Image from "next/image";

// 仮画像を表示するコンポーネント。
// 実写に差し替える際は content/*.ts の image パスを実際の写真(jpg/png/webp)に変更するだけでOKです。
export function PhotoFrame({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-ivory ${aspect} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
