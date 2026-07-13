import { Phone, Mail, MessageCircle, MapPin, Briefcase, GraduationCap, Car } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const cardClass =
  "relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-12px_rgba(16,24,40,0.08)]";

function PdfLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function PdfContactLink({
  href,
  icon,
  label,
  value,
  primary,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-4 rounded-xl border px-4 py-3.5 no-underline",
        primary ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface text-ink",
      )}
    >
      <div className={cn("rounded-lg p-2.5", primary ? "bg-white/15" : "bg-secondary text-primary")}>{icon}</div>
      <div className="min-w-0 flex-1">
        <div className={cn("text-[11px] font-semibold uppercase tracking-wider", primary ? "text-primary-foreground/80" : "text-muted-foreground")}>
          {label}
        </div>
        <div className={cn("mt-0.5 text-sm font-medium", primary ? "text-primary-foreground" : "text-ink")}>{value}</div>
      </div>
    </a>
  );
}

export interface ResumePdfData {
  phone: string;
  phoneDisplay: string;
  email: string;
  competencies: string[];
  education: { degree: string; school: string; period: string }[];
  experience: {
    role: string;
    company: string;
    period: string;
    sub: string;
    points: string[];
  }[];
}

export const ResumePdfSource = forwardRef<HTMLDivElement, { data: ResumePdfData }>(function ResumePdfSource(
  { data },
  ref,
) {
  const { phone, phoneDisplay, email, competencies, education, experience } = data;

  return (
    <div ref={ref} data-pdf-export className="grid grid-cols-12 gap-4 bg-background p-8 text-foreground">
      <div className={cn(cardClass, "col-span-7 p-8")}>
        <PdfLabel>Profile</PdfLabel>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-ink">Sam Shahi</h1>
        <p className="mt-3 text-xl font-medium text-primary">Senior Business Development Manager</p>
        <p className="mt-1 text-sm text-muted-foreground">Life Sciences · Key Accounts · UK &amp; Ireland</p>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
          Results-driven BDM progressing from SDR to Senior BDM, with a track record selling digital solutions into
          life-sciences and regulated industries, and earlier B2B growth for a GMP-certified phytochemical and
          herbal-extract manufacturer.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" /> Cardiff, Wales
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Hybrid · Home-based</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="inline-flex items-center gap-1.5">
            <Car className="h-4 w-4 text-primary" /> Open to UK &amp; Ireland travel
          </span>
        </div>
      </div>

      <div className={cn(cardClass, "col-span-5 p-6")}>
        <PdfLabel>Contact</PdfLabel>
        <div className="mt-4 grid gap-3">
          <PdfContactLink href={`tel:${phone}`} icon={<Phone className="h-5 w-5" />} label="Call" value={phoneDisplay} primary />
          <PdfContactLink
            href={`https://wa.me/${phone.replace("+", "")}`}
            icon={<MessageCircle className="h-5 w-5" />}
            label="WhatsApp"
            value="Message on WhatsApp"
          />
          <PdfContactLink href={`mailto:${email}`} icon={<Mail className="h-5 w-5" />} label="Email" value={email} />
        </div>
      </div>

      <div className={cn(cardClass, "col-span-12 p-7")}>
        <PdfLabel>Core Competencies</PdfLabel>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">Where I bring value</h3>
        <div className="mt-6 flex flex-wrap gap-2">
          {competencies.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[13px] font-medium text-foreground/80"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className={cn(cardClass, "col-span-12 p-7")}>
        <PdfLabel>Education</PdfLabel>
        <div className="mt-4 grid grid-cols-2 gap-5">
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
      </div>

      {experience.map((job) => (
        <div key={job.company} className={cn(cardClass, "col-span-6 p-7")}>
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-xl border border-border bg-secondary p-2.5 text-primary">
              <Briefcase className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <PdfLabel>{job.period}</PdfLabel>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{job.role}</h3>
              <div className="mt-1 text-[15px] font-medium text-primary">{job.company}</div>
              <div className="mt-1 max-w-xl text-sm text-muted-foreground">{job.sub}</div>
            </div>
          </div>
          <ul className="mt-6 space-y-2.5 text-[14px] leading-relaxed text-foreground/80">
            {job.points.map((p) => (
              <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70">
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});
