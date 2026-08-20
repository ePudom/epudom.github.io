import { ArrowRight, Check } from "lucide-react";
import { Image } from "@/components/ui/image";
import { about, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="01 — About Me"
          title="The analyst behind the numbers"
          description="Get to know who I am, what drives me, and how I think about data."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="relative">
              <div
                className="absolute -inset-3 border border-primary/20 rounded-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-xl border border-border">
                <Image
                  src={profile.profileImage}
                  alt="Profile portrait placeholder — replace with your photo"
                  className="aspect-square w-full object-cover"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-foreground/80 bg-background/60 backdrop-blur px-2.5 py-1 rounded border border-border">
                    PLACEHOLDER
                  </span>
                  <span className="h-2 w-2 rounded-full bg-terminal animate-pulse" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.35}>
              <div className="pt-2">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                  What I focus on
                </p>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {about.interests.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2.5 text-sm text-foreground"
                    >
                      <span className="grid place-items-center h-5 w-5 rounded bg-primary/10 border border-primary/30">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Analytical workflow */}
        <Reveal delay={0.2} className="mt-20">
          <div className="rounded-2xl border border-border bg-secondary/20 p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6">
              My analytical workflow
            </p>
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {about.workflow.map((step, i) => (
                <div key={step} className="flex items-center gap-2 md:gap-3">
                  <span className="inline-flex items-center rounded-lg border border-border bg-background px-3.5 py-2.5 md:px-4 md:py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors">
                    {step}
                  </span>
                  {i < about.workflow.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
