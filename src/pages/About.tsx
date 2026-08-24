import { IMG } from "../images";
import { ArchFrame, ArchTransition } from "../components/ornaments";
import {
  CtaBand,
  GoldLink,
  PageIntro,
  Reveal,
  SectionHeading,
  Stat,
  Testimonials,
} from "../components/ui";

const TIMELINE = [
  {
    year: "1998",
    title: "The First Mehrab",
    text: "Mian Riaz Ahmed opens a 300-guest hall with borrowed chandeliers and his mother's recipes. The first baraat: 280 guests, one generator, zero compromises.",
  },
  {
    year: "2004",
    title: "Noor Hall Opens",
    text: "A second hall joins the family. The 1,000th event is marked the only way we know — free kheer for the entire floor.",
  },
  {
    year: "2009",
    title: "Dastarkhwan Academy",
    text: "The kitchen becomes a brigade of forty chefs. The nihari recipe is finally written down — and immediately locked in the office safe.",
  },
  {
    year: "2014",
    title: "The Grand Mahal Rises",
    text: "Two years of rebuilding deliver 38,000 sq ft, a 60-ft royal stage, and two hundred chandeliers strung by hand.",
  },
  {
    year: "2019",
    title: "Hall of the Decade",
    text: "Lahore Wedding Awards names Shahi Mahal Banquet Hall of the Decade. Mian Sahib sends the trophy to the kitchen with a note: it belongs to the chefs.",
  },
  {
    year: "2023",
    title: "Light, Sound, Silence",
    text: "A full DMX lighting rig, silent 1,600 kVA generators, and a facade illumination visible from the length of Main Boulevard.",
  },
  {
    year: "2026",
    title: "The Second Generation",
    text: "Sadia Riaz takes the helm as event 3,800 is hosted — by the very family whose walima opened our doors in 1998.",
  },
];

const TEAM = [
  {
    initials: "MR",
    name: "Mian Riaz Ahmed",
    role: "Founder & Chairman",
    line: "Still tastes every handi before the first guest is seated.",
  },
  {
    initials: "SR",
    name: "Sadia Riaz",
    role: "Managing Director",
    line: "Second generation; trained in Dubai, rooted in Gulberg.",
  },
  {
    initials: "AQ",
    name: "Chef Akram Qureshi",
    role: "Executive Chef, Dastarkhwan",
    line: "Thirty-two years of degs, dum and discipline.",
  },
  {
    initials: "BH",
    name: "Bilal Hussain",
    role: "Head of Events",
    line: "Nine hundred barats coordinated — runs the floor on a whisper.",
  },
];

const VALUES = [
  {
    urdu: "مہمان نوازی",
    word: "Mehmaan-Nawaazi",
    text: "The guest is a trust. The driver who brought the family is served the same qehwa as the father of the groom — and the bill never shows a difference.",
  },
  {
    urdu: "نفاست",
    word: "Nifasat",
    text: "Refinement is invisible until it is absent. We obsess over the details no one should notice — so that everyone does.",
  },
  {
    urdu: "وعدہ",
    word: "Waada Pukka",
    text: "A date written in our register is sacred. In twenty-seven years we have postponed an event exactly once — and that was a flood.",
  },
];

const QUOTES = [
  {
    text: "My daughter's wedding was the third event our family has held at Shahi Mahal. They kept the same head waiter from my own baraat in 2001 — on purpose.",
    name: "Naveed Alam",
    meta: "Third-Generation Host · October 2025",
  },
  {
    text: "We toured eleven halls across Lahore. Shahi Mahal was the only one where the chairman himself walked the kitchen with us.",
    name: "Rukhsana Bajwa",
    meta: "Mother of the Groom · September 2025",
  },
  {
    text: "Their word is their bond. When our nikkah date clashed with a hall emergency elsewhere, they moved mountains instead of making excuses.",
    name: "Kamran & Ayesha Sheikh",
    meta: "Nikkah & Walima · December 2025",
  },
];

export function About() {
  return (
    <>
      <PageIntro
        urdu="داستانِ شاہی"
        crumb="About"
        title={
          <>
            A Legacy of <span className="text-gold-light italic">Celebration</span>
          </>
        }
        lead="Twenty-seven years, one marble facade, and a register of 3,800 families who trusted us with the most photographed night of their lives."
      />
      <ArchTransition fill="var(--color-marble)" />

      {/* ============ STORY ============ */}
      <section className="bg-marble py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <SectionHeading
                dark
                eyebrow="Since 1998"
                title={
                  <>
                    From Borrowed Chandeliers to <span className="text-maroon italic">Lahore&rsquo;s Address</span>
                  </>
                }
              />
              <Reveal delay={180}>
                <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-charcoal/75">
                  <p>
                    Shahi Mahal began the way most great Lahore stories do —
                    with food. In 1998, Mian Riaz Ahmed had no hall of his own,
                    only his mother&rsquo;s recipes and a conviction that a
                    wedding deserved better than the tired banquet boxes of the
                    time. He rented a plot on Main Boulevard, borrowed
                    chandeliers from a closing hotel, and hosted his first
                    baraat under canvas.
                  </p>
                  <p>
                    The canvas came down in 2004. The standards never did. Every
                    hall we have built since was designed backwards from the
                    dastarkhwan — the kitchen at the heart, the marble around
                    it — because in this house, the meal is the monument.
                  </p>
                  <p>
                    Today the second generation leads, the chefs have grey
                    hair, and the register holds 3,800 families. Some of them
                    have come back three generations deep. That, not the
                    marble, is what we consider the building.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-9 flex flex-wrap items-center gap-8">
                  <GoldLink href="#/contact">Host With Us</GoldLink>
                  <div>
                    <div className="font-display text-2xl text-maroon italic">Mian Riaz Ahmed</div>
                    <div className="mt-0.5 text-[10px] font-bold tracking-[0.32em] text-charcoal/50 uppercase">
                      Founder, still on the floor
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal dir="right" className="order-1 lg:order-2">
              <div className="relative">
                <ArchFrame src={IMG.exterior} alt="Shahi Mahal facade illuminated at night" className="h-[420px] md:h-[560px]" />
                <div className="absolute -bottom-5 -left-4 border border-gold/50 bg-emerald-deep px-6 py-4 shadow-xl md:-left-8">
                  <div className="font-display text-3xl font-bold text-gold-light">3,800</div>
                  <div className="mt-1 text-[10px] font-bold tracking-[0.3em] text-marble/70 uppercase">
                    Families in our register
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ NUMBERS ============ */}
      <section className="relative overflow-hidden border-y border-gold/20 bg-maroon-deep py-16">
        <div className="jaali-layer opacity-40" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
          <Stat value={140} suffix="+" label="Team & Artisans" />
          <Stat value={40} label="Chefs in the Dastarkhwan" />
          <Stat value={98} suffix="%" label="Families Return to Us" />
          <Stat value={6} label="Approved Décor Ateliers" />
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="relative overflow-hidden bg-maroon-ink py-24 md:py-32">
        <div className="jaali-layer opacity-25" />
        <div className="relative mx-auto max-w-5xl px-6">
          <SectionHeading
            center
            eyebrow="Milestones"
            title={
              <>
                The Register of <span className="text-gold-light italic">Years</span>
              </>
            }
          />
          <div className="relative mt-16">
            <span className="absolute top-0 bottom-0 left-[19px] w-px bg-gold/25 md:left-1/2" aria-hidden="true" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal key={t.year} dir={left ? "left" : "right"}>
                    <div className={`relative flex gap-8 md:items-center ${left ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      <span className="absolute left-[19px] top-1 z-10 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border border-gold bg-maroon-ink md:left-1/2" aria-hidden="true" />
                      <div className="ml-12 flex-1 md:ml-0 md:w-1/2 md:px-10">
                        <div className="font-display text-4xl font-black text-gold/85">{t.year}</div>
                        <h3 className="font-display mt-2 text-2xl font-bold text-marble">{t.title}</h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-marble/60">{t.text}</p>
                      </div>
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="bg-marble py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            dark
            center
            eyebrow="The House"
            title={
              <>
                Hands Behind <span className="text-maroon italic">the Hospitality</span>
              </>
            }
            lead="A palace is only as royal as its people. These four have collectively hosted more weddings than most families attend."
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 110} dir="scale">
                <div className="group text-center">
                  <div className="relative mx-auto w-40">
                    <div className="clip-arch relative h-48 overflow-hidden border-0 bg-maroon-deep transition-all duration-500 group-hover:bg-maroon">
                      <div className="jaali-layer opacity-50" />
                      <div className="relative flex h-full items-center justify-center">
                        <span className="font-display text-5xl font-black text-gold transition-transform duration-500 group-hover:scale-110">
                          {m.initials}
                        </span>
                      </div>
                    </div>
                    <span className="absolute -bottom-3 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border border-gold bg-marble" aria-hidden="true" />
                  </div>
                  <h3 className="font-display mt-7 text-xl font-bold text-charcoal">{m.name}</h3>
                  <div className="mt-1.5 text-[10px] font-bold tracking-[0.3em] text-gold-dark uppercase">{m.role}</div>
                  <p className="mx-auto mt-3 max-w-[240px] text-sm leading-relaxed text-charcoal/60">{m.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="relative overflow-hidden bg-maroon-deep py-24 md:py-32">
        <div className="jaali-layer opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="House Code"
            title={
              <>
                Three Words We <span className="text-gold-light italic">Refuse to Translate</span>
              </>
            }
          />
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.word} delay={i * 140}>
                <div className="group border-t-2 border-gold/40 pt-8 transition-colors duration-500 hover:border-gold">
                  <div className="font-urdu text-3xl text-gold-light">{v.urdu}</div>
                  <h3 className="font-display mt-3 text-2xl font-bold text-marble">{v.word}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-marble/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-marble py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            dark
            center
            eyebrow="Three Generations"
            title={
              <>
                Families Who <span className="text-maroon italic">Keep Coming Back</span>
              </>
            }
          />
          <div className="mt-16">
            <Testimonials quotes={QUOTES} dark />
          </div>
        </div>
      </section>

      <CtaBand
        tone="maroon"
        title={
          <>
            Write your family into <span className="text-gold-light italic">the register.</span>
          </>
        }
        sub="Every family in our book began with the same visit — an evening walk through the halls, a taste from the dastarkhwan, and a date circled in gold."
      />
    </>
  );
}
