import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Briefcase, GraduationCap, Sparkles, ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sam Shahi — Business Development Manager | Life Sciences" },
      {
        name: "description",
        content:
          "Sam Shahi — Senior Business Development Manager based in Cardiff. 10+ years growing life-sciences, pharma and analytical-testing accounts across the UK & Ireland.",
      },
      { name: "keywords", content: "Sam Shahi, Business Development Manager, Life Sciences BDM, Cardiff, UK, Ireland, Pharmaceutical Sales, Key Account Manager" },
      { property: "og:title", content: "Sam Shahi — Business Development Manager" },
      { property: "og:description", content: "Senior BDM · Life Sciences · Key Accounts · Cardiff, UK." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sam Shahi — Business Development Manager" },
      { name: "twitter:description", content: "Senior BDM · Life Sciences · Key Accounts · Cardiff, UK." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sam Shahi",
          jobTitle: "Senior Business Development Manager",
          telephone: "+44 7442 005955",
          address: { "@type": "PostalAddress", addressLocality: "Cardiff", addressRegion: "Wales", addressCountry: "UK" },
          alumniOf: ["De Montfort University"],
          knowsAbout: ["Life Sciences", "Pharmaceutical Sales", "Key Account Management", "B2B Business Development"],
        }),
      },
    ],
  }),
  component: Resume,
});

const PHONE = "+447442005955";
const PHONE_DISPLAY = "+44 7442 005955";
const EMAIL = "sam.shahi.bdm@gmail.com";

const competencies = [
  "New Business Development",
  "Life Sciences & Regulated Markets",
  "Commercial Negotiation (CDA / MSA)",
  "Cross-Functional Collaboration",
  "Service & Solution Selling",
  "Key Account Growth",
  "Proposal Design & Presentation",
  "CRM Pipeline Management",
  "Stakeholder Engagement",
  "Target Setting & Forecasting",
];

const experience = [
  {
    role: "Senior Business Development Manager",
    company: "Taylor-Marriott",
    period: "2023 – 2026",
    sub: "Digital product design, build & growth for life-sciences and regulated industries",
    points: [
      "Own new-business growth for bespoke digital products, client portals, and marketing systems sold into life-sciences, analytical testing, pharmaceutical, and related regulated organisations.",
      "Closed 30+ new digital-solution contracts over 24 months, with a 60%+ proposal-to-close win rate against annual targets agreed with leadership.",
      "Grew key-account revenue 30%+ YoY by diagnosing client bottlenecks, scoping tailored platforms with engineering, and presenting commercial proposals to MD/VP stakeholders.",
      "Manage CDAs, MSAs, and pricing negotiations through to signature; keep CRM forecasts current and partner with delivery to protect go-live quality and retention.",
    ],
  },
  {
    role: "Business Development Manager",
    company: "Herbal Creations",
    period: "2018 – 2021",
    sub: "Manufacturer & global exporter of phytochemicals and herbal extracts (GMP / HACCP / ISO)",
    points: [
      "Drove B2B development for a manufacturer of 800+ herbal extracts and phytochemicals, selling into nutraceutical, pharmaceutical, and cosmetic formulators across EU and US supply chains.",
      "Grew assigned export revenue 34% over three years and opened 22 new distributor and formulator accounts, leveraging USA and Europe warehouse capability for reliable fulfilment.",
      "Won multi-SKU supply agreements by aligning customised extract specs, COAs, and regulatory documentation (GMP, HACCP, ISO, Halal, Kosher) to buyer quality and compliance needs.",
      "Partnered with QC and production on rapid project quotes; negotiated commercial terms and monitored satisfaction to expand share of wallet with priority accounts.",
    ],
  },
  {
    role: "Sales Development Representative",
    company: "Global Tech Users",
    period: "2014 – 2018",
    sub: "B2B contact databases, technographics & data enrichment services",
    points: [
      "Prospected and qualified buyers of targeted B2B datasets, installed-tech intelligence, and data-enrichment services across marketing, sales ops, and IT decision-makers in 135+ country markets.",
      "Generated 180+ sales-accepted leads per quarter on average and contributed £920K+ in influenced pipeline annually through structured outreach and CRM-disciplined follow-up.",
      "Exceeded SDR quota by 118% in the final two years by refining ICP targeting (C-level, healthcare, and international B2B segments) and improving meeting-to-opportunity conversion.",
      "Handed off high-intent opportunities with clear discovery notes, enabling AEs to close data-subscription and enrichment deals faster and with fewer lost cycles.",
    ],
  },
];

const education = [
  { degree: "MSc International Business Management", school: "De Montfort University, Leicester", period: "2021 – 2022" },
  { degree: "BBM International Business Management", school: "India", period: "2014 – 2017" },
];

const stats = [
  { k: "10+", v: "Years commercial experience" },
  { k: "60%+", v: "Proposal-to-close win rate" },
  { k: "34%", v: "Export revenue growth" },
  { k: "£920K+", v: "Annual influenced pipeline" },
];

function Resume() {
  return (
    <main className="grain relative min-h-screen overflow-hidden">
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.82_0.13_82/0.18),transparent)] blur-3xl" />

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Sam<span className="text-gold-gradient"> Shahi</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-foreground">About</a>
            <a href="#experience" className="transition hover:text-foreground">Experience</a>
            <a href="#skills" className="transition hover:text-foreground">Skills</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/20"
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative mx-auto max-w-6xl px-5 pt-16 pb-24 md:pt-28 md:pb-32">
        <Reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Open to BDM roles · UK &amp; Ireland
        </Reveal>

        <Reveal as="header" delay={80}>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Sam Shahi.
            <br />
            <span className="text-gold-gradient">Business growth,</span>
            <br />
            engineered.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Senior Business Development Manager with 10+ years turning pipeline into profitable,
            service-led accounts across life-sciences, pharmaceutical and analytical-testing markets.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Cardiff, Wales</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Hybrid · Home-based · UK &amp; Ireland travel</span>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.82_0.13_82/0.6)] transition hover:scale-[1.03] hover:shadow-[0_10px_40px_-5px_oklch(0.82_0.13_82/0.8)]"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${PHONE.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-primary/50 hover:bg-surface"
            >
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-primary/50 hover:bg-surface"
            >
              <Mail className="h-4 w-4 text-primary" /> Email
            </a>
          </div>
        </Reveal>

        {/* stats */}
        <Reveal delay={600}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.k} className="bg-surface/70 p-6 backdrop-blur">
                <div className="font-display text-3xl text-gold-gradient md:text-4xl">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionLabel>01 — Profile</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            Analysing organisations. <span className="text-gold-gradient">Designing offers.</span> Converting pipeline.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Progressed from SDR to Senior BDM selling digital solutions into life-sciences and regulated
            industries, with earlier B2B growth for a GMP-certified phytochemical and herbal-extract
            manufacturer. Skilled at analysing client organisations, designing tailored commercial offers,
            managing CDA/MSA-style contracting, and converting pipeline into profitable, service-led accounts.
          </p>
        </Reveal>
      </section>

      {/* EXPERIENCE — sticky stack on mobile */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionLabel>02 — Experience</SectionLabel>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">A decade of commercial wins.</h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6 md:gap-10">
          {experience.map((job, i) => (
            <div key={job.company} className="stack-card md:static" style={{ top: `${5 + i * 1.5}rem` }}>
              <Reveal delay={i * 80}>
                <TiltCard className="p-7 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-widest text-primary">{job.period}</div>
                      <h3 className="mt-2 font-display text-2xl leading-tight md:text-3xl">{job.role}</h3>
                      <div className="mt-1 text-lg text-foreground/90">{job.company}</div>
                      <div className="mt-1 max-w-xl text-sm text-muted-foreground">{job.sub}</div>
                    </div>
                    <div className="shrink-0 rounded-full border border-primary/30 bg-primary/10 p-3 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-6 h-px shimmer-line" />
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {job.points.map((p) => (
                      <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                        {p}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionLabel>03 — Core Competencies</SectionLabel>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Where I add value.</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((c, i) => (
            <Reveal key={c} delay={i * 40}>
              <TiltCard className="p-5" intensity={5}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium md:text-base">{c}</span>
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-70" />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionLabel>04 — Education</SectionLabel>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Foundations.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100}>
              <TiltCard className="p-7">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-full border border-primary/30 bg-primary/10 p-3 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-primary">{e.period}</div>
                    <h3 className="mt-1.5 font-display text-xl leading-snug">{e.degree}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{e.school}</div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <TiltCard className="overflow-hidden p-10 md:p-16" intensity={4}>
            <SectionLabel>05 — Let's talk</SectionLabel>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
              Ready to grow your <span className="text-gold-gradient">next account.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Available for Business Development roles across the UK &amp; Ireland — hybrid or home-based.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <ContactButton href={`tel:${PHONE}`} icon={<Phone className="h-5 w-5" />} label="Call" value={PHONE_DISPLAY} />
              <ContactButton
                href={`https://wa.me/${PHONE.replace("+", "")}`}
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                value="Message me"
                external
              />
              <ContactButton href={`mailto:${EMAIL}`} icon={<Mail className="h-5 w-5" />} label="Email" value={EMAIL} />
            </div>
          </TiltCard>
        </Reveal>
      </section>

      <footer className="border-t border-border/40 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Sam Shahi · Cardiff, Wales</div>
          <div>Business Development Manager · Life Sciences</div>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}

function ContactButton({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface"
    >
      <div className="rounded-full border border-primary/30 bg-primary/10 p-3 text-primary transition group-hover:scale-110">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 truncate text-sm font-medium text-foreground">{value}</div>
      </div>
      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-primary opacity-0 transition group-hover:opacity-100" />
    </a>
  );
}
