import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useInView, usePrefersReducedMotion } from "../hooks";
import { OrnamentRule } from "./ornaments";

/* ---------------- custom inline icons ---------------- */

function Svg({
  children,
  className = "h-5 w-5",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const Icons = {
  arch: (c?: string) => (
    <Svg className={c}>
      <path d="M5 21V11C5 6.5 8.5 3.5 12 3c3.5.5 7 3.5 7 8v10" />
      <path d="M3 21h18" />
      <circle cx="12" cy="13" r="1.4" fill="currentColor" stroke="none" />
    </Svg>
  ),
  phone: (c?: string) => (
    <Svg className={c}>
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </Svg>
  ),
  pin: (c?: string) => (
    <Svg className={c}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  ),
  clock: (c?: string) => (
    <Svg className={c}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </Svg>
  ),
  mail: (c?: string) => (
    <Svg className={c}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 7 8.5-7" />
    </Svg>
  ),
  key: (c?: string) => (
    <Svg className={c}>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9M18 12v3M15 12v2" />
    </Svg>
  ),
  bolt: (c?: string) => (
    <Svg className={c}>
      <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
    </Svg>
  ),
  door: (c?: string) => (
    <Svg className={c}>
      <path d="M6 21V8c0-3 2.7-5 6-5s6 2 6 5v13" />
      <path d="M4 21h16" />
      <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
    </Svg>
  ),
  dome: (c?: string) => (
    <Svg className={c}>
      <path d="M4 21V13a8 8 0 0 1 16 0v8" />
      <path d="M12 5V3M9 21v-5a3 3 0 0 1 6 0v5" />
    </Svg>
  ),
  fan: (c?: string) => (
    <Svg className={c}>
      <path d="M4 8h16M4 12h16M4 16h10" />
      <path d="M20 4v16" />
    </Svg>
  ),
  stage: (c?: string) => (
    <Svg className={c}>
      <path d="M3 10h18M5 10V6l7-3 7 3v4" />
      <path d="M6 10v10M18 10v10M6 15h12" />
    </Svg>
  ),
  shield: (c?: string) => (
    <Svg className={c}>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  ),
  arrow: (c?: string) => (
    <Svg className={c}>
      <path d="M4 12h16m0 0-6-6m6 6-6 6" />
    </Svg>
  ),
  up: (c?: string) => (
    <Svg className={c}>
      <path d="M12 20V4m0 0-6 6m6-6 6 6" />
    </Svg>
  ),
  plus: (c?: string) => (
    <Svg className={c}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  ),
  whatsapp: (c?: string) => (
    <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.8l.4-.5c.1-.2.1-.3 0-.5L9.6 8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1 2.3-.2 3.7a11 11 0 0 0 4.6 4.2c1.6.7 2.7.7 3.6.5.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z" />
    </svg>
  ),
  facebook: (c?: string) => (
    <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.7v2.1H8v2.8h2.5v7h3Z" />
    </svg>
  ),
  instagram: (c?: string) => (
    <Svg className={c}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </Svg>
  ),
  youtube: (c?: string) => (
    <Svg className={c}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="m10 9.5 5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none" />
    </Svg>
  ),
};

/* ---------------- Reveal on scroll ---------------- */

export function Reveal({
  children,
  className = "",
  delay = 0,
  dir = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "left" | "right" | "scale";
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  const dirClass =
    dir === "left"
      ? "reveal-left"
      : dir === "right"
        ? "reveal-right"
        : dir === "scale"
          ? "reveal-scale"
          : "";
  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- Count-up stat ---------------- */

export function Stat({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  className = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const reduced = usePrefersReducedMotion();
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (reduced) {
      setN(value);
      return;
    }
    const t0 = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  const display =
    decimals > 0
      ? n.toFixed(decimals)
      : Math.round(n).toLocaleString("en-PK");

  return (
    <div ref={ref} className={className}>
      <div className="font-display text-3xl font-bold text-gold-light md:text-4xl">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-marble/55">
        {label}
      </div>
    </div>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
        >
          <span className="inline-block h-1.5 w-1.5 rotate-45 border border-gold" />
          <span className="text-[11px] font-bold uppercase tracking-[0.42em] text-gold">
            {eyebrow}
          </span>
          <span className="inline-block h-1.5 w-1.5 rotate-45 border border-gold" />
        </div>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={`font-display mt-5 text-4xl leading-[1.08] font-bold md:text-5xl ${
            dark ? "text-maroon-ink" : "text-marble"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={170}>
          <p
            className={`mt-5 text-[15px] leading-relaxed md:text-base ${
              dark ? "text-charcoal/75" : "text-marble/65"
            }`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Buttons ---------------- */

export function GoldLink({
  href,
  children,
  ghost = false,
  onClick,
  className = "",
}: {
  href: string;
  children: ReactNode;
  ghost?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-3 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.3em] transition-all duration-300";
  const styles = ghost
    ? "border border-gold/60 text-gold-light hover:border-gold hover:bg-gold hover:text-maroon-ink"
    : "sheen bg-gold text-maroon-ink hover:bg-gold-light shadow-[0_8px_30px_-10px_rgba(212,175,55,0.55)]";
  return (
    <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
        {Icons.arrow("h-4 w-4")}
      </span>
    </a>
  );
}

/* ---------------- Marquee band ---------------- */

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee relative overflow-hidden border-y border-gold/25 bg-maroon-deep py-4">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            aria-hidden={dup === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((it, i) => (
              <span
                key={i}
                className={`flex items-center px-6 text-[12px] font-bold tracking-[0.38em] uppercase whitespace-nowrap ${
                  it.startsWith("✦") || dup === 1 ? "text-gold/80" : "text-gold-light/90"
                }`}
              >
                {it}
                <span className="text-gold/70 pl-12 text-[10px]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Testimonials ---------------- */

export type Quote = { text: string; name: string; meta: string };

export function Testimonials({ quotes, dark = false }: { quotes: Quote[]; dark?: boolean }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % quotes.length), 6500);
    return () => window.clearInterval(id);
  }, [reduced, paused, quotes.length]);

  const q = quotes[i];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative mx-auto max-w-4xl text-center"
    >
      <div
        className={`font-display pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 text-[120px] leading-none font-black select-none ${
          dark ? "text-maroon/15" : "text-gold/15"
        }`}
        aria-hidden="true"
      >
        &rdquo;
      </div>
      <div key={i} className="quote-fade">
        <p
          className={`font-display text-xl leading-relaxed font-medium italic md:text-[26px] ${
            dark ? "text-charcoal" : "text-marble"
          }`}
        >
          {q.text}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold/70" />
          <span className={`text-sm font-bold tracking-wide ${dark ? "text-maroon" : "text-gold-light"}`}>
            {q.name}
          </span>
          <span className="h-px w-10 bg-gold/70" />
        </div>
        <div className={`mt-1.5 text-[11px] font-semibold tracking-[0.3em] uppercase ${dark ? "text-charcoal/55" : "text-marble/50"}`}>
          {q.meta}
        </div>
      </div>
      <div className="mt-9 flex items-center justify-center gap-2.5">
        {quotes.map((_, d) => (
          <button
            key={d}
            onClick={() => setI(d)}
            aria-label={`Show testimonial ${d + 1}`}
            className={`h-2 w-2 rotate-45 border transition-all duration-300 ${
              d === i
                ? "scale-125 border-gold bg-gold"
                : dark
                  ? "border-charcoal/30 hover:border-charcoal/60"
                  : "border-marble/30 hover:border-marble/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- CTA band ---------------- */

export function CtaBand({
  title,
  sub,
  tone = "emerald",
}: {
  title: ReactNode;
  sub: string;
  tone?: "emerald" | "maroon";
}) {
  return (
    <section
      className={`relative overflow-hidden ${tone === "emerald" ? "bg-emerald-deep" : "bg-maroon-deep"}`}
    >
      <div className="jaali-layer jaali-drift opacity-70" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
        <OrnamentRule className="mx-auto mb-10 max-w-xs" />
        <Reveal>
          <h2 className="font-display text-3xl leading-tight font-bold text-marble md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-marble/65">
            {sub}
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <GoldLink href="#/contact">Reserve Your Date</GoldLink>
            <a
              href="tel:+924235718899"
              className="group inline-flex items-center gap-3 border border-marble/25 px-7 py-3.5 text-[12px] font-bold tracking-[0.3em] text-marble uppercase transition-colors duration-300 hover:border-gold hover:text-gold-light"
            >
              {Icons.phone("h-4 w-4 text-gold")}
              +92 42 3571 8899
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page intro for inner pages ---------------- */

export function PageIntro({
  urdu,
  crumb,
  title,
  lead,
}: {
  urdu: string;
  crumb: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-maroon-deep pt-40 pb-16 md:pt-44 md:pb-20">
      <div className="jaali-layer jaali-drift opacity-60" />
      <div className="font-urdu pointer-events-none absolute top-16 right-4 text-[110px] leading-none text-gold/8 select-none md:text-[170px]" aria-hidden="true">
        {urdu}
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="fade-up flex items-center gap-3 text-[11px] font-bold tracking-[0.4em] text-gold/80 uppercase">
          <a href="#/" className="transition-colors hover:text-gold-light">
            Home
          </a>
          <span className="rotate-45 inline-block h-1 w-1 border border-gold" />
          <span>{crumb}</span>
        </div>
        <div className="fade-up mt-6" style={{ "--d": "120ms" } as CSSProperties}>
          <span className="font-urdu text-2xl text-gold md:text-3xl">{urdu}</span>
        </div>
        <h1
          className="fade-up font-display mt-4 max-w-3xl text-5xl leading-[1.05] font-bold text-marble md:text-7xl"
          style={{ "--d": "220ms" } as CSSProperties}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="fade-up mt-6 max-w-xl text-[15px] leading-relaxed text-marble/65 md:text-base"
            style={{ "--d": "320ms" } as CSSProperties}
          >
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

/* ---------------- Floating helpers ---------------- */

export function BackToTop() {
  const [show, setShow] = useState(false);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })}
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center border border-gold/60 bg-maroon-ink/90 text-gold shadow-lg backdrop-blur-sm transition-all duration-500 hover:bg-gold hover:text-maroon-ink ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {Icons.up("h-5 w-5")}
    </button>
  );
}

export function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/923008461234"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 left-5 z-50 flex items-center gap-0 overflow-hidden border border-emerald bg-emerald-deep/95 text-marble shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-gold/60"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center text-gold-light transition-transform duration-300 group-hover:scale-110">
        {Icons.whatsapp("h-6 w-6")}
      </span>
      <span className="max-w-0 overflow-hidden text-[11px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all duration-500 group-hover:mr-4 group-hover:max-w-40">
        WhatsApp
      </span>
    </a>
  );
}
