"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, primaryCta, siteConfig } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-white/95 backdrop-blur"
          : "border-transparent bg-white/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-[64px] w-full max-w-[1240px] items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link href="/" className="font-display text-xl tracking-[0.12em] text-charcoal sm:text-2xl">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[12px] tracking-[0.15em] text-charcoal-soft transition-colors hover:text-charcoal ${
                pathname === item.href ? "text-charcoal" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-sm border border-charcoal bg-charcoal px-6 py-2.5 text-[12px] tracking-[0.15em] text-white transition-colors hover:bg-charcoal/85"
          >
            {primaryCta.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-charcoal transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-charcoal transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-6 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col divide-y divide-line">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-4 text-[13px] tracking-[0.15em] text-charcoal-soft transition-colors hover:text-charcoal"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={primaryCta.href}
            className="mt-6 inline-flex w-full items-center justify-center rounded-sm border border-charcoal bg-charcoal px-6 py-3.5 text-[13px] tracking-[0.15em] text-white"
          >
            {primaryCta.label}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
