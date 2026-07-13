import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Briefcase, GraduationCap, Plane, Laptop, ArrowUpRight, Download } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ShinyLink } from "@/components/ui/shiny-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sam Shahi — Business Development Manager | Life Sciences" },
      { name: "description", content: "Sam Shahi — Senior Business Development Manager based in Cardiff. 10+ years growing life-sciences, pharma and analytical-testing accounts across the UK & Ireland." },
      { name: "keywords", content: "Sam Shahi, Business Development Manager, Life Sciences BDM, Cardiff, UK, Ireland, Pharmaceutical Sales, Key Account Manager" },
      { property: "og:title", content: "Sam Shahi — Business Development Manager" },
      { property: "og:description", content: "Senior BDM · Life Sciences · Key Accounts · Cardiff, UK." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
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
          email: "samir00524@gmail.com",
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
const EMAIL = "samir00524@gmail.com";
const RESUME_PDF_PATH = "/Sam-Shahi-Resume.pdf";
const RESUME_PDF_FILENAME = "Sam Shahi - 07442005955 - IBM MSc - 10+ Yrs Exp.pdf";

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

function Resume() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6 lg:grid-cols-12">

          <Reveal delay={0} className="md:col-span-6 lg:col-span-7">
            <TiltCard className="h-full p-8 md:p-10">
              <Label>Profile</Label>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
                Sam Shahi
              </h1>
              <p className="mt-3 text-lg font-medium text-primary md:text-xl">
                Senior Business Development Manager
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Life Sciences · Key Accounts · UK &amp; Ireland
              </p>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                Results-driven BDM progressing from SDR to Senior BDM, with a track record selling digital
                solutions into life-sciences and regulated industries, and earlier B2B growth for a
                GMP-certified phytochemical and herbal-extract manufacturer.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Cardiff, Wales</span>
                <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5"><Laptop className="h-4 w-4 text-primary" /> Hybrid</span>
                <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5"><Plane className="h-4 w-4 text-primary" /> Open to international travel</span>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={80} className="md:col-span-6 lg:col-span-5">
            <TiltCard className="h-full p-6 md:p-8" intensity={1}>
              <Label>Contact</Label>
              <div className="mt-4 grid gap-3">
                <ContactButton href={`tel:${PHONE}`} icon={<Phone className="h-5 w-5" />} label="Call" value={PHONE_DISPLAY} tone="primary" />
                <ContactButton href={`https://wa.me/${PHONE.replace("+", "")}`} icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value="Message on WhatsApp" external tone="accent" />
                <ContactButton href={`mailto:${EMAIL}`} icon={<Mail className="h-5 w-5" />} label="Email" value={EMAIL} />
                <DownloadPdfButton href={RESUME_PDF_PATH} filename={RESUME_PDF_FILENAME} />
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={140} className="md:col-span-6 lg:col-span-12">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <Label>Core Competencies</Label>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">Where I bring value</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {competencies.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[13px] font-medium text-foreground/80 transition hover:border-primary/40 hover:bg-accent hover:text-accent-foreground">
                    {c}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={200} className="md:col-span-6 lg:col-span-12">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <Label>Education</Label>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                {education.map((e) => (
                  <div key={e.degree} className="flex items-start gap-3">
                    <div className="shrink-0 rounded-xl border border-border bg-secondary p-2.5 text-primary">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{e.period}</div>
                      <div className="mt-0.5 text-[15px] font-semibold text-ink">{e.degree}</div>
                      <div className="text-sm text-muted-foreground">{e.school}</div>
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          {experience.map((job, i) => (
            <Reveal
              key={job.company}
              delay={260 + i * 80}
              className={i === 2 ? "md:col-span-6 lg:col-span-12" : "md:col-span-6 lg:col-span-6"}
            >
              <TiltCard className="h-full p-7 md:p-8" intensity={1}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <Label>{job.period}</Label>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">{job.role}</h3>
                    <div className="mt-1 text-[15px] font-medium text-primary">{job.company}</div>
                    <div className="mt-1 max-w-xl text-sm text-muted-foreground">{job.sub}</div>
                  </div>
                  <div className="shrink-0 rounded-xl border border-border bg-secondary p-2.5 text-primary">
                    <Briefcase className="h-4 w-4" />
                  </div>
                </div>
                <ul className="mt-6 space-y-2.5 text-[14px] leading-relaxed text-foreground/80">
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70">
                      {p}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}

          <ContactForm />
        </div>
      </main>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function ContactButton({
  href, icon, label, value, external, tone,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
  tone?: "primary" | "accent";
}) {
  const isPrimary = tone === "primary";
  const isAccent = tone === "accent";
  const isNativeProtocol = href.startsWith("mailto:") || href.startsWith("tel:");

  const openHref = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isNativeProtocol) return;
    // Ensure mailto/tel open the system client even if a parent handler interferes
    event.preventDefault();
    window.location.href = href;
  };

  const content = (
    <>
      <div className={`rounded-lg p-2.5 ${isPrimary ? "bg-white/15 text-primary-foreground" : isAccent ? "bg-primary/10 text-primary" : "bg-secondary text-primary"}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className={`text-[11px] font-semibold uppercase tracking-wider ${isPrimary ? "text-primary-foreground/80" : isAccent ? "text-primary/80" : "text-muted-foreground"}`}>{label}</div>
        <div className={`mt-0.5 truncate text-sm font-medium ${isPrimary ? "text-primary-foreground" : "text-ink"}`}>{value}</div>
      </div>
      <ArrowUpRight className={`h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isPrimary ? "text-primary-foreground/90" : isAccent ? "text-primary" : "text-primary opacity-0 group-hover:opacity-100"}`} />
    </>
  );

  if (isPrimary) {
    return (
      <ShinyLink
        href={href}
        onClick={openHref}
        className="group flex items-center rounded-xl border border-primary bg-primary px-4 py-3.5 text-primary-foreground shadow-[0_2px_8px_oklch(0.55_0.16_255/0.25)] transition-shadow duration-300 hover:shadow-[0_0_20px_oklch(0.55_0.16_255/0.3)] hover:brightness-110"
      >
        {content}
      </ShinyLink>
    );
  }

  return (
    <a
      href={href}
      onClick={openHref}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 transition ${
        isAccent
          ? "border border-primary/25 bg-accent text-left hover:border-primary/40 hover:bg-accent/80"
          : "border border-border bg-surface hover:border-primary/40 hover:bg-secondary"
      }`}
    >
      {content}
    </a>
  );
}

function DownloadPdfButton({ href, filename }: { href: string; filename: string }) {
  return (
    <a
      href={href}
      download={filename}
      className="group flex w-full items-center gap-4 rounded-xl border border-border bg-surface px-4 py-3.5 text-left transition hover:border-primary/40 hover:bg-secondary"
    >
      <div className="rounded-lg bg-secondary p-2.5 text-primary">
        <Download className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Resume</div>
        <div className="mt-0.5 text-sm font-medium text-ink">Download PDF</div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </a>
  );
}
