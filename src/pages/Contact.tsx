import { useState, type FormEvent } from "react";
import { ArchTransition, OrnamentRule } from "../components/ornaments";
import { GoldLink, Icons, PageIntro, Reveal, SectionHeading } from "../components/ui";

const FAQS = [
  {
    q: "How far in advance should we book?",
    a: "Winter weekends (November–January) are usually claimed 8–10 months ahead. Summer and weekday dates can be as close as 6–8 weeks. If your date matters more than anything, call before you tour.",
  },
  {
    q: "Is the food really cooked in-house?",
    a: "Entirely. Forty chefs, one kitchen, no outside caterer has crossed our pass in 27 years. Every package includes a private tasting for ten guests before you sign.",
  },
  {
    q: "What happens during load-shedding?",
    a: "Nothing — that is the point. Our silent 1,600 kVA generators change over seamlessly; sound, light and AC never dip. We schedule generator tests on the nights before your event.",
  },
  {
    q: "Can we bring our own décor team?",
    a: "Yes. Four partner ateliers work with us regularly, and outside décor teams are welcome with a coordination visit one week prior. The hall's base lighting and stage rigging are included either way.",
  },
  {
    q: "How much parking is there?",
    a: "A 320-car forecourt with liveried valet, a separate family drop-off and a dedicated ladies' entrance. Overflow parking with shuttle runs is arranged for 1,000-guest barats.",
  },
  {
    q: "Do you host corporate and daytime events?",
    a: "Gladly — annual dinners, product launches and shendi lunches, with a lighter daytime menu and boardroom-style seating available in Noor Hall.",
  },
];

type FormState = {
  name: string;
  phone: string;
  type: string;
  guests: string;
  date: string;
  message: string;
};

const EMPTY: FormState = { name: "", phone: "", type: "", guests: "", date: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState<string | null>(null);

  const set = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 3) errs.name = "Please share your full name.";
    if (!/^(\+?92|0)?3\d{2}[- ]?\d{7}$/.test(form.phone.replace(/\s/g, "")) && form.phone.replace(/\D/g, "").length < 10)
      errs.phone = "A valid Pakistani mobile number, e.g. 0300 8461234.";
    if (!form.type) errs.type = "Tell us which evening we are planning.";
    if (!form.date) errs.date = "Even an approximate month helps.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(`SM-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    }
  };

  return (
    <>
      <PageIntro
        urdu="رابطہ"
        crumb="Contact"
        title={
          <>
            Begin the <span className="text-gold-light italic">Conversation</span>
          </>
        }
        lead="One enquiry is all it takes. Our events team replies within two hours during viewing time — usually with a suggested date and a menu already in mind."
      />
      <ArchTransition fill="var(--color-marble)" />

      {/* ============ FORM + INFO ============ */}
      <section className="bg-marble py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* form */}
            <Reveal dir="left" className="lg:col-span-3">
              <div className="relative overflow-hidden border border-gold-dark/40 bg-maroon-ink p-8 shadow-2xl md:p-12">
                <div className="jaali-layer opacity-25" />
                <div className="relative">
                  {submitted ? (
                    <div className="py-10 text-center">
                      <svg viewBox="0 0 96 96" className="mx-auto h-24 w-24" fill="none" aria-hidden="true">
                        <path d="M20 84V44C20 28 34 17 48 14C62 17 76 28 76 44V84" stroke="var(--color-gold)" strokeWidth="2.5" />
                        <path d="M34 56l9 9 19-20" stroke="var(--color-gold-light)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="font-urdu mt-6 text-2xl text-gold">مبارک ہو</div>
                      <h3 className="font-display mt-2 text-3xl font-bold text-marble">
                        Your enquiry is in the register
                      </h3>
                      <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-marble/65">
                        Reference <span className="font-bold text-gold-light">{submitted}</span>. Our events team
                        will call you within two hours during viewing time — and yes, a real person answers.
                      </p>
                      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <a
                          href="https://wa.me/923008461234"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-[11px] font-bold tracking-[0.28em] text-maroon-ink uppercase transition-colors duration-300 hover:bg-gold-light"
                        >
                          {Icons.whatsapp("h-4 w-4")} Continue on WhatsApp
                        </a>
                        <button
                          onClick={() => {
                            setSubmitted(null);
                            setForm(EMPTY);
                          }}
                          className="border border-marble/25 px-7 py-3.5 text-[11px] font-bold tracking-[0.28em] text-marble uppercase transition-colors duration-300 hover:border-gold hover:text-gold-light"
                        >
                          Send Another Enquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="font-urdu text-xl text-gold">آپ کی تاریخ، ہماری ذمہ داری</div>
                      <h2 className="font-display mt-2 text-3xl font-bold text-marble md:text-4xl">
                        Request Your Date
                      </h2>
                      <p className="mt-3 text-sm text-marble/55">
                        No advance needed at this step — we simply hold the conversation.
                      </p>
                      <form onSubmit={onSubmit} className="mt-9 grid gap-6 sm:grid-cols-2" noValidate>
                        <div>
                          <label htmlFor="name" className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-gold uppercase">
                            Full Name *
                          </label>
                          <input id="name" className={`field ${errors.name ? "field-error" : ""}`} placeholder="e.g. Farhan Qureshi" value={form.name} onChange={set("name")} />
                          {errors.name && <p className="mt-2 text-xs text-rose">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-gold uppercase">
                            Mobile / WhatsApp *
                          </label>
                          <input id="phone" className={`field ${errors.phone ? "field-error" : ""}`} placeholder="03xx xxxxxxx" value={form.phone} onChange={set("phone")} />
                          {errors.phone && <p className="mt-2 text-xs text-rose">{errors.phone}</p>}
                        </div>
                        <div>
                          <label htmlFor="type" className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-gold uppercase">
                            Occasion *
                          </label>
                          <select id="type" className={`field ${errors.type ? "field-error" : ""}`} value={form.type} onChange={set("type")}>
                            <option value="">Select an occasion</option>
                            <option>Barat</option>
                            <option>Walima</option>
                            <option>Mehndi / Mayoon</option>
                            <option>Nikkah / Engagement</option>
                            <option>Shendi / Anniversary</option>
                            <option>Aqiqah</option>
                            <option>Corporate Event</option>
                          </select>
                          {errors.type && <p className="mt-2 text-xs text-rose">{errors.type}</p>}
                        </div>
                        <div>
                          <label htmlFor="guests" className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-gold uppercase">
                            Expected Guests
                          </label>
                          <select id="guests" className="field" value={form.guests} onChange={set("guests")}>
                            <option value="">Select a range</option>
                            <option>100 – 250</option>
                            <option>250 – 500</option>
                            <option>500 – 750</option>
                            <option>750 – 1,000</option>
                            <option>1,000 +</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="date" className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-gold uppercase">
                            Preferred Date *
                          </label>
                          <input id="date" type="date" className={`field ${errors.date ? "field-error" : ""}`} value={form.date} onChange={set("date")} />
                          {errors.date && <p className="mt-2 text-xs text-rose">{errors.date}</p>}
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="message" className="mb-2 block text-[10px] font-bold tracking-[0.3em] text-gold uppercase">
                            Anything We Should Know
                          </label>
                          <textarea id="message" rows={4} className="field resize-none" placeholder="Family favourites on the menu, a theme in mind, two events in one week…" value={form.message} onChange={set("message")} />
                        </div>
                        <div className="sm:col-span-2">
                          <button type="submit" className="sheen w-full bg-gold py-4 text-[12px] font-bold tracking-[0.32em] text-maroon-ink uppercase transition-colors duration-300 hover:bg-gold-light sm:w-auto sm:px-14">
                            Send Enquiry
                          </button>
                          <p className="mt-4 text-xs text-marble/45">
                            By enquiring you agree to be contacted about your event. We never share numbers — not even with your rishta aunties.
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </Reveal>

            {/* info */}
            <div className="lg:col-span-2">
              <SectionHeading
                dark
                eyebrow="Reach Us"
                title={
                  <>
                    The Doors Are <span className="text-maroon italic">Open Daily</span>
                  </>
                }
              />
              <Reveal delay={160}>
                <ul className="mt-9 space-y-6">
                  {[
                    {
                      icon: Icons.pin,
                      head: "Visit the Mahal",
                      body: ["42-A Main Boulevard, Gulberg III,", "Lahore 54660, Pakistan"],
                    },
                    {
                      icon: Icons.phone,
                      head: "Call the Events Desk",
                      body: ["+92 42 3571 8899 (landline)", "+92 300 8461234 (till 11 PM)"],
                    },
                    {
                      icon: Icons.mail,
                      head: "Write to Us",
                      body: ["events@shahimahal.pk"],
                    },
                    {
                      icon: Icons.clock,
                      head: "Hall Viewing Hours",
                      body: ["Mon – Thu · 4:00 – 10:00 PM", "Fri – Sun · 3:00 – 11:00 PM"],
                    },
                  ].map((r) => (
                    <li key={r.head} className="group flex gap-5 border-b border-charcoal/10 pb-6 transition-transform duration-300 hover:translate-x-1.5">
                      <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-gold-dark/40 text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-maroon-ink">
                        {r.icon("h-5 w-5")}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-charcoal">{r.head}</h3>
                        {r.body.map((b) => (
                          <p key={b} className="mt-1 text-sm text-charcoal/65">{b}</p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-8 border border-gold-dark/30 bg-maroon-deep p-6">
                  <div className="flex items-center gap-4">
                    <div className="clip-arch flex h-16 w-14 shrink-0 items-center justify-center bg-gold">
                      <span className="font-display text-lg font-black text-maroon-ink">BH</span>
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold text-marble">Bilal Hussain</div>
                      <div className="text-[10px] font-bold tracking-[0.28em] text-gold uppercase">
                        Head of Events · 900+ barats
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-marble/60">
                    &ldquo;Bring your mother, your budget and one strong opinion about biryani. We will handle the rest.&rdquo;
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="relative overflow-hidden bg-maroon-deep py-24 md:py-32">
        <div className="jaali-layer opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            center
            eyebrow="Before You Ask"
            title={
              <>
                Questions Every Family <span className="text-gold-light italic">Eventually Asks</span>
              </>
            }
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-x-12 md:grid-cols-2">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 120}>
                <details className="faq group border-b border-gold/20 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <span className="font-display text-lg font-semibold text-marble transition-colors duration-300 group-open:text-gold-light">
                      {f.q}
                    </span>
                    <span className="shrink-0 text-gold transition-transform duration-500 group-open:rotate-45">
                      {Icons.plus("h-5 w-5")}
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-marble/60">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MAP ============ */}
      <section className="bg-marble py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionHeading
              dark
              eyebrow="Finding Us"
              title={
                <>
                  On Main Boulevard — <span className="text-maroon italic">You Cannot Miss It</span>
              </>
              }
              lead="The illuminated facade is visible the length of the boulevard after maghrib. Valets in maroon stand at both approaches from dusk; just follow the lights and the aroma of roghni naan."
            />
            <Reveal dir="right">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Main+Boulevard+Gulberg+III+Lahore"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden border border-gold-dark/40 bg-maroon-ink"
                aria-label="Open location in Google Maps"
              >
                <svg viewBox="0 0 600 360" className="w-full" aria-hidden="true">
                  <rect width="600" height="360" fill="var(--color-maroon-ink)" />
                  <g stroke="var(--color-gold)" strokeOpacity="0.12">
                    {Array.from({ length: 12 }, (_, i) => (
                      <line key={`v${i}`} x1={i * 55} y1="0" x2={i * 55} y2="360" />
                    ))}
                    {Array.from({ length: 8 }, (_, i) => (
                      <line key={`h${i}`} x1="0" y1={i * 52} x2="600" y2={i * 52} />
                    ))}
                  </g>
                  <path d="M0 250 C150 230 300 260 600 200" stroke="var(--color-gold)" strokeOpacity="0.5" strokeWidth="10" fill="none" />
                  <path d="M320 0 C330 120 300 240 310 360" stroke="var(--color-gold)" strokeOpacity="0.3" strokeWidth="6" fill="none" />
                  <text x="40" y="238" fill="var(--color-marble)" fillOpacity="0.55" fontSize="13" letterSpacing="3" fontFamily="Manrope, sans-serif">
                    MAIN BOULEVARD
                  </text>
                  <text x="335" y="60" fill="var(--color-marble)" fillOpacity="0.4" fontSize="12" letterSpacing="3" fontFamily="Manrope, sans-serif">
                    GULBERG III
                  </text>
                  <g>
                    <circle cx="305" cy="180" r="26" fill="var(--color-gold)" fillOpacity="0.15" className="flicker" />
                    <circle cx="305" cy="180" r="12" fill="var(--color-gold)" fillOpacity="0.3" />
                    <path d="M305 150c-11 0-19 8.5-19 19 0 13 19 31 19 31s19-18 19-31c0-10.5-8-19-19-19Z" fill="var(--color-gold)" />
                    <circle cx="305" cy="169" r="6" fill="var(--color-maroon-ink)" />
                  </g>
                  <g fontFamily="Manrope, sans-serif">
                    <rect x="196" y="214" width="218" height="34" fill="var(--color-gold)" />
                    <text x="305" y="236" textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing="2" fill="var(--color-maroon-ink)">
                      SHAHI MAHAL · 42-A
                    </text>
                  </g>
                </svg>
                <div className="flex items-center justify-between border-t border-gold/25 px-6 py-4">
                  <span className="text-[11px] font-bold tracking-[0.28em] text-marble/70 uppercase">
                    Gulberg III · Lahore
                  </span>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.28em] text-gold uppercase transition-all duration-300 group-hover:gap-4 group-hover:text-gold-light">
                    Open in Google Maps {Icons.arrow("h-4 w-4")}
                  </span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* closing band */}
      <section className="relative overflow-hidden bg-emerald-deep">
        <div className="jaali-layer opacity-60" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <OrnamentRule className="w-56" />
          <p className="font-display text-2xl font-bold text-marble md:text-3xl">
            Prefer to talk? The events desk answers <span className="text-gold-light italic">till 11 every night.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+923008461234" className="sheen inline-flex items-center gap-3 bg-gold px-8 py-4 text-[12px] font-bold tracking-[0.3em] text-maroon-ink uppercase transition-colors duration-300 hover:bg-gold-light">
              {Icons.phone("h-4 w-4")} +92 300 8461234
            </a>
            <GoldLink href="#/services" ghost>
              See Packages First
            </GoldLink>
          </div>
        </div>
      </section>
    </>
  );
}
