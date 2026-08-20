import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ExternalLink,
  LayoutDashboard,
} from "lucide-react";
import { Image } from "@/components/ui/image";
import { projects, projectFilters } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects({ limit }) {
  const [filter, setFilter] = useState("All");

  const filtered = projects
    .filter((p) => filter === "All" || p.categories.includes(filter))
    .slice(0, limit);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="04 — Featured Projects"
            title="Selected analytics work"
            description="Each project is a case study — from business question to clean data to insight and recommendation."
          />
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md border px-3.5 py-1.5 text-sm font-medium transition-colors focus-ring ${
                filter === f
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article className="group h-full flex flex-col rounded-2xl border border-border bg-secondary/20 overflow-hidden hover:border-primary/30 transition-colors">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={p.thumbnail}
                    alt={`${p.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fittingType="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <span className="absolute top-3 left-3 font-mono text-[11px] uppercase tracking-wider text-foreground/90 bg-background/70 backdrop-blur px-2.5 py-1 rounded border border-border">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {p.shortDescription}
                  </p>

                  <div className="mt-4 rounded-lg border border-border bg-background/40 p-3">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1">
                      Key insight
                    </p>
                    <p className="text-sm text-foreground/90 leading-snug">
                      {p.keyInsights[0].label}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tools.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] text-muted-foreground border border-border rounded px-1.5 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-border flex items-center gap-2">
                    <Link
                      to={`/projects/${p.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                    >
                      View Project <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <div className="ml-auto flex items-center gap-1">
                      {p.links.github && (
                        <a
                          href={p.links.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Kaggle notebook"
                          className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      {p.links.dashboard && (
                        <a
                          href={p.links.dashboard}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Live dashboard"
                          className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <LayoutDashboard className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {limit && projects.length > limit && (
          <div className="mt-10 text-center">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors focus-ring"
            >
              Explore all projects <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
