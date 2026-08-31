import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ComponentType, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Download,
  FileText,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { getRequestOrigin } from "@/lib/origin.functions";
import { EMAIL, PHONE, PHONE_DISPLAY, PROFILE, RESUME_PDF_FILENAME, RESUME_PDF_PATH } from "@/lib/profile";
import { SHARE_PAGE_META } from "@/lib/sharePageMeta";
import { cn } from "@/lib/utils";

const FORM_NAME = "contact";

const SHARE_CARD_CLASS = "relative isolate overflow-hidden text-primary-foreground";

const SHARE_CARD_OVERLAY =
  "linear-gradient(165deg, oklch(0.58 0.12 48 / 0.92) 0%, oklch(0.38 0.06 50 / 0.96) 100%)";

const SHARE_TAB_CLASS =
  "group flex w-full min-h-[3.25rem] items-center rounded-xl border border-ink/10 bg-surface px-5 py-3 text-base font-medium text-ink shadow-[0_2px_10px_rgba(60,40,30,0.12)] transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.99]";

const SHARE_TAB_ICON_CLASS = "h-5 w-5 shrink-0 text-primary";

const SHARE_FIELD_CLASS =
  "h-11 w-full rounded-xl border border-border bg-surface px-4 text-base text-ink placeholder:text-muted-foreground transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/15";

const SHARE_INSET_PANEL_CLASS =
  "overflow-hidden rounded-xl border border-border bg-surface shadow-[0_2px_10px_rgba(60,40,30,0.12)]";

const morphTransition = { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] as const };

function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`)
    .join("&");
}

function ShareTabAnimatedArrow() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <ArrowRight className="h-5 w-5 shrink-0 text-primary/75" strokeWidth={2.5} aria-hidden />;
  }

  return (
    <motion.span
      aria-hidden
      className="flex shrink-0 items-center"
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
    >
      <ArrowRight className="h-5 w-5 shrink-0 text-primary/75" strokeWidth={2.5} />
    </motion.span>
  );
}

function ShareTabContent({
  label,
  icon: Icon,
  trailing,
}: {
  label: string;
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>;
  trailing?: ReactNode;
}) {
  return (
    <div className="relative flex w-full items-center self-stretch">
      <span className="relative z-10 flex shrink-0 items-center">
        {Icon ? (
          <Icon className={SHARE_TAB_ICON_CLASS} strokeWidth={2.5} aria-hidden />
        ) : (
          <span className={SHARE_TAB_ICON_CLASS} aria-hidden />
        )}
      </span>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-10 text-center font-sans leading-snug tabular-nums">
        {label}
      </span>
      <span className="relative z-10 ml-auto flex shrink-0 items-center">
        {trailing ?? <span className="h-5 w-5 shrink-0" aria-hidden />}
      </span>
    </div>
  );
}

type ShareLink = {
  label: string;
  href: string;
  external?: boolean;
  download?: string;
  animatedArrow?: boolean;
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>;
};

function ShareMorphPanel({ panelKey, children }: { panelKey: string; children: ReactNode }) {
  return (
    <motion.div
      key={panelKey}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={morphTransition}
      className="overflow-hidden"
    >
      <div>{children}</div>
    </motion.div>
  );
}

function ShareLinkButton({ label, href, external, download, animatedArrow, icon: Icon }: ShareLink) {
  const trailing = animatedArrow ? <ShareTabAnimatedArrow /> : undefined;
  const content = <ShareTabContent label={label} icon={Icon} trailing={trailing} />;

  if (href.startsWith("/")) {
    return (
      <Link to={href} className={SHARE_TAB_CLASS}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download } : {})}
      className={SHARE_TAB_CLASS}
    >
      {content}
    </a>
  );
}

function ShareExpandButton({
  label,
  icon: Icon,
  expanded,
  onClick,
}: {
  label: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  expanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      onClick={onClick}
      className={cn(
        SHARE_TAB_CLASS,
        "rounded-none border-0 shadow-none hover:bg-secondary",
      )}
    >
      <ShareTabContent
        label={label}
        icon={Icon}
        trailing={
          <ChevronDown
            className={cn(SHARE_TAB_ICON_CLASS, "transition-transform duration-300", expanded && "rotate-180")}
            strokeWidth={2.5}
            aria-hidden
          />
        }
      />
    </button>
  );
}

function ShareContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    setStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": FORM_NAME, ...payload }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border-t border-border px-5 py-4 text-center" role="status" aria-live="polite">
        <p className="text-sm font-medium text-ink">Thank you — I&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="space-y-2.5 border-t border-border px-5 pb-3 pt-2.5"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden>
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>

      <input name="name" type="text" autoComplete="name" placeholder="Your name" className={SHARE_FIELD_CLASS} />
      <input
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
        className={SHARE_FIELD_CLASS}
      />
      <textarea
        name="message"
        rows={3}
        placeholder="How can I help?"
        required
        className={cn(SHARE_FIELD_CLASS, "h-auto min-h-[5.5rem] resize-none py-3")}
      />

      {status === "error" && (
        <p className="text-sm text-destructive">Something went wrong — please call {PHONE_DISPLAY}.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(SHARE_TAB_CLASS, "min-h-[2.75rem] w-full justify-center gap-2 px-5")}
      >
        <span>{status === "submitting" ? "Sending…" : "Send message"}</span>
        <Send className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden />
      </button>
    </form>
  );
}

export const Route = createFileRoute("/share")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const ogImage = `${loaderData?.origin ?? ""}/favicon.svg`;
    return {
      meta: [
        { title: SHARE_PAGE_META.title },
        { name: "description", content: SHARE_PAGE_META.description },
        { property: "og:title", content: SHARE_PAGE_META.ogTitle },
        { property: "og:description", content: SHARE_PAGE_META.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: SHARE_PAGE_META.ogUrl },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: SHARE_PAGE_META.ogTitle },
        { name: "twitter:description", content: SHARE_PAGE_META.description },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: "/share" }],
    };
  },
  component: SharePage,
});

function SharePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden bg-background font-sans antialiased">
      <main
        className={cn(
          "relative z-10 flex min-h-[100dvh] w-full flex-col",
          "md:mx-auto md:max-w-md md:px-6",
          "md:pb-[max(2rem,env(safe-area-inset-bottom))] md:pt-[max(1.5rem,env(safe-area-inset-top))]",
        )}
      >
        <div
          className={cn(
            SHARE_CARD_CLASS,
            "flex min-h-[100dvh] w-full flex-1 flex-col p-0",
            "md:min-h-0 md:rounded-3xl md:border md:border-primary-foreground/10 md:px-8 md:py-10",
            "md:shadow-[0_8px_32px_-12px_rgba(60,40,30,0.35)]",
          )}
        >
          <div className="pointer-events-none absolute inset-0 isolate" aria-hidden>
            <div
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(ellipse 120% 80% at 50% 0%, oklch(0.72 0.10 55 / 0.35) 0%, transparent 60%), linear-gradient(165deg, oklch(0.64 0.13 48) 0%, oklch(0.42 0.07 48) 100%)",
              }}
            />
            <div className="absolute inset-0" style={{ background: SHARE_CARD_OVERLAY }} />
          </div>

          <header className="relative z-10 flex flex-col items-center px-5 pt-[max(4.5rem,env(safe-area-inset-top))] text-center md:px-0 md:pt-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/15 text-3xl font-bold text-primary-foreground backdrop-blur-sm">
              I
            </div>
            <h1 className="mt-5 text-2xl font-semibold tracking-tight text-primary-foreground sm:text-3xl">
              {PROFILE.name}
            </h1>
            <p className="mt-2 max-w-[22rem] text-base leading-snug text-primary-foreground/85 sm:text-lg">
              {PROFILE.title}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              {PROFILE.location}
            </p>
          </header>

          <nav
            className="relative z-10 mt-8 flex w-full flex-1 flex-col gap-2.5 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:mt-10 sm:gap-3 md:px-0 md:pb-0"
            aria-label="Quick links"
          >
            <ShareLinkButton label="View full CV" href="/" icon={Globe} animatedArrow />
            <ShareLinkButton label="Call me" href={`tel:${PHONE}`} icon={Phone} />
            <ShareLinkButton
              label="WhatsApp"
              href={`https://wa.me/${PHONE.replace("+", "")}`}
              external
              icon={MessageCircle}
            />
            <ShareLinkButton label="Email me" href={`mailto:${EMAIL}`} icon={Mail} />
            <ShareLinkButton
              label="Download CV"
              href={RESUME_PDF_PATH}
              download={RESUME_PDF_FILENAME}
              icon={Download}
            />
            <ShareLinkButton label="View experience" href="/#experience" icon={FileText} />

            <div className={SHARE_INSET_PANEL_CLASS}>
              <ShareExpandButton
                label="Send a message"
                icon={Mail}
                expanded={contactOpen}
                onClick={() => setContactOpen((open) => !open)}
              />
              <AnimatePresence initial={false}>
                {contactOpen ? (
                  <ShareMorphPanel panelKey="contact">
                    <ShareContactForm />
                  </ShareMorphPanel>
                ) : null}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
