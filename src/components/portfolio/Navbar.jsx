import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <Link
          to="/#home"
          className="flex items-center gap-2.5 focus-ring rounded-md"
          aria-label="Home"
        >
          <span className="grid place-items-center h-8 w-8 rounded-md bg-primary/10 border border-primary/30">
            <span className="h-3 w-3 rounded-sm bg-primary animate-pulse-slow" />
          </span>
          <span className="font-heading font-bold tracking-tight text-foreground">
            {profile.name}
            <span className="text-primary">.</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={`/${l.href}`}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.email}
            className="p-2 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <Link
            to="/#projects"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors focus-ring"
          >
            Explore My Work
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground focus-ring rounded-md"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="px-5 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={`/${l.href}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-md transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-4 pt-3">
              <ThemeToggle />
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
              <a href={profile.socials.email} aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
