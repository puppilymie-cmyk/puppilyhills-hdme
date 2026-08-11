import { Container } from "@/components/ui/Container";
import { PhotoFrame } from "@/components/ui/PhotoFrame";

export function PageHero({
  eyebrow,
  heading,
  lead,
  image,
  imageAlt,
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 h-[62%] bg-ivory sm:h-[58%]" />
      <Container className="pb-14 pt-14 sm:pb-16 sm:pt-20">
        <div className="flex flex-col gap-3 text-center">
          <span className="font-display text-sm tracking-[0.3em] text-charcoal-soft/70">
            {eyebrow}
          </span>
          <h1 className="font-heading text-[28px] leading-snug tracking-wide text-charcoal sm:text-4xl lg:text-[42px]">
            {heading}
          </h1>
          {lead ? (
            <p className="mx-auto mt-2 max-w-2xl text-[15px] leading-[1.9] text-charcoal-soft sm:text-base">
              {lead}
            </p>
          ) : null}
        </div>
        <div className="mt-10 sm:mt-12">
          <PhotoFrame
            src={image}
            alt={imageAlt}
            aspect="aspect-[16/9]"
            priority
            sizes="100vw"
            className="mx-auto max-w-5xl"
          />
        </div>
      </Container>
    </section>
  );
}
