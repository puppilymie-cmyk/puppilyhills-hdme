import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PointsGrid({
  eyebrow,
  heading,
  lead,
  note,
  items,
  columns = 3,
  tone = "white",
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  note?: string;
  items: { title: string; body: string }[];
  columns?: 2 | 3 | 4;
  tone?: "white" | "ivory";
}) {
  const colsClass =
    columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={tone === "ivory" ? "bg-ivory" : "bg-white"}>
      <Container className="py-16 sm:py-24">
        <SectionHeading eyebrow={eyebrow} heading={heading} lead={lead} align="center" />
        <div className={`mt-12 grid grid-cols-1 gap-8 sm:mt-16 ${colsClass}`}>
          {items.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 border-t border-line pt-6"
            >
              <span className="font-display text-xs tracking-[0.2em] text-blush-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-[17px] tracking-wide text-charcoal">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[1.85] text-charcoal-soft">{item.body}</p>
            </div>
          ))}
        </div>
        {note ? (
          <p className="mx-auto mt-12 max-w-2xl text-center text-[13px] leading-[1.9] text-charcoal-soft/80">
            {note}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
