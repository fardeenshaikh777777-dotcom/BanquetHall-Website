import type { CSSProperties } from "react";
import { IMG } from "../images";
import {
  ArchFrame,
  ArchOutline,
  ArchTransition,
} from "../components/ornaments";
import {
  CtaBand,
  GoldLink,
  Icons,
  Marquee,
  Reveal,
  SectionHeading,
  Stat,
  Testimonials,
} from "../components/ui";

const QUOTES = [
  {
    text: "When the baraat arrived, even my husband's eldest uncle — who has attended weddings on three continents — stood at the entrance and said nothing for a full minute. That silence was the highest review Shahi Mahal could have earned.",
    name: "Farhana Qureshi",
    meta: "Mother of the Bride · December 2025",
  },
  {
    text: "The dastarkhwan alone is worth the booking. My guests are still calling about the nihari, three months after the walima.",
    name: "Ahmed Raza Chaudhry",
    meta: "Father of the Groom · February 2026",
  },
  {
    text: "From the mayoon at our home to the rukhsati from their hall, the team managed forty events' worth of detail without ever raising their voice. Everything was pure nifasat.",
    name: "Mehreen & Hassan Malik",
    meta: "The Couple · November 2025",
  },
  {
    text: "We hosted our silver jubilee dinner for six hundred guests. The same head waiter from our wedding in 2001 was there — and he still remembered our menu.",
    name: "Salma & Tariq Mehmood",
    meta: "25th Anniversary · January 2026",
  },
];

const HALLS = [
  {
    name: "Grand Mahal Hall",
    urdu: "گرینڈ محل",
    img: IMG.heroStage,
    seats: "1,000 Guests",
    size: "38,000 sq ft",
    stage: "60-ft royal stage",
    note: "Our flagship hall — two hundred crystal chandeliers, a marble mezzanine, and the stage Lahore talks about.",
    featured: true,
  },
  {
    name: "Noor Hall",
    urdu: "نور ہال",
    img: IMG.mehndi,
    seats: "450 Guests",
    size: "16,000 sq ft",
    stage: "32-ft stage",
    note: "The intimate hall — emerald and gold house themes, beloved for walimas and engagements.",
    featured: false,
  },
  {
    name: "Shahi Courtyard",
    urdu: "شاہی صحن",
    img: IMG.exterior,
    seats: "250 Guests",
    size: "Open-air",
    stage: "Qawwali baithak",
    note: "Under string lights and open sky — mayoon nights, dholki evenings and winter shendi dinners.",
    featured: false,
  },
];

const AMENITIES = [
  {
    icon: Icons.key,
    title: "Valet & 320-Car Forecourt",
    desc: "Liveried valets, a separate family drop-off, and a dedicated ladies' entrance on event nights.",
  },
  {
    icon: Icons.bolt,
    title: "1,600 kVA Silent Backup",
    desc: "Triple-generator redundancy with seamless changeover — no chandelier so much as flickers in load-shedding.",
  },
  {
    icon: Icons.door,
    title: "Bridal & Groom Suites",
    desc: "Two private suites with salon space, steam room and a dedicated attendant through the evening.",
  },
  {
    icon: Icons.fan,
    title: "Ducted Climate Control",
    desc: "Fully renewed air-wash system, silent at full hall and balanced for a thousand guests in July.",
  },
  {
    icon: Icons.dome,
    title: "On-Site Masjid & Wudu",
    desc: "A proper masjid within the grounds with separate wudu areas — nikkah conducted on premises.",
  },
  {
    icon: Icons.stage,
    title: "Stage, Sound & Light",
    desc: "German line-array sound, DMX lighting console with in-house operator, and four approved décor partners.",
  },
];

const GALLERY = [
  { img: IMG.chandelier, label: "The Chandelier Gallery", h: "h-72 lg:h-96" },
  { img: IMG.table, label: "Table d'Or Setting", h: "h-72 lg:h-80 lg:mt-16" },
  { img: IMG.food, label: "The Dastarkhwan", h: "h-72 lg:h-96" },
  { img: IMG.mehndi, label: "Mehndi Night", h: "h-72 lg:h-80 lg:mt-16" },
];

export function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.heroStage}
            alt="Grand Mahal Hall dressed for a baraat"
            className="kenburns h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-ink/97 via-maroon-ink/78 to-maroon-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-ink via-transparent to-maroon-ink/60" />
        </div>
        <div className="jaali-layer jaali-drift opacity-50" />

        {/* vertical Urdu along the right edge */}
        <div
          className="font-urdu absolute top-1/2 right-6 hidden -translate-y-1/2 text-lg text-gold/60 select-none xl:block"
          style={{ writingMode: "vertical-rl" }}
          aria-hidden="true"
        >
          جہاں ہر مہمان شاہی ہو
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pt-36 pb-16 md:pt-40">
          <div className="grid w-full items-center gap-10 lg:grid-cols-12">
            {/* left — words */}
            <div className="lg:col-span-8">
              <div className="fade-up flex items-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <span className="text-[11px] font-bold tracking-[0.45em] text-gold uppercase">
                  Gulberg III · Lahore — Est. 1998
                </span>
              </div>

              <div className="fade-up mt-7" style={{ "--d": "140ms" } as CSSProperties}>
                <span className="font-urdu text-3xl text-gold md:text-4xl">شاہی محل</span>
              </div>

              <h1
                className="fade-up font-display mt-4 max-w-3xl text-[44px] leading-[1.02] font-black text-marble sm:text-6xl lg:text-7xl"
                style={{ "--d": "260ms" } as CSSProperties}
              >
                Where Every Guest
                <span className="block font-medium text-gold-light italic">is Royalty.</span>
              </h1>

              <p
                className="fade-up mt-7 max-w-xl text-[15px] leading-relaxed text-marble/70 md:text-base"
                style={{ "--d": "400ms" } as CSSProperties}
              >
                Twenty-seven years of barats, walimas and rukhsatis hosted behind
                one marble façade. One thousand seats, one legendary
                dastarkhwan, and a standard of mehmaan-nawaazi that Lahore
                measures other halls against.
              </p>

              <div className="fade-up mt-9 flex flex-wrap items-center gap-4" style={{ "--d": "520ms" } as CSSProperties}>
                <GoldLink href="#/contact">Reserve Your Date</GoldLink>
                <GoldLink href="#/services" ghost>
                  Explore the Halls
                </GoldLink>
              </div>

              {/* stat strip */}
              <div
                className="fade-up mt-14 grid grid-cols-2 gap-8 border-t border-gold/20 pt-8 sm:grid-cols-4"
                style={{ "--d": "660ms" } as CSSProperties}
              >
                <Stat value={27} label="Years of Shahi Service" />
                <Stat value={3800} suffix="+" label="Events Hosted" />
                <Stat value={4.6} decimals={1} suffix="M" label="Guests Served" />
                <Stat value={1000} label="Seats · Grand Mahal" />
              </div>
            </div>

            {/* right — arch line-art + season card */}
            <div className="relative hidden lg:col-span-4 lg:block">
              <ArchOutline className="mx-auto h-[520px] w-auto opacity-90" />
              <div className="floaty absolute right-2 bottom-10 w-64 border border-gold/40 bg-maroon-ink/85 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.32em] text-gold uppercase">
                  <span className="flicker inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
                  Winter Season &rsquo;26
                </div>
                <p className="font-display mt-2 text-lg font-semibold text-marble">
                  9 dates still unclaimed
                </p>
                <a
                  href="#/contact"
                  className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.26em] text-gold-light uppercase transition-colors hover:text-gold"
                >
                  Claim yours {Icons.arrow("h-3.5 w-3.5")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="relative mx-auto mb-6 flex w-full max-w-7xl items-center gap-3 px-6">
          <span className="relative block h-12 w-px overflow-hidden bg-marble/20">
            <span className="scroll-line absolute inset-0 bg-gold" />
          </span>
          <span className="text-[10px] font-bold tracking-[0.4em] text-marble/50 uppercase">
            Scroll
          </span>
        </div>
      </section>

      <ArchTransition fill="var(--color-maroon-deep)" />

      {/* ============ MARQUEE ============ */}
      <Marquee
        items={[
          "Barat",
          "Walima",
          "Mehndi",
          "Nikkah",
          "شادی مبارک",
          "Shendi",
          "Aqiqah",
          "Corporate Galas",
          "Rukhsati Nights",
          "Engagement",
        ]}
      />

      {/* ============ WELCOME SPLIT ============ */}
      <section className="relative bg-marble py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal dir="left">
              <div className="relative">
                <ArchFrame src={IMG.columns} alt="Marble columns of the Grand Mahal Hall" className="h-[440px] md:h-[540px]" />
                <div className="absolute -right-4 -bottom-5 border border-gold/50 bg-maroon-deep px-6 py-4 shadow-xl md:-right-8">
                  <div className="font-display text-3xl font-bold text-gold-light">1998</div>
                  <div className="mt-1 text-[10px] font-bold tracking-[0.3em] text-marble/70 uppercase">
                    The first mehrab
                  </div>
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                dark
                eyebrow="Khush Amdeed"
                title={
                  <>
                    A Palace Built on <span className="text-maroon italic">One Promise</span>
                  </>
                }
                lead="When Mian Riaz Ahmed opened a 300-guest hall in 1998 with borrowed chandeliers and his mother's recipes, he made one promise: every family that enters as a host leaves as royalty. The hall grew. The promise never changed."
              />
              <Reveal delay={220}>
                <ul className="mt-8 space-y-3.5">
                  {[
                    "Fully in-house dastarkhwan — 40 chefs, zero outside catering",
                    "Two halls and an open-air courtyard under one management",
                    "One event per hall per night — your evening is never shared",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[15px] text-charcoal/80">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-dark" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-9 flex flex-wrap items-center gap-8">
                  <GoldLink href="#/about">Our Story</GoldLink>
                  <div>
                    <div className="font-display text-2xl text-maroon italic">The Ahmed Family</div>
                    <div className="mt-0.5 text-[10px] font-bold tracking-[0.32em] text-charcoal/50 uppercase">
                      Hosts since 1998
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HALLS ============ */}
      <section className="relative overflow-hidden bg-maroon-deep py-24 md:py-32">
        <div className="jaali-layer opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The Venues"
              title={
                <>
                  Two Halls, One Courtyard — <span className="text-gold-light italic">One Standard</span>
                </>
              }
              lead="Every space is dressed by our own décor atelier and lit for photography, not just for the eye. Choose by guest count; the grandeur is not optional in any of them."
            />
            <Reveal delay={200}>
              <GoldLink href="#/services" ghost>
                Packages & Rates
              </GoldLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            {/* featured hall */}
            <Reveal className="lg:col-span-3" dir="scale">
              <a href="#/services" className="img-zoom group relative block h-[440px] overflow-hidden border border-gold/25 transition-colors duration-500 hover:border-gold/70 md:h-[620px]">
                <img src={HALLS[0].img} alt={HALLS[0].name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-ink via-maroon-ink/25 to-transparent" />
                <span className="absolute top-5 left-5 border border-gold/60 bg-maroon-ink/70 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-gold-light uppercase backdrop-blur-sm">
                  Flagship
                </span>
                <div className="absolute right-0 bottom-0 left-0 p-7 md:p-9">
                  <div className="font-urdu text-xl text-gold">{HALLS[0].urdu}</div>
                  <h3 className="font-display mt-1 text-3xl font-bold text-marble md:text-4xl">{HALLS[0].name}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-marble/70">{HALLS[0].note}</p>
                  <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-bold tracking-[0.24em] text-gold-light uppercase">
                    <span>{HALLS[0].seats}</span>
                    <span>{HALLS[0].size}</span>
                    <span>{HALLS[0].stage}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] text-gold uppercase transition-all duration-300 group-hover:gap-4 group-hover:text-gold-light">
                    View hall {Icons.arrow("h-4 w-4")}
                  </span>
                </div>
              </a>
            </Reveal>

            {/* two stacked halls */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {HALLS.slice(1).map((h, i) => (
                <Reveal key={h.name} delay={140 + i * 140} dir="right" className="flex-1">
                  <a href="#/services" className="img-zoom group relative block h-[280px] overflow-hidden border border-gold/25 transition-colors duration-500 hover:border-gold/70">
                    <img src={h.img} alt={h.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-ink via-maroon-ink/30 to-transparent" />
                    <div className="absolute right-0 bottom-0 left-0 p-6">
                      <div className="font-urdu text-lg text-gold">{h.urdu}</div>
                      <h3 className="font-display mt-0.5 text-2xl font-bold text-marble">{h.name}</h3>
                      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[10px] font-bold tracking-[0.24em] text-gold-light uppercase">
                        <span>{h.seats}</span>
                        <span>{h.size}</span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ AMENITIES LEDGER ============ */}
      <section className="bg-marble py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            dark
            center
            eyebrow="Attended To"
            title={
              <>
                Every Detail, <span className="text-maroon italic">Down to the Last Diya</span>
              </>
            }
            lead="The things you will never have to ask about — because a palace that makes you ask has already failed."
          />
          <div className="mt-16 grid gap-x-14 md:grid-cols-2">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 120}>
                <div className="group flex gap-6 border-b border-charcoal/12 py-7 transition-transform duration-500 hover:translate-x-2">
                  <span className="font-display w-12 shrink-0 text-2xl font-bold text-gold-dark/70 transition-colors duration-300 group-hover:text-gold-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 shrink-0 text-maroon transition-colors duration-300 group-hover:text-gold-dark">
                    {a.icon("h-6 w-6")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-charcoal">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY PREVIEW ============ */}
      <section className="relative overflow-hidden bg-maroon-ink py-24 md:py-32">
        <div className="jaali-layer opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Glimpses"
              title={
                <>
                  Nights We Are <span className="text-gold-light italic">Still Thanked For</span>
                </>
              }
            />
            <Reveal delay={200}>
              <GoldLink href="#/services" ghost>
                Full Gallery
              </GoldLink>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <Reveal key={g.label} delay={i * 110} dir="scale" className={g.h}>
                <a href="#/services" className="img-zoom group relative block h-full overflow-hidden border border-gold/20 transition-colors duration-500 hover:border-gold/70">
                  <img src={g.img} alt={g.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-maroon-ink/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute right-0 bottom-0 left-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="border border-gold/60 bg-maroon-ink/85 px-3 py-1.5 text-[10px] font-bold tracking-[0.26em] text-gold-light uppercase">
                      {g.label}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="relative overflow-hidden bg-marble py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            dark
            center
            eyebrow="Word of Mouth"
            title={
              <>
                What the <span className="text-maroon italic">Baraats Say</span>
              </>
            }
          />
          <div className="mt-16">
            <Testimonials quotes={QUOTES} dark />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CtaBand
        tone="emerald"
        title={
          <>
            Your date is the only thing <span className="text-gold-light italic">we cannot manufacture.</span>
          </>
        }
        sub="Winter weekends in Lahore are claimed a year ahead. Tell us your month — our events team replies within two hours during viewing time."
      />
    </>
  );
}
