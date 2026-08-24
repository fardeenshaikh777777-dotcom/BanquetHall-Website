import { useState } from "react";
import { hrefFor, useScrolled, type Route } from "../hooks";
import { Icons } from "./ui";

const LINKS: { route: Route; label: string }[] = [
  { route: "home", label: "Home" },
  { route: "about", label: "About" },
  { route: "services", label: "Services" },
  { route: "contact", label: "Contact" },
];

function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#/" className="group flex items-center gap-3">
      <svg viewBox="0 0 48 48" className={compact ? "h-9 w-9" : "h-11 w-11"} fill="none" aria-hidden="true">
        <rect x="1.5" y="1.5" width="45" height="45" stroke="var(--color-gold)" strokeOpacity="0.5" />
        <path
          d="M12 37V22C12 15 17.5 10.5 24 9.5C30.5 10.5 36 15 36 22V37"
          stroke="var(--color-gold)"
          strokeWidth="2"
          className="transition-all duration-500 group-hover:stroke-[var(--color-gold-light)]"
        />
        <circle cx="24" cy="26" r="2.6" fill="var(--color-gold)" />
        <path d="M8 37h32" stroke="var(--color-gold)" strokeWidth="1.5" />
      </svg>
      <span className="leading-none">
        <span className="font-display block text-xl font-bold tracking-wide text-marble md:text-[22px]">
          Shahi <span className="text-gold">Mahal</span>
        </span>
        <span className="font-urdu mt-1 block text-[11px] leading-tight text-gold/90 md:text-xs">
          شاہی محل · لاہور
        </span>
      </span>
    </a>
  );
}

export function Header({ route }: { route: Route }) {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* top ribbon */}
      <div
        className={`hidden overflow-hidden border-b border-gold/15 bg-maroon-ink transition-all duration-500 lg:block ${
          scrolled ? "max-h-0 border-b-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-[11px] font-semibold tracking-[0.22em] text-gold/85 uppercase">
          <span className="flex items-center gap-2">
            {Icons.pin("h-3.5 w-3.5 text-gold")}
            42-A Main Boulevard, Gulberg III, Lahore
          </span>
          <span className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              {Icons.clock("h-3.5 w-3.5 text-gold")}
              Hall Viewing · Daily 4 – 10 PM
            </span>
            <a href="tel:+923008461234" className="flex items-center gap-2 transition-colors hover:text-gold-light">
              {Icons.phone("h-3.5 w-3.5 text-gold")}
              +92 300 8461234
            </a>
          </span>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled || open
            ? "border-b border-gold/20 bg-maroon-ink/95 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.8)] backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-maroon-ink/85 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500">
          <LogoMark compact={scrolled} />

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <a
                key={l.route}
                href={hrefFor(l.route)}
                className={`nav-link text-[12px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
                  route === l.route ? "active text-gold-light" : "text-marble/80 hover:text-marble"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#/contact"
              className="sheen ml-2 border border-gold bg-gold px-6 py-3 text-[11px] font-bold tracking-[0.28em] text-maroon-ink uppercase transition-colors duration-300 hover:bg-gold-light"
            >
              Book a Date
            </a>
          </nav>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] border border-gold/40 text-gold lg:hidden"
          >
            <span className={`h-px w-5 bg-current transition-all duration-300 ${open ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-5 bg-current transition-all duration-300 ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* mobile slide-down panel */}
        <div
          className={`overflow-hidden border-gold/15 transition-all duration-500 lg:hidden ${
            open ? "max-h-105 border-t" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {LINKS.map((l, i) => (
              <a
                key={l.route}
                href={hrefFor(l.route)}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`flex items-center justify-between border-b border-marble/8 py-4 text-sm font-bold tracking-[0.3em] uppercase transition-colors ${
                  route === l.route ? "text-gold-light" : "text-marble/85"
                }`}
              >
                {l.label}
                <span className="text-gold">{Icons.arrow("h-4 w-4")}</span>
              </a>
            ))}
            <a
              href="tel:+923008461234"
              className="mt-4 mb-2 flex items-center justify-center gap-3 bg-gold py-3.5 text-[12px] font-bold tracking-[0.28em] text-maroon-ink uppercase"
            >
              {Icons.phone("h-4 w-4")} +92 300 8461234
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
