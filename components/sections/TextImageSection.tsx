import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";

export function TextImageSection({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
  reverse = false,
  tone = "white",
  points,
  cta,
}: {
  eyebrow: string;
  heading: string;
  body: string | string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tone?: "white" | "ivory";
  points?: string[];
  cta?: { label: string; href: string };
}) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section className={tone === "ivory" ? "bg-ivory" : "bg-white"}>
      <Container className="py-16 sm:py-24">
        <div
          className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <PhotoFrame src={image} alt={imageAlt} aspect="aspect-[4/5]" />
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow={eyebrow} heading={heading} />
            <div className="flex flex-col gap-4">
              {paragraphs.map((p) => (
                <p key={p} className="text-[15px] leading-[1.9] text-charcoal-soft sm:text-base">
                  {p}
                </p>
              ))}
            </div>
            {points ? (
              <ul className="flex flex-col gap-3 border-t border-line pt-6">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[14px] leading-[1.8] text-charcoal-soft"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blush-deep" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
            {cta ? (
              <div className="pt-2">
                <Button href={cta.href} variant="outline">
                  {cta.label}
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
