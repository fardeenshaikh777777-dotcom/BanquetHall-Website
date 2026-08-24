import { IMG } from "../images";
import { ArchTransition, OrnamentRule } from "../components/ornaments";
import {
  CtaBand,
  GoldLink,
  Icons,
  PageIntro,
  Reveal,
  SectionHeading,
} from "../components/ui";

const EVENTS = [
  {
    name: "Barat",
    urdu: "برات",
    img: IMG.heroStage,
    text: "The night the city talks about. A thousand guests, a firework entrance, the groom's procession under a canopy of chandeliers — and a dastarkhwan that feeds every one of them hot, on time, twice.",
    chips: ["Grand Mahal Hall", "Up to 1,000 guests", "Firework entrance", "24-course menu"],
  },
  {
    name: "Mehndi & Mayoon",
    urdu: "مہندی",
    img: IMG.mehndi,
    text: "Marigolds, dhol and emerald silk. The courtyard or Noor Hall dressed for colour — low-stage baithak, lantern walks, and a chaat counter that stays open as long as the dhol does.",
    chips: ["Shahi Courtyard / Noor Hall", "Up to 450 guests", "Marigold styling", "Chaat & gol-gappa stations"],
  },
  {
    name: "Walima",
    urdu: "ولیمہ",
    img: IMG.table,
    text: "Daylight, crystal and restraint. Tables set with gold-rimmed chargers, a menu leaning classic — biryani, rogan josh, and a dessert trolley your in-laws will audit with pleasure.",
    chips: ["Noor or Grand Mahal Hall", "Up to 750 guests", "Gold table setting", "Dessert trolley"],
  },
  {
    name: "Nikkah & Engagement",
    urdu: "نکاح",
    img: IMG.chandelier,
    text: "An intimate gathering under the chandelier gallery — on-site masjid for the ceremony, qawwali in the evening, and privacy handled with the discretion of an old family household.",
    chips: ["On-site masjid", "Up to 250 guests", "Qawwali evening", "Private lounge"],
  },
];

const PACKAGES = [
  {
    name: "Raat-e-Noor",
    urdu: "راتِ نور",
    event: "Mehndi & Mayoon",
    price: "850,000",
    plate: "PKR 2,900 / plate",
    guests: "Up to 300 guests",
    hall: "Shahi Courtyard or Noor Hall",
    featured: false,
    includes: [
      "Marigold & lantern stage theme",
      "12-item dastarkhwan menu",
      "Chaat, gol-gappa & falooda stations",
      "Dhol trio + DJ till 1 a.m.",
      "Basic hall lighting & sound",
    ],
  },
  {
    name: "Shahi Barat",
    urdu: "شاہی بارات",
    event: "The Barat Night",
    price: "2,400,000",
    plate: "from PKR 3,400 / plate",
    guests: "Up to 1,000 guests",
    hall: "Grand Mahal Hall",
    featured: true,
    includes: [
      "Royal maroon & gold stage décor",
      "24-item dastarkhwan, live karahi & BBQ",
      "Bridal suite with salon & attendant",
      "Valet for 320 cars + family entrance",
      "Firework entrance & DMX lighting",
      "Generator priority — silent 1,600 kVA",
    ],
  },
  {
    name: "Walima-e-Khaas",
    urdu: "ولیمہِ خاص",
    event: "Walima Reception",
    price: "1,600,000",
    plate: "from PKR 3,200 / plate",
    guests: "Up to 750 guests",
    hall: "Noor or Grand Mahal Hall",
    featured: false,
    includes: [
      "Crystal daylight theme & florals",
      "18-item classic menu",
      "Gold-rimmed table setting",
      "Dessert trolley & qehwa lounge",
      "Photography-ready lighting",
    ],
  },
];

const MENU = [
  {
    head: "Sizzle & Starters",
    items: ["Chicken Malai Boti", "Seekh Kebab — coal fired", "Chapli Kebab Peshawari", "Aloo Samosa Chaat", "Gol Gappa Station"],
  },
  {
    head: "Handi & Main Course",
    items: ["Chicken Biryani — Sindhi", "Beef Nihari", "Mutton Rogan Josh", "Chicken Karahi Lahori", "Daal Mash Makhni"],
  },
  {
    head: "From the Tandoor",
    items: ["Roghni Naan", "Garlic Naan", "Tandoori Roti", "Cheese Naan", "Kalwanji Paratha"],
  },
  {
    head: "Meetha & Mukhfallis",
    items: ["Gulab Jamun — warm", "Kheer Badami", "Shahi Zarda", "Kulfi Falooda", "Meetha Paan Station"],
  },
];

const GALLERY = [
  { img: IMG.heroStage, label: "Grand Mahal, dressed for a baraat", span: "md:col-span-2 md:row-span-2" },
  { img: IMG.chandelier, label: "The chandelier gallery", span: "" },
  { img: IMG.table, label: "Gold service, walima setting", span: "" },
  { img: IMG.mehndi, label: "Mehndi night, courtyard", span: "" },
  { img: IMG.food, label: "The dastarkhwan, mid-service", span: "" },
  { img: IMG.columns, label: "The marble colonnade", span: "" },
  { img: IMG.exterior, label: "The facade, Main Boulevard", span: "md:col-span-3" },
];

function PackageCard({ p, delay }: { p: (typeof PACKAGES)[number]; delay: number }) {
  return (
    <Reveal delay={delay} dir="scale" className={p.featured ? "md:-mt-8 md:mb-8" : ""}>
      <div
        className={`relative flex h-full flex-col border p-8 transition-all duration-500 md:p-10 ${
          p.featured
            ? "border-gold bg-maroon-ink shadow-[0_30px_80px_-30px_rgba(212,175,55,0.35)]"
            : "border-gold/25 bg-maroon-deep/60 hover:border-gold/60"
        }`}
      >
        {p.featured && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold px-5 py-1.5 text-[10px] font-bold tracking-[0.3em] text-maroon-ink uppercase">
            Most Booked
          </span>
        )}
        <div className="font-urdu text-xl text-gold">{p.urdu}</div>
        <h3 className="font-display mt-1 text-3xl font-bold text-marble">{p.name}</h3>
        <div className="mt-1 text-[10px] font-bold tracking-[0.32em] text-marble/50 uppercase">{p.event}</div>

        <div className="mt-7 border-y border-gold/20 py-5">
          <div className="flex items-baseline gap-2">
            <span className="text-[11px] font-bold tracking-[0.2em] text-gold uppercase">PKR</span>
            <span className="font-display text-4xl font-black text-gold-light">{p.price}</span>
          </div>
          <div className="mt-2 text-xs text-marble/55">
            Hall, décor & service · food {p.plate}
          </div>
        </div>

        <ul className="mt-6 flex-1 space-y-3">
          {p.includes.map((inc) => (
            <li key={inc} className="flex items-start gap-3 text-sm text-marble/75">
              <span className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 ${p.featured ? "bg-gold" : "bg-gold/60"}`} />
              {inc}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center justify-between text-[10px] font-bold tracking-[0.24em] text-gold-light/80 uppercase">
          <span>{p.guests}</span>
          <span>{p.hall}</span>
        </div>
        <a
          href="#/contact"
          className={`sheen mt-6 block py-3.5 text-center text-[11px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
            p.featured
              ? "bg-gold text-maroon-ink hover:bg-gold-light"
              : "border border-gold/50 text-gold-light hover:bg-gold hover:text-maroon-ink"
          }`}
        >
          Enquire for This Package
        </a>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <>
      <PageIntro
        urdu="خدماتِ شاہی"
        crumb="Services"
        title={
          <>
            Halls, Packages & the <span className="text-gold-light italic">Dastarkhwan</span>
          </>
        }
        lead="Four kinds of evenings, three transparent packages, and one kitchen that has never once been outsourced. Everything below is priced openly — surprises belong on the dance floor."
      />
      <ArchTransition fill="var(--color-marble)" />

      {/* ============ EVENT ROWS ============ */}
      <section className="bg-marble py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            dark
            eyebrow="Occasions"
            title={
              <>
                Every Night of the Shadi, <span className="text-maroon italic">Hosted Properly</span>
              </>
            }
          />
          <div className="mt-16 space-y-20">
            {EVENTS.map((e, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={e.name} className="grid items-center gap-10 lg:grid-cols-2">
                  <Reveal dir={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
                    <div className="img-zoom group relative overflow-hidden border border-gold/30">
                      <img src={e.img} alt={e.name} loading="lazy" className="h-72 w-full object-cover md:h-96" />
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon-ink/70 to-transparent opacity-80" />
                      <span className="font-urdu absolute bottom-4 left-5 text-2xl text-gold-light">{e.urdu}</span>
                    </div>
                  </Reveal>
                  <Reveal dir={flip ? "left" : "right"} delay={120} className={flip ? "lg:order-1" : ""}>
                    <h3 className="font-display text-3xl font-bold text-charcoal md:text-4xl">{e.name}</h3>
                    <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-charcoal/70">{e.text}</p>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {e.chips.map((c) => (
                        <span key={c} className="border border-gold-dark/40 bg-maroon-deep/5 px-4 py-2 text-[10px] font-bold tracking-[0.22em] text-maroon uppercase">
                          {c}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#/contact"
                      className="group mt-7 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] text-maroon uppercase transition-colors hover:text-gold-dark"
                    >
                      Plan this evening
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">{Icons.arrow("h-4 w-4")}</span>
                    </a>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PACKAGES ============ */}
      <section className="relative overflow-hidden bg-maroon-deep py-24 md:py-32">
        <div className="jaali-layer opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            center
            eyebrow="Transparent Pricing"
            title={
              <>
                Three Packages, <span className="text-gold-light italic">No Whisper Rates</span>
              </>
            }
            lead="Every rate includes hall, décor, sound, lighting, service staff and the generator. Food is per plate — taste everything before you sign anything."
          />
          <div className="mt-20 grid gap-8 md:grid-cols-3 md:items-stretch">
            <PackageCard p={PACKAGES[0]} delay={0} />
            <PackageCard p={PACKAGES[1]} delay={140} />
            <PackageCard p={PACKAGES[2]} delay={280} />
          </div>
          <Reveal delay={200}>
            <p className="mt-12 text-center text-xs tracking-wide text-marble/45">
              All rates in PKR, exclusive of government tax · Corporate, aqiqah & shendi menus quoted on request ·
              <a href="#/contact" className="text-gold-light underline-offset-4 transition-colors hover:text-gold hover:underline"> request the full rate card</a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ DASTARKHWAN ============ */}
      <section className="bg-marble py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <Reveal dir="left" className="lg:sticky lg:top-32">
              <SectionHeading
                dark
                eyebrow="The Kitchen"
                title={
                  <>
                    The Dastarkhwan — <span className="text-maroon italic">Forty Chefs, One Standard</span>
                  </>
                }
                lead="Nothing arrives frozen, nothing is outsourced, and nothing leaves the pass until Chef Akram has tasted it. Below is a winter menu — yours is built around your family's own favourites."
              />
              <div className="img-zoom mt-10 overflow-hidden border border-gold/30">
                <img src={IMG.food} alt="Dastarkhwan spread on brass platters" loading="lazy" className="h-80 w-full object-cover md:h-[420px]" />
              </div>
            </Reveal>
            <Reveal dir="right" delay={150}>
              <div className="relative border border-gold-dark/50 bg-maroon-ink p-8 shadow-2xl md:p-12">
                <div className="jaali-layer opacity-20" />
                <div className="relative">
                  <div className="text-center">
                    <div className="font-urdu text-2xl text-gold">دسترخوانِ شاہی</div>
                    <h3 className="font-display mt-2 text-3xl font-bold text-marble">Winter Menu</h3>
                    <div className="mt-2 text-[10px] font-bold tracking-[0.32em] text-marble/50 uppercase">
                      A taste of the full card · from PKR 3,200 / plate
                    </div>
                  </div>
                  <OrnamentRule className="mt-8" />
                  <div className="mt-9 grid gap-9 sm:grid-cols-2">
                    {MENU.map((col) => (
                      <div key={col.head}>
                        <h4 className="text-[11px] font-bold tracking-[0.3em] text-gold uppercase">{col.head}</h4>
                        <ul className="mt-4 space-y-2.5 border-l border-gold/25 pl-4">
                          {col.items.map((it) => (
                            <li key={it} className="font-display text-[15px] text-marble/85 italic">{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <OrnamentRule className="mt-10" />
                  <p className="mt-6 text-center text-xs leading-relaxed text-marble/50">
                    Live stations — BBQ, karahi, chaat & paan — added per event.
                    Every menu is finalised after a private tasting for ten.
                  </p>
                  <div className="mt-7 text-center">
                    <GoldLink href="#/contact">Book a Tasting</GoldLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="relative overflow-hidden bg-maroon-ink py-24 md:py-32">
        <div className="jaali-layer opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Gallery"
            title={
              <>
                Evenings, <span className="text-gold-light italic">Framed</span>
              </>
            }
            lead="Unretouched frames from recent seasons — the light, the marble and the mayhem, exactly as your guests will see them."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[220px]">
            {GALLERY.map((g, i) => (
              <Reveal key={g.label + i} delay={i * 80} dir="scale" className={g.span}>
                <div className="img-zoom group relative h-full min-h-[220px] overflow-hidden border border-gold/20 transition-colors duration-500 hover:border-gold/70">
                  <img src={g.img} alt={g.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-maroon-ink/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute right-0 bottom-0 left-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="border border-gold/60 bg-maroon-ink/85 px-3 py-1.5 text-[10px] font-bold tracking-[0.24em] text-gold-light uppercase">
                      {g.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        tone="maroon"
        title={
          <>
            Taste it once. <span className="text-gold-light italic">Then decide.</span>
          </>
        }
        sub="Every package begins with a private tasting for ten guests and an evening walk through the halls. No obligation — but bring an appetite and an empty date in mind."
      />
    </>
  );
}
