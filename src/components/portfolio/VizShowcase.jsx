import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// NOTE: Sample data for demonstration of visualization skills.
const kpis = [
  { label: "Total Revenue", value: "$1.24M", delta: "+18.2%", up: true },
  { label: "Active Customers", value: "3,842", delta: "+6.4%", up: true },
  { label: "Avg. Order Value", value: "$328", delta: "-2.1%", up: false },
  { label: "Churn Rate", value: "4.7%", delta: "-0.8pt", up: true },
];

const revenueTrend = [
  { month: "Jan", revenue: 82, target: 80 },
  { month: "Feb", revenue: 88, target: 85 },
  { month: "Mar", revenue: 95, target: 90 },
  { month: "Apr", revenue: 91, target: 92 },
  { month: "May", revenue: 104, target: 95 },
  { month: "Jun", revenue: 112, target: 100 },
  { month: "Jul", revenue: 108, target: 105 },
  { month: "Aug", revenue: 121, target: 110 },
];

const categorySales = [
  { name: "Technology", value: 482 },
  { name: "Furniture", value: 318 },
  { name: "Office Supplies", value: 256 },
  { name: "Electronics", value: 197 },
];

const segments = [
  { name: "Loyal", value: 38 },
  { name: "New", value: 27 },
  { name: "At-Risk", value: 23 },
  { name: "Champions", value: 12 },
];

const correlation = Array.from({ length: 26 }, (_, i) => ({
  x: i,
  y: +(0.6 * i + Math.sin(i) * 4 + 8).toFixed(1),
  z: 4,
}));

const COLORS = ["#00F0FF", "#8A2BE2", "#00FF41", "#FFD166"];

const tooltipStyle = {
  background: "hsl(var(--popover))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "0.5rem",
  color: "hsl(var(--foreground))",
  fontSize: "12px",
};

function ChartCard({ title, subtitle, children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-border bg-secondary/20 p-5 ${className}`}
    >
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
}

export default function VizShowcase() {
  const [range, setRange] = useState("8M");

  return (
    <section id="showcase" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="05 — Visualization Showcase"
          title="A mini analytics dashboard"
          description="Sample data demonstrating clean chart choices, consistent color, and clear hierarchy — not decoration."
        />

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-border bg-background/40 p-5 md:p-6">
            {/* Dashboard header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-border">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Executive overview
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Sample dataset · demonstration only
                </p>
              </div>
              <div className="flex gap-1.5">
                {["3M", "6M", "8M"].map((r) => (
                  <button
                    key={r}
                    onClick={() => setRange(r)}
                    className={`rounded-md border px-2.5 py-1 text-xs font-mono transition-colors focus-ring ${
                      range === r
                        ? "border-primary text-primary bg-primary/10"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded-xl border border-border bg-secondary/20 p-4 hover:border-primary/30 transition-colors"
                >
                  <p className="text-xs text-muted-foreground">{k.label}</p>
                  <p className="font-mono-num text-2xl font-bold text-foreground mt-1">
                    {k.value}
                  </p>
                  <p
                    className={`font-mono text-xs mt-1 ${k.up ? "text-terminal" : "text-destructive"}`}
                  >
                    {k.up ? "▲" : "▼"} {k.delta}
                  </p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-3 gap-4 mt-4">
              <ChartCard
                title="Revenue vs. Target"
                subtitle="Monthly trend (sample)"
                className="lg:col-span-2"
              >
                <ResponsiveContainer width="100%" height={260}>
                  <AreaChart
                    data={revenueTrend}
                    margin={{ top: 5, right: 5, left: -18, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#00F0FF"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="100%"
                          stopColor="#00F0FF"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="month"
                      tick={{
                        fill: "hsl(var(--muted-foreground))",
                        fontSize: 11,
                      }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{
                        fill: "hsl(var(--muted-foreground))",
                        fontSize: 11,
                      }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      cursor={{ stroke: "#00F0FF", strokeOpacity: 0.3 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#00F0FF"
                      strokeWidth={2}
                      fill="url(#rev)"
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#8A2BE2"
                      strokeWidth={2}
                      strokeDasharray="5 4"
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard
                title="Customer Segments"
                subtitle="Share of base (sample)"
              >
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie
                      data={segments}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={3}
                      stroke="none"
                    >
                      {segments.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={tooltipStyle} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap gap-3 mt-2">
                  {segments.map((s, i) => (
                    <span
                      key={s.name}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-sm"
                        style={{ background: COLORS[i % COLORS.length] }}
                      />{" "}
                      {s.name}
                    </span>
                  ))}
                </div>
              </ChartCard>

              <ChartCard
                title="Sales by Category"
                subtitle="Revenue (sample)"
                className="lg:col-span-2"
              >
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart
                    data={categorySales}
                    margin={{ top: 5, right: 5, left: -18, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="name"
                      tick={{
                        fill: "hsl(var(--muted-foreground))",
                        fontSize: 11,
                      }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{
                        fill: "hsl(var(--muted-foreground))",
                        fontSize: 11,
                      }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      cursor={{ fill: "#00F0FF", fillOpacity: 0.05 }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {categorySales.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard
                title="Correlation"
                subtitle="Marketing spend vs. revenue (sample)"
              >
                <ResponsiveContainer width="100%" height={240}>
                  <ScatterChart
                    margin={{ top: 5, right: 5, left: -18, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="x"
                      tick={{
                        fill: "hsl(var(--muted-foreground))",
                        fontSize: 11,
                      }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      dataKey="y"
                      tick={{
                        fill: "hsl(var(--muted-foreground))",
                        fontSize: 11,
                      }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <ZAxis dataKey="z" range={[40, 40]} />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      cursor={{ strokeDasharray: "3 3" }}
                    />
                    <Scatter
                      data={correlation}
                      fill="#00F0FF"
                      fillOpacity={0.7}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
