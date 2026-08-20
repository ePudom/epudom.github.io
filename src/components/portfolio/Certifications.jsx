import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="07 — Certifications & Education"
          title="Credentials & training"
          description="Degrees, certifications, and courses that ground my analytics practice."
        />

        <div className="mt-12 space-y-3 max-w-3xl">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-secondary/20 p-5 hover:border-primary/30 transition-colors"
              >
                <span className="grid place-items-center h-11 w-11 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {c.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {c.institution}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  {c.date}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
