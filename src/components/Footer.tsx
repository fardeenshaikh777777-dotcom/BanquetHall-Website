import { hrefFor, type Route } from "../hooks";
import { ArchWatermark } from "./ornaments";
import { Icons } from "./ui";

const NAV: { route: Route; label: string }[] = [
  { route: "home", label: "Home" },
  { route: "about", label: "Our Story" },
  { route: "services", label: "Halls & Packages" },
  { route: "services", label: "The Dastarkhwan" },
  { route: "contact", label: "Book a Date" },
];

const SOCIALS = [
  { label: "Facebook", icon: Icons.facebook, href: "https://facebook.com" },
  { label: "Instagram", icon: Icons.instagram, href: "https://instagram.com" },
  { label: "YouTube", icon: Icons.youtube, href: "https://youtube.com" },
  { label: "WhatsApp", icon: Icons.whatsapp, href: "https://wa.me/923008461234" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/25 bg-maroon-ink">
      <div className="jaali-layer opacity-30" />
      <ArchWatermark className="pointer-events-none absolute -right-10 bottom-0 h-[420px] text-gold/6" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" aria-hidden="true">
                <rect x="1.5" y="1.5" width="45" height="45" stroke="var(--color-gold)" strokeOpacity="0.5" />
                <path d="M12 37V22C12 15 17.5 10.5 24 9.5C30.5 10.5 36 15 36 22V37" stroke="var(--color-gold)" strokeWidth="2" />
                <circle cx="24" cy="26" r="2.6" fill="var(--color-gold)" />
                <path d="M8 37h32" stroke="var(--color-gold)" strokeWidth="1.5" />
              </svg>
              <div className="leading-none">
                <div className="font-display text-xl font-bold text-marble">
                  Shahi <span className="text-gold">Mahal</span>
                </div>
                <div className="font-urdu mt-1 text-xs text-gold/90">شاہی محل · لاہور</div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-marble/55">
              Lahore&rsquo;s royal address for shadi since 1998. Two halls, one
              in-house dastarkhwan, and a standard of mehmaan-nawaazi your
              guests will narrate for years.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-gold/30 text-gold/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-maroon-ink"
                >
                  {s.icon("h-4 w-4")}
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.38em] text-gold uppercase">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((n, i) => (
                <li key={i}>
                  <a
                    href={hrefFor(n.route)}
                    className="group inline-flex items-center gap-2.5 text-sm text-marble/65 transition-colors duration-300 hover:text-gold-light"
                  >
                    <span className="inline-block h-1 w-1 rotate-45 bg-gold/60 transition-all duration-300 group-hover:scale-150 group-hover:bg-gold" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.38em] text-gold uppercase">Find Us</h3>
            <ul className="mt-5 space-y-4 text-sm text-marble/65">
              <li className="flex gap-3">
                <span className="mt-0.5 text-gold">{Icons.pin("h-4 w-4")}</span>
                42-A Main Boulevard,
                <br />
                Gulberg III, Lahore 54660
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">{Icons.phone("h-4 w-4")}</span>
                <a href="tel:+924235718899" className="transition-colors hover:text-gold-light">
                  +92 42 3571 8899
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">{Icons.whatsapp("h-4 w-4")}</span>
                <a
                  href="https://wa.me/923008461234"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  +92 300 8461234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">{Icons.mail("h-4 w-4")}</span>
                <a href="mailto:events@shahimahal.pk" className="transition-colors hover:text-gold-light">
                  events@shahimahal.pk
                </a>
              </li>
            </ul>
          </div>

          {/* hours */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.38em] text-gold uppercase">Hall Viewing</h3>
            <ul className="mt-5 space-y-3 text-sm text-marble/65">
              <li className="flex items-center justify-between gap-4 border-b border-marble/8 pb-3">
                <span>Monday – Thursday</span>
                <span className="text-marble/90">4:00 – 10:00 PM</span>
              </li>
              <li className="flex items-center justify-between gap-4 border-b border-marble/8 pb-3">
                <span>Friday – Sunday</span>
                <span className="text-marble/90">3:00 – 11:00 PM</span>
              </li>
              <li className="flex items-center gap-2 pt-1 text-gold-light">
                <span className="flicker inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
                Winter &rsquo;26–&rsquo;27 dates now open
              </li>
            </ul>
            <a
              href="#/contact"
              className="sheen mt-6 inline-block bg-gold px-6 py-3 text-[11px] font-bold tracking-[0.28em] text-maroon-ink uppercase transition-colors duration-300 hover:bg-gold-light"
            >
              Plan Your Event
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-marble/10 pt-7 text-[11px] tracking-[0.22em] text-marble/40 uppercase md:flex-row">
          <span>© 2026 Shahi Mahal · All rights reserved</span>
          <span className="font-display text-sm normal-case tracking-normal italic text-gold/70">
            &ldquo;Where Every Guest is Royalty&rdquo;
          </span>
          <span>Crafted with nifasat in Lahore</span>
        </div>
      </div>
    </footer>
  );
}
