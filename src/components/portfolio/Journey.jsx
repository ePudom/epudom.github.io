import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Code2,
  LineChart,
  Target,
  Circle,
} from "lucide-react";
import { journey } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap = { Sparkles, BookOpen, Code2, LineChart, Target, Circle };

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-24 md:py-32 border-t border-border relative"
    >
      <div
        className="absolute inset-0 grid-bg-fine opacity-30"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="02 — My Journey"
          title="The road into data analytics"
          description="A story of curiosity, learning, and turning numbers into meaning — not just a list of dates."
        />

        <div className="mt-16 relative max-w-3xl mx-auto">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-4 md:left-1/2 w-px h-24 bg-gradient-to-b from-primary/0 via-primary to-primary/0 md:-translate-x-1/2"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {journey.map((m, i) => {
              const Icon = iconMap[m.icon] || Circle;
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={m.year + m.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`relative flex md:items-center ${left ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <span className="grid place-items-center h-8 w-8 rounded-full bg-background border-2 border-primary/40">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                  </div>

                  <div
                    className={`pl-14 md:pl-0 w-full md:w-[calc(50%-2.5rem)] ${left ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                  >
                    <div className="group rounded-xl border border-border bg-secondary/30 p-5 hover:border-primary/30 transition-colors">
                      <time className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                        {m.year}
                      </time>
                      <h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
