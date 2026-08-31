import { EMAIL, PHONE, PHONE_DISPLAY, PROFILE, RESUME_PDF_PATH } from "@/lib/profile";

export const SITE_OG_IMAGE_PATH = "/og-image.png";
export const SITE_OG_IMAGE_WIDTH = "1200";
export const SITE_OG_IMAGE_HEIGHT = "630";
export const SITE_THEME_COLOR = "#C96B4A";

export const SITE_OG_IMAGE_ALT = `${PROFILE.name} — ${PROFILE.title} — ${PHONE_DISPLAY}`;

export const SITE_TITLE = `${PROFILE.name} — ${PROFILE.title} | ${PROFILE.location}`;

export const SITE_DESCRIPTION =
  `${PROFILE.name} — ${PROFILE.summary} Languages: English, Romanian, Italian. City Lit trained in Microsoft Office.`;

export const SITE_KEYWORDS = [
  PROFILE.name,
  "Administration",
  "Admin Assistant",
  "Business Operations",
  "Office Admin",
  PROFILE.location,
  "Customer Service",
  "Microsoft Office",
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "Microsoft Access",
  "City Lit",
  "Costa Coffee",
  "Barista",
  "Romanian",
  "Italian",
  "Spanish",
].join(", ");

export const SITE_OG_TITLE = `${PROFILE.name} — ${PROFILE.title}`;

export const SITE_OG_DESCRIPTION =
  `${PROFILE.tagline}. Seeking office-based admin roles in London.`;

export const SITE_OG_SITE_NAME = PROFILE.name;

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.title,
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  url: "/",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "UK",
  },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Theodor Costescu Economical National College" },
    { "@type": "EducationalOrganization", name: "City Lit" },
  ],
  knowsAbout: [
    "Administration",
    "Customer Service",
    "Microsoft Word",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Microsoft Access",
    "Business Operations",
    "English",
    "Romanian",
    "Italian",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Romanian", alternateName: "ro" },
    { "@type": "Language", name: "Italian", alternateName: "it" },
    { "@type": "Language", name: "Spanish", alternateName: "es" },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Barista",
    occupationalCategory: "Customer Service",
    description: "Costa Coffee, Deptford — March 2025 to April 2026",
  },
  sameAs: [`tel:${PHONE}`, `mailto:${EMAIL}`],
  workLocation: {
    "@type": "Place",
    name: PROFILE.location,
  },
} as const;

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: PROFILE.name,
  description: SITE_DESCRIPTION,
  url: "/",
  author: {
    "@type": "Person",
    name: PROFILE.name,
  },
  potentialAction: {
    "@type": "ReadAction",
    target: RESUME_PDF_PATH,
    name: "Download CV",
  },
} as const;

type MetaTag = Record<string, string>;

export function buildRootMetaTags(): MetaTag[] {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: SITE_TITLE },
    { name: "description", content: SITE_DESCRIPTION },
    { name: "keywords", content: SITE_KEYWORDS },
    { name: "author", content: PROFILE.name },
    { name: "theme-color", content: SITE_THEME_COLOR },
    { property: "og:site_name", content: SITE_OG_SITE_NAME },
    { property: "og:type", content: "website" },
    { property: "og:title", content: SITE_OG_TITLE },
    { property: "og:description", content: SITE_OG_DESCRIPTION },
    { property: "og:image", content: SITE_OG_IMAGE_PATH },
    { property: "og:image:width", content: SITE_OG_IMAGE_WIDTH },
    { property: "og:image:height", content: SITE_OG_IMAGE_HEIGHT },
    { property: "og:image:alt", content: SITE_OG_IMAGE_ALT },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: SITE_OG_TITLE },
    { name: "twitter:description", content: SITE_OG_DESCRIPTION },
    { name: "twitter:image", content: SITE_OG_IMAGE_PATH },
    { name: "twitter:image:alt", content: SITE_OG_IMAGE_ALT },
  ];
}

export function buildPageMetaTags({
  path,
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  ogTitle = SITE_OG_TITLE,
  ogDescription = SITE_OG_DESCRIPTION,
  ogType = "website",
  ogImage = SITE_OG_IMAGE_PATH,
  twitterCard = "summary_large_image",
}: {
  path: string;
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
}): MetaTag[] {
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: SITE_KEYWORDS },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:type", content: ogType },
    { property: "og:url", content: path },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: SITE_OG_IMAGE_WIDTH },
    { property: "og:image:height", content: SITE_OG_IMAGE_HEIGHT },
    { property: "og:image:alt", content: SITE_OG_IMAGE_ALT },
    { name: "twitter:card", content: twitterCard },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDescription },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:image:alt", content: SITE_OG_IMAGE_ALT },
  ];
}
