import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-charcoal text-white border border-charcoal hover:bg-charcoal/85",
  outline:
    "bg-transparent text-charcoal border border-charcoal/60 hover:border-charcoal hover:bg-charcoal/5",
  "outline-light":
    "bg-transparent text-white border border-white/70 hover:bg-white/10",
  ghost: "bg-white text-charcoal border border-transparent hover:bg-ivory",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-8 py-3.5 text-[13px] tracking-[0.15em] transition-colors duration-300 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
