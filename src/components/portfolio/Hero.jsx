import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { profile, stats } from "@/data/portfolio";
import Counter from "./Counter";
import { useEffect, useState } from "react";

function HeroVisual() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const onMove = (e) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const nodes = Array.from({ length: 28 }, (_, i) => {
    const angle = (i / 28) * Math.PI * 2;
    const r = 30 + (i % 5) * 8;
    return {
      cx: 50 + Math.cos(angle) * r,
      cy: 50 + Math.sin(angle) * r,
      s: 2 + (i % 4),
    };
  });

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <div
        className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"
        style={{
          transform: `translate(${(mouse.x - 0.5) * 30}px, ${(mouse.y - 0.5) * 30}px)`,
        }}
      />
      <svg
        viewBox="0 0 100 100"
        className="relative w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="heroGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#heroGrad)" />
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#00F0FF"
          strokeOpacity="0.15"
          strokeWidth="0.3"
        />
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="#8A2BE2"
          strokeOpacity="0.12"
          strokeWidth="0.3"
        />
        {nodes.map((n, i) => {
          const ox = 50 + (mouse.x - 0.5) * 8;
          const oy = 50 + (mouse.y - 0.5) * 8;
          return (
            <g key={i}>
              <line
                x1={ox}
                y1={oy}
                x2={n.cx}
                y2={n.cy}
                stroke="#00F0FF"
                strokeOpacity="0.12"
                strokeWidth="0.2"
              />
              <motion.circle
                cx={n.cx}
                cy={n.cy}
                r={n.s * 0.4}
                fill={i % 7 === 0 ? "#8A2BE2" : "#00F0FF"}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            </g>
          );
        })}
        <motion.circle
          cx="50"
          cy="50"
          r="3"
          fill="#00F0FF"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 grid-bg-fine opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-terminal animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">
              {profile.location}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-3 font-mono text-base md:text-lg text-primary uppercase tracking-wider"
          >
            {profile.role} <span className="text-muted-foreground">|</span>{" "}
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors focus-ring"
            >
              View My Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors focus-ring"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <div className="flex items-center gap-1 ml-1">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Live Telemetry Bar */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border bg-background/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-3 md:px-6 py-4 text-center md:text-left"
            >
              <div className="font-mono-num text-2xl md:text-3xl font-bold text-primary text-glow">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[11px] md:text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
