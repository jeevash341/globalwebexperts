import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { categories, childrenOf } from "@/data/services";
import { primaryNav, telUrl } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServices(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16 lg:h-[4.5rem]"
        }`}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
          {primaryNav.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                  onFocus={() => setServicesOpen(true)}
                >
                  Services
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                <div
                  className={`absolute left-1/2 top-full w-[46rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen
                      ? "pointer-events-auto opacity-100 translate-y-0"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="surface-panel grid grid-cols-2 gap-1 rounded-sm p-3">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to="/services/$slug"
                        params={{ slug: cat.slug }}
                        className="group rounded-sm p-3 transition-colors hover:bg-secondary"
                      >
                        <span className="block text-sm font-semibold text-foreground">
                          {cat.navTitle}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                          {cat.tagline}
                        </span>
                        <span className="mt-2 block font-mono text-[0.65rem] uppercase tracking-widest text-accent">
                          {childrenOf(cat.slug).length || cat.offerings.length} services
                        </span>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="flex flex-col justify-center rounded-sm border border-dashed border-border p-3 transition-colors hover:bg-secondary"
                    >
                      <span className="text-sm font-semibold text-foreground">All services</span>
                      <span className="mt-1 text-xs text-muted-foreground">
                        Browse and search the full catalogue
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] lg:inline-flex"
          >
            Get a Free Consultation
          </Link>
          <a
            href={telUrl}
            aria-label="Call Global Web Experts"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 xl:hidden ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-page max-h-[80vh] overflow-y-auto py-4">
          <ul className="flex flex-col">
            {primaryNav.map((item) =>
              item.label === "Services" ? (
                <li key={item.to} className="border-b border-border/60">
                  <div className="flex items-center justify-between">
                    <Link to="/services" className="flex-1 py-3.5 text-base font-medium">
                      Services
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle service categories"
                      aria-expanded={mobileServices}
                      onClick={() => setMobileServices((v) => !v)}
                      className="grid h-11 w-11 shrink-0 place-items-center"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ${
                      mobileServices ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="pb-3 pl-3">
                      {categories.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            to="/services/$slug"
                            params={{ slug: cat.slug }}
                            className="block py-2.5 text-sm text-muted-foreground"
                          >
                            {cat.navTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.to} className="border-b border-border/60">
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="block py-3.5 text-base font-medium data-[status=active]:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-5 grid gap-2 pb-4">
            <Link
              to="/contact"
              className="rounded-sm bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/request-a-quote"
              className="rounded-sm border border-border px-4 py-3 text-center text-sm font-semibold"
            >
              Request a Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}