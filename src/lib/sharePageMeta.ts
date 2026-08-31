import { PROFILE } from "@/lib/profile";
import { SITE_OG_IMAGE_PATH, absoluteAsset, absolutePageUrl, buildPageMetaTags } from "@/lib/siteMeta";

export const SHARE_PAGE_DESCRIPTION =
  `${PROFILE.name} — quick links to CV, contact, and admin profile. ${PROFILE.tagline}.`;

export const SHARE_PAGE_META = {
  title: `${PROFILE.name} · Links`,
  ogTitle: `${PROFILE.name} · Contact & CV`,
  description: SHARE_PAGE_DESCRIPTION,
  ogUrl: "/share",
} as const;

export function buildSharePageMetaTags(origin?: string) {
  return {
    meta: buildPageMetaTags({
      path: SHARE_PAGE_META.ogUrl,
      origin,
      title: SHARE_PAGE_META.title,
      description: SHARE_PAGE_META.description,
      ogTitle: SHARE_PAGE_META.ogTitle,
      ogDescription: SHARE_PAGE_META.description,
      ogType: "website",
      ogImage: absoluteAsset(origin, SITE_OG_IMAGE_PATH),
      twitterCard: "summary_large_image",
    }),
    links: [{ rel: "canonical", href: absolutePageUrl(origin, SHARE_PAGE_META.ogUrl) }],
  };
}
