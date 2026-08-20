import {
  Download,
  Briefcase,
  GraduationCap,
  Wrench,
  Award,
} from "lucide-react";
import { profile, certifications, skillCategories } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const summary = [
  {
    icon: Briefcase,
    title: "Experience",
    text: "Hands-on analytics projects spanning sales, customer behavior, and churn — from raw data to dashboards.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text:
      certifications.find((c) => c.institution.includes("University"))?.name ||
      "Degree in your field",
  },
  {
    icon: Award,
    title: "Key Achievements",
    text: "Delivered reusable SQL views, interactive BI dashboards, and segmentation models that informed decisions.",
  },
];

export default function Resume() {
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <section id="resume" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="08 — Resume"
          title="The concise version"
          description="A quick summary — download the full resume for the complete picture."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {summary.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-secondary/20 p-6">
                <span className="grid place-items-center h-11 w-11 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                  <s.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 rounded-2xl border border-border bg-secondary/20 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="h-4 w-4 text-primary" />
              <h3 className="font-heading text-sm font-semibold text-foreground">
                Core skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs text-muted-foreground border border-border rounded px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Want the full resume?
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Includes detailed experience, timelines, and achievements.
              </p>
            </div>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors focus-ring shrink-0"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
