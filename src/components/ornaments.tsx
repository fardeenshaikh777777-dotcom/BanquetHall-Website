import type { ReactNode } from "react";

/** Hidden SVG defs — the signature Mughal arch clip path used site-wide. */
export function GlobalDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <clipPath id="shahi-arch" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.42 C0,0.15 0.17,0.055 0.5,0 C0.83,0.055 1,0.15 1,0.42 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />;
}

/** Photograph framed inside the signature arch, with a gold leaf border. */
export function ArchFrame({
  src,
  alt,
  className = "",
  pad = 10,
  zoom = false,
}: {
  src: string;
  alt: string;
  className?: string;
  pad?: number;
  zoom?: boolean;
}) {
  return (
    <div
      className={`clip-arch bg-gold/60 ${zoom ? "img-zoom" : ""} ${className}`}
      style={{ padding: pad }}
    >
      <div className="clip-arch relative h-full w-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

function Diamond({ className = "h-1.5 w-1.5" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 rotate-45 border border-gold bg-transparent ${className}`}
    />
  );
}

/** Gold hairline rule — line ✦ arch ✦ line. The site's section punctuation. */
export function OrnamentRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/70" />
      <Diamond />
      <svg viewBox="0 0 40 26" className="h-5 w-8 shrink-0" fill="none">
        <path
          d="M4 25V13C4 6 10 2 20 1C30 2 36 6 36 13V25"
          stroke="var(--color-gold)"
          strokeWidth="1.4"
        />
        <circle cx="20" cy="15" r="2" fill="var(--color-gold)" />
      </svg>
      <Diamond />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}

/** Large decorative arch line-drawing (hero backdrop), with draw-in animation. */
export function ArchOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 720"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMax meet"
    >
      <path
        className="arch-draw"
        d="M60 720V330C60 165 185 70 300 26C415 70 540 165 540 330V720"
        stroke="var(--color-gold)"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <path
        className="arch-draw"
        style={{ animationDelay: "0.9s" }}
        d="M96 720V344C96 196 205 110 300 72C395 110 504 196 504 344V720"
        stroke="var(--color-gold)"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <circle cx="300" cy="300" r="4" fill="var(--color-gold)" opacity="0.7" />
    </svg>
  );
}

/**
 * Section transition — a gold hairline with a central arch crest,
 * filled below with the colour of the next section.
 */
export function ArchTransition({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 1440 72"
      className="block w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,72 L0,36 L596,36 C652,36 668,10 720,10 C772,10 788,36 844,36 L1440,36 L1440,72 Z"
        fill={fill}
      />
      <path
        d="M0,36 L596,36 C652,36 668,10 720,10 C772,10 788,36 844,36 L1440,36"
        fill="none"
        stroke="var(--color-gold)"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
    </svg>
  );
}

export function ArchWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 480"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M40 480V220C40 110 120 45 200 16C280 45 360 110 360 220V480"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M76 480V232C76 132 146 74 200 48C254 74 324 132 324 232V480"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

/** Section wrapper with ambient layered background for dark bands. */
export function DarkBand({
  className = "",
  children,
  tone = "maroon",
}: {
  className?: string;
  children: ReactNode;
  tone?: "maroon" | "emerald" | "ink";
}) {
  const bg =
    tone === "emerald"
      ? "bg-emerald-deep"
      : tone === "ink"
        ? "bg-maroon-ink"
        : "bg-maroon-deep";
  return (
    <section className={`relative overflow-hidden ${bg} ${className}`}>
      <div className="jaali-layer jaali-drift opacity-60" />
      <div className="relative">{children}</div>
    </section>
  );
}
