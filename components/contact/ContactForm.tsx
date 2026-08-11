"use client";

import { FormEvent, useState } from "react";
import { formFields, categoryOptions, storeOptions } from "@/content/pages/contact";

// フォーム送信の実装例(ダミー)。
// 実際の運用では、この onSubmit 内でAPI Route/フォームサービス(例: /api/contact など)への送信処理に置き換えてください。
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="border border-line bg-ivory p-10 text-center">
        <p className="font-heading text-lg tracking-wide text-charcoal">
          お問い合わせありがとうございます。
        </p>
        <p className="mt-3 text-[14px] leading-[1.9] text-charcoal-soft">
          内容を確認の上、担当者よりご連絡いたします。今しばらくお待ちください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label={formFields.name} htmlFor="name">
          <input id="name" name="name" type="text" required className={inputClass} />
        </Field>
        <Field label={formFields.furigana} htmlFor="furigana">
          <input id="furigana" name="furigana" type="text" className={inputClass} />
        </Field>
        <Field label={formFields.email} htmlFor="email">
          <input id="email" name="email" type="email" required className={inputClass} />
        </Field>
        <Field label={formFields.tel} htmlFor="tel">
          <input id="tel" name="tel" type="tel" required className={inputClass} />
        </Field>
        <Field label={formFields.store} htmlFor="store">
          <select id="store" name="store" className={inputClass} defaultValue={storeOptions[0]}>
            {storeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label={formFields.category} htmlFor="category">
          <select id="category" name="category" className={inputClass} defaultValue={categoryOptions[0]}>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label={formFields.dogName} htmlFor="dogName">
          <input id="dogName" name="dogName" type="text" className={inputClass} />
        </Field>
      </div>

      <Field label={formFields.message} htmlFor="message">
        <textarea id="message" name="message" rows={6} required className={inputClass} />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 inline-flex w-full items-center justify-center rounded-sm border border-charcoal bg-charcoal px-8 py-4 text-[13px] tracking-[0.15em] text-white transition-colors hover:bg-charcoal/85 disabled:opacity-60 sm:w-auto"
      >
        {loading ? "送信中..." : formFields.submit}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-sm border border-line bg-white px-4 py-3 text-[14px] text-charcoal outline-none transition-colors focus:border-charcoal";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-[12px] tracking-[0.1em] text-charcoal-soft">{label}</span>
      {children}
    </label>
  );
}
