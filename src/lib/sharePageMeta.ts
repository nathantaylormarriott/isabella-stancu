import { PROFILE } from "@/lib/profile";

export const SHARE_PAGE_DESCRIPTION =
  `${PROFILE.name} — ${PROFILE.title}. ${PROFILE.summary}`;

export const SHARE_PAGE_META = {
  title: `${PROFILE.name} · Links`,
  ogTitle: PROFILE.name,
  description: SHARE_PAGE_DESCRIPTION,
  ogUrl: "/share",
} as const;
