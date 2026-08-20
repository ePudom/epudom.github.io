import { Table, BarChart3, Database, Brain, Layers } from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const iconMap = { Table, BarChart3, Database, Brain, Layers };

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="03 — Skills & Tools"
          title="The toolkit I use to turn data into decisions"
          description="Only technologies I actually work with — grouped by what they help me do."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] || Layers;
            return (
              <Reveal key={cat.name} delay={ci * 0.08}>
                <article className="group h-full rounded-2xl border border-border bg-secondary/20 p-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="grid place-items-center h-11 w-11 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-md border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
