import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Briefcase, GraduationCap, BookOpen, Laptop, ArrowUpRight, Download, Languages } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ShinyLink } from "@/components/ui/shiny-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isabella Stancu — Admin & Business Operations | London, UK" },
      { name: "description", content: "Isabella Stancu — Motivated admin professional based in London. Experienced in customer service, Microsoft Office, and business administration. Seeking office-based admin roles." },
      { name: "keywords", content: "Isabella Stancu, Administration, Business Operations, London, UK, Customer Service, Microsoft Office, City Lit" },
      { property: "og:title", content: "Isabella Stancu — Admin & Business Operations" },
      { property: "og:description", content: "Admin professional · Customer Service · Microsoft Office · London, UK." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
      { name: "twitter:title", content: "Isabella Stancu — Admin & Business Operations" },
      { name: "twitter:description", content: "Admin professional · Customer Service · Microsoft Office · London, UK." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Isabella Stancu",
          jobTitle: "Administration Professional",
          telephone: "+44 7501 119985",
          email: "isaviatata@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
          alumniOf: ["Theodor Costescu Economical National College", "City Lit"],
          knowsAbout: ["Administration", "Customer Service", "Microsoft Office", "Business Operations"],
        }),
      },
    ],
  }),
  component: Resume,
});

const PHONE = "+447501119985";
const PHONE_DISPLAY = "+44 7501 119985";
const EMAIL = "isaviatata@gmail.com";
const RESUME_PDF_PATH = "/Isabella-Stancu-CV.pdf";
const RESUME_PDF_FILENAME = "CV_ISABELLA_STANCU.pdf";

const skills = [
  "Customer Service & Client Interaction",
  "Communication Skills",
  "Organisation & Time Management",
  "Teamwork & Collaboration",
  "Problem Solving",
  "Attention to Detail",
  "Ability to Work Under Pressure",
  "Microsoft Word, Excel, PowerPoint & Access",
];

const experience = [
  {
    role: "Barista",
    company: "Costa Coffee, Deptford",
    period: "March 2025 – April 2026",
    sub: "London, UK · Fast-paced retail customer service",
    points: [
      "Delivered high-quality customer service in a fast-paced environment",
      "Handled customer queries and resolved issues professionally",
      "Worked effectively as part of a team to ensure smooth daily operations",
      "Managed multiple tasks efficiently during busy periods",
      "Maintained high standards of organisation, cleanliness, and presentation",
      "Followed company procedures and standards consistently",
    ],
  },
];

const education = [
  {
    degree: "Business Administration Course",
    school: "City Lit, London",
    period: "June – July 2026",
    detail: "Microsoft Word, Excel, PowerPoint & Access — document creation, data analysis, presentations, and database management",
  },
  {
    degree: "Technician in Tourism",
    school: "Theodor Costescu Economical National College, Drobeta Turnu-Severin, Romania",
    period: "2020 – 2024",
    detail: "Romanian Baccalaureate Diploma · Graduation average: 7.78 · English B1–B2 · Digital skills: Power user",
  },
];

const languages = [
  { language: "English", level: "Advanced" },
  { language: "Romanian", level: "Fluent" },
  { language: "Italian", level: "Fluent" },
  { language: "Spanish", level: "Beginner" },
];

const interests = ["Writing", "Reading", "Using computers and improving IT skills", "Organising and planning tasks"];

function Resume() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6 lg:grid-cols-12">

          <Reveal delay={0} className="md:col-span-6 lg:col-span-7">
            <TiltCard className="h-full p-8 md:p-10">
              <Label>Profile</Label>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
                Isabella Stancu
              </h1>
              <p className="mt-3 text-lg font-medium text-primary md:text-xl">
                Administration &amp; Business Operations
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Customer Service · Microsoft Office · London, UK
              </p>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                Motivated and reliable individual with experience in fast-paced customer service
                environments. Strong communication, organisation, and problem-solving skills developed
                through hands-on work in a busy retail setting. Now seeking an admin role to build
                formal office-based skills, gain professional experience in administration, and develop
                a long-term career in business operations.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> London, UK</span>
                <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5"><Laptop className="h-4 w-4 text-primary" /> Office-based roles</span>
                <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-primary" /> City Lit certified</span>
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
              <Label>Key Skills</Label>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">What I bring</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[13px] font-medium text-foreground/80 transition hover:border-primary/40 hover:bg-accent hover:text-accent-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={200} className="md:col-span-6 lg:col-span-12">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <Label>Education &amp; Training</Label>
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
                      {e.detail && <div className="mt-1 text-[13px] leading-relaxed text-foreground/70">{e.detail}</div>}
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
              className="md:col-span-6 lg:col-span-12"
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

          <Reveal delay={340} className="md:col-span-6 lg:col-span-6">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <Label>Languages</Label>
              <div className="mt-4 space-y-3">
                {languages.map((l) => (
                  <div key={l.language} className="flex items-center gap-3">
                    <div className="shrink-0 rounded-xl border border-border bg-secondary p-2.5 text-primary">
                      <Languages className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-ink">{l.language}</div>
                      <div className="text-sm text-muted-foreground">{l.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={400} className="md:col-span-6 lg:col-span-6">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <Label>Interests</Label>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[13px] font-medium text-foreground/80">
                    {interest}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>

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
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">CV</div>
        <div className="mt-0.5 text-sm font-medium text-ink">Download PDF</div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </a>
  );
}
