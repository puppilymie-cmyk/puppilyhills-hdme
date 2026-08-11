export function SectionHeading({
  eyebrow,
  heading,
  lead,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  heading: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const textTone = tone === "light" ? "text-white" : "text-charcoal";
  const eyebrowTone = tone === "light" ? "text-white/70" : "text-charcoal-soft/70";
  const leadTone = tone === "light" ? "text-white/85" : "text-charcoal-soft";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <span
          className={`font-display text-sm tracking-[0.3em] ${eyebrowTone}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-heading text-[26px] leading-snug tracking-wide sm:text-3xl lg:text-[34px] ${textTone}`}
      >
        {heading}
      </h2>
      {lead ? (
        <p className={`text-[15px] leading-[1.9] sm:text-base ${leadTone}`}>{lead}</p>
      ) : null}
    </div>
  );
}
