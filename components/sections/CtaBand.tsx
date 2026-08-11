import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaBand({
  heading,
  lead,
  buttons,
}: {
  heading: string[];
  lead?: string;
  buttons: { label: string; href: string; variant?: "primary" | "outline-light" }[];
}) {
  return (
    <section className="bg-charcoal">
      <Container className="flex flex-col items-center gap-8 py-20 text-center sm:py-28">
        <h2 className="font-heading text-[26px] leading-snug tracking-wide text-white sm:text-3xl lg:text-[36px]">
          {heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        {lead ? (
          <p className="max-w-xl text-[14px] leading-[1.9] text-white/80">{lead}</p>
        ) : null}
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          {buttons.map((btn) => (
            <Button
              key={btn.label + btn.href}
              href={btn.href}
              variant={btn.variant === "primary" ? "ghost" : "outline-light"}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
