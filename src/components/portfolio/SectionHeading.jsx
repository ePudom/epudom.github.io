import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <Reveal
      className={
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      }
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-2 mb-4 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-primary/60" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
