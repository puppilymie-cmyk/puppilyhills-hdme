import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { pillars } from "@/content/pillars";

export function FourPillars() {
  return (
    <section className="bg-ivory">
      <Container className="py-16 sm:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-display text-sm tracking-[0.3em] text-charcoal-soft/70">
            FOUR PILLARS
          </span>
          <h2 className="font-heading text-[26px] leading-snug tracking-wide text-charcoal sm:text-3xl lg:text-[34px]">
            4つの柱で、一生に寄り添う。
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Link
              key={pillar.id}
              href={pillar.href}
              className="group flex flex-col gap-4"
            >
              <PhotoFrame
                src={pillar.image}
                alt={pillar.title}
                aspect="aspect-[3/4]"
                className="transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="flex flex-col gap-1.5 px-1">
                <span className="font-display text-xs tracking-[0.2em] text-blush-deep">
                  {pillar.number} / {pillar.titleEn}
                </span>
                <h3 className="font-heading text-[17px] tracking-wide text-charcoal">
                  {pillar.title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-charcoal-soft">
                  {pillar.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
