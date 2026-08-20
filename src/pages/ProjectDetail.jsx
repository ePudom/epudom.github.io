import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  LayoutDashboard,
  FileDown,
  Database,
  Check,
  Lightbulb,
  Target,
  Wrench,
  ExternalLink,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { Image } from "@/components/ui/image";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import Reveal from "@/components/portfolio/Reveal";
import { projects } from "@/data/portfolio";

const COLORS = ["#00F0FF", "#8A2BE2", "#00FF41", "#FFD166"];
const tooltipStyle = {
  background: "hsl(var(--popover))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "0.5rem",
  color: "hsl(var(--foreground))",
  fontSize: "12px",
};

// Sample chart derived from the project's key insights (clearly demonstration data)
function ProjectChart({ project }) {
  const data = project.keyInsights.map((k) => ({
    name: k.label.split(" ").slice(0, 3).join(" "),
    value:
      project.keyInsights.indexOf(k) === 0
        ? 100
        : 75 - project.keyInsights.indexOf(k) * 15,
  }));
  return (
    <div className="rounded-xl border border-border bg-secondary/20 p-5">
      <h4 className="text-sm font-semibold text-foreground mb-1">
        Insight magnitude
      </h4>
      <p className="text-xs text-muted-foreground mb-4">
        Relative impact of key findings (sample representation)
      </p>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 5, left: -18, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--border))"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            cursor={{ fill: "#00F0FF", fillOpacity: 0.05 }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2">
        {label}
      </p>
      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
        {title}
      </h3>
      <div className="text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          Project not found.
        </p>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </div>
    );
  }

  const linkItems = [
    {
      key: "github",
      label: "GitHub Repository",
      icon: Github,
      href: project.links.github,
    },
    {
      key: "dashboard",
      label: "Live Dashboard",
      icon: LayoutDashboard,
      href: project.links.dashboard,
    },
    {
      key: "report",
      label: "Download Report",
      icon: FileDown,
      href: project.links.report,
    },
    {
      key: "dataset",
      label: "Dataset",
      icon: Database,
      href: project.links.dataset,
    },
  ].filter((l) => l.href);

  return (
    <div className="relative">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <header className="border-b border-border">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-10">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to projects
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.categories.map((c) => (
                <span
                  key={c}
                  className="font-mono text-xs uppercase tracking-wider text-primary border border-primary/30 bg-primary/5 rounded px-2.5 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-muted-foreground text-lg leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </header>

        {/* Split layout */}
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 grid lg:grid-cols-12 gap-10">
          {/* Control panel - sticky */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="rounded-xl border border-border bg-secondary/20 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Contents
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    ["overview", "Project Overview"],
                    ["problem", "Business Problem"],
                    ["objectives", "Objectives"],
                    ["dataset", "Dataset"],
                    ["cleaning", "Data Cleaning"],
                    ["analysis", "Analysis"],
                    ["visualizations", "Visualizations"],
                    ["insights", "Key Insights"],
                    ["recommendations", "Recommendations"],
                    ["tools", "Tools Used"],
                    ["links", "Project Links"],
                  ].map(([anchor, label]) => (
                    <li key={anchor}>
                      <a
                        href={`#${anchor}`}
                        className="block text-muted-foreground hover:text-primary transition-colors py-0.5"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-secondary/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="h-4 w-4 text-primary" />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Tools used
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-foreground border border-border rounded px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Storyline */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-12">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src={project.thumbnail}
                alt={`${project.title} preview`}
                className="aspect-video w-full object-cover"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <Reveal>
              <Section
                id="overview"
                label="01 — Overview"
                title="Project Overview"
              >
                <p>
                  {project.shortDescription} The goal was to bridge raw
                  transactional data and business decisions through a clear,
                  end-to-end analytical workflow.
                </p>
              </Section>
            </Reveal>

            <Reveal>
              <Section
                id="problem"
                label="02 — Business Problem"
                title="What we were trying to solve"
              >
                <div className="rounded-lg border-l-2 border-primary bg-primary/5 p-4">
                  <p className="text-foreground/90">
                    {project.businessProblem}
                  </p>
                </div>
              </Section>
            </Reveal>

            <Reveal>
              <Section
                id="objectives"
                label="03 — Objectives"
                title="Key questions the analysis answered"
              >
                <ul className="space-y-2">
                  {project.objectives.map((o) => (
                    <li key={o} className="flex items-start gap-2.5">
                      <Target className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </Reveal>

            <Reveal>
              <Section
                id="dataset"
                label="04 — Dataset"
                title="What the data looked like"
              >
                <dl className="grid sm:grid-cols-2 gap-3">
                  {[
                    ["Source", project.dataset.source],
                    ["Records", project.dataset.rows],
                    ["Key columns", project.dataset.columns],
                    ["Time period", project.dataset.period],
                    ["Limitations", project.dataset.limitations],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-lg border border-border bg-secondary/20 p-4"
                    >
                      <dt className="font-mono text-xs uppercase tracking-wider text-primary mb-1">
                        {k}
                      </dt>
                      <dd className="text-sm text-foreground/90">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Section>
            </Reveal>

            <Reveal>
              <Section
                id="cleaning"
                label="05 — Data Cleaning & Preparation"
                title="Making the data trustworthy"
              >
                <ul className="space-y-2">
                  {project.cleaning.map((c) => (
                    <li key={c} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-terminal mt-0.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </Reveal>

            <Reveal>
              <Section
                id="analysis"
                label="06 — Analysis"
                title="Methods & techniques used"
              >
                <ul className="space-y-2">
                  {project.analysis.map((a) => (
                    <li key={a} className="flex items-start gap-2.5">
                      <span className="font-mono text-primary mt-0.5">›</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </Reveal>

            <Reveal>
              <Section
                id="visualizations"
                label="07 — Visualizations"
                title="Charts & dashboards"
              >
                <p className="text-sm">
                  High-contrast, clearly labeled charts designed to reveal the
                  insight, not decorate the page.
                </p>
                <ProjectChart project={project} />
              </Section>
            </Reveal>

            <Reveal>
              <Section
                id="insights"
                label="08 — Key Insights"
                title="What the data revealed"
              >
                <div className="grid sm:grid-cols-3 gap-4">
                  {project.keyInsights.map((k) => (
                    <div
                      key={k.label}
                      className="rounded-xl border border-primary/20 bg-primary/5 p-5"
                    >
                      <Lightbulb className="h-5 w-5 text-primary mb-3" />
                      <p className="font-mono-num text-2xl md:text-3xl font-bold text-primary text-glow">
                        {k.metric}
                      </p>
                      <p className="text-sm text-foreground/90 mt-2 leading-snug">
                        {k.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            </Reveal>

            <Reveal>
              <Section
                id="recommendations"
                label="09 — Recommendations"
                title="Actions a business could take"
              >
                <ol className="space-y-2">
                  {project.recommendations.map((r, i) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 rounded-lg border border-border bg-secondary/20 p-4"
                    >
                      <span className="font-mono-num text-sm font-bold text-primary shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ol>
              </Section>
            </Reveal>

            <Reveal>
              <Section
                id="tools"
                label="10 — Tools Used"
                title="Technologies for this project"
              >
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Section>
            </Reveal>

            <Reveal>
              <Section
                id="links"
                label="11 — Project Links"
                title="Explore the work"
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  {linkItems.map((l) => (
                    <a
                      key={l.key}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-border bg-secondary/20 p-4 hover:border-primary/30 transition-colors"
                    >
                      <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                        <l.icon className="h-5 w-5 text-primary" />
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {l.label}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </Section>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
