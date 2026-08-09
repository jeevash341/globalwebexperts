import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { addressOneLine, mailtoUrl, site, telUrl } from "@/data/site";

const pages = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Results", to: "/results" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

const serviceLinks = [
  { label: "Web Development", slug: "web-development" },
  { label: "Branding", slug: "branding" },
  { label: "SEO & Digital Growth", slug: "seo" },
  { label: "AI Video", slug: "ai-video" },
  { label: "AI Business Solutions", slug: "ai-business-solutions" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="container-page py-14 lg:py-20">
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
              Ready to build something better?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tell us what your business is trying to achieve. We will tell you what is worth
              building, in what order, and what it realistically involves.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/request-a-quote"
              className="rounded-sm border border-border px-5 py-3 text-sm font-semibold"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.legalName} — websites, branding, search visibility, AI content and business
              systems for companies in Pakistan and abroad. Founded {site.founded} in Karachi.
            </p>
            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer pages">
            <h3 className="text-sm font-semibold text-foreground">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={telUrl} className="inline-flex items-start gap-2 hover:text-foreground">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailtoUrl} className="inline-flex items-start gap-2 break-all hover:text-foreground">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{addressOneLine}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Global Web Experts on Facebook"
                className="grid h-10 w-10 place-items-center rounded-sm border border-border transition-colors hover:bg-secondary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Global Web Experts on Instagram"
                className="grid h-10 w-10 place-items-center rounded-sm border border-border transition-colors hover:bg-secondary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jeevash Khatri on TikTok"
                className="grid h-10 w-10 place-items-center rounded-sm border border-border text-xs font-bold transition-colors hover:bg-secondary"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global Web Experts. All rights reserved.</p>
          <p>
            Business hours: {site.hours} · {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}