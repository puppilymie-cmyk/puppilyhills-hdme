import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/pages/home";

export function Hero() {
  return (
    <section className="relative flex min-h-[86svh] items-end overflow-hidden bg-charcoal sm:min-h-[92svh]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/10" />

      <Container className="relative z-10 flex w-full flex-col gap-8 pb-16 pt-32 sm:pb-24">
        <span className="font-display text-sm tracking-[0.4em] text-white/75">
          {hero.eyebrow}
        </span>
        <h1 className="font-heading text-[34px] leading-[1.4] tracking-wide text-white sm:text-5xl lg:text-[56px]">
          {hero.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="max-w-md text-[14px] leading-[1.95] text-white/85 sm:text-[15px]">
          {hero.subhead}
        </p>
        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
          <Button href={hero.ctaPrimary.href} variant="ghost">
            {hero.ctaPrimary.label}
          </Button>
          <Button href={hero.ctaSecondary.href} variant="outline-light">
            {hero.ctaSecondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
