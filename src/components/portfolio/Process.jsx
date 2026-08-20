import { process } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="06 — Analytical Process"
          title="How I approach an analytics problem"
          description="A repeatable, end-to-end method — from understanding the question to recommending action."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {process.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <article className="group relative h-full rounded-xl border border-border bg-secondary/20 p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-num text-3xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-terminal/60 group-hover:bg-terminal transition-colors" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {i < process.length - 1 && (
                  <span
                    className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-primary/30"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
