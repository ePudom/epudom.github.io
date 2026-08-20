import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="grid place-items-center h-8 w-8 rounded-md bg-primary/10 border border-primary/30">
                <span className="h-3 w-3 rounded-sm bg-primary" />
              </span>
              <span className="font-heading font-bold text-foreground">
                {profile.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
              {profile.role}
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={`/${l.href}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Connect
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn{" "}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" /> GitHub{" "}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.email}
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" /> {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built with data, not guesswork.
          </p>
        </div>
      </div>
    </footer>
  );
}
