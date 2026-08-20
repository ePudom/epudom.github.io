import { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Client-side handler. Wire to an email service or backend function when ready.
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: profile.socials.email,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: profile.socials.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "See my code",
      href: profile.socials.github,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-border relative"
    >
      <div
        className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="09 — Contact"
          title="Let's work with data"
          description="Recruiters, companies, collaborators, and clients — if you have a data question worth answering, I'd love to hear from you."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-secondary/20 p-6 space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-4 hover:border-primary/30 transition-colors"
                >
                  <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <c.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="text-sm text-foreground truncate">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.2}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-secondary/20 p-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    className="w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    className="w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-muted-foreground mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={onChange}
                  className="w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-muted-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className="w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition resize-none"
                  placeholder="Tell me about your data challenge..."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors focus-ring disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
              {sent && (
                <p className="text-xs text-terminal font-mono">
                  Thanks — I'll get back to you soon. (Demo form: connect an
                  email service to receive real messages.)
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
