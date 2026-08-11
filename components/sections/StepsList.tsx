import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StepsList({
  eyebrow,
  heading,
  lead,
  steps,
  tone = "white",
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  steps: { title: string; body: string }[];
  tone?: "white" | "ivory";
}) {
  return (
    <section className={tone === "ivory" ? "bg-ivory" : "bg-white"}>
      <Container className="py-16 sm:py-24">
        <SectionHeading eyebrow={eyebrow} heading={heading} lead={lead} align="center" />
        <ol className="mx-auto mt-12 flex max-w-3xl flex-col gap-0 sm:mt-16">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-6 border-b border-line py-6 first:border-t"
            >
              <span className="font-display text-2xl text-blush-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-[16px] tracking-wide text-charcoal">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.85] text-charcoal-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
