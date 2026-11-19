export const CONTACT_EMAIL = "hello@sadikmoazzem.com";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/sadik-moazzem/",
  github: "https://github.com/sadikmoazzem",
  myLocalMasjid: "https://www.mylocalmasjid.com",
  salahTimez: "https://www.salahtimez.com",
} as const;

export type Project = {
  slug: string;
  name: string;
  label: string;
  status: string;
  summary: string;
  cta: string;
  flagship?: boolean;
};

// Adding a project to the site is one entry here plus its page under app/(labs)/work/.
export const PROJECTS: Project[] = [
  {
    slug: "mylocalmasjid",
    name: "My Local Masjid",
    label: "Flagship",
    status: "Live",
    summary:
      "Real prayer times from the masjid itself. An app, watch and widgets, websites for masajid and an open UK directory.",
    cta: "Read the case study",
    flagship: true,
  },
  {
    slug: "salahtimez",
    name: "SalahTimez",
    label: "Where it began",
    status: "2016",
    summary: "A fast, simple prayer times app for London.",
    cta: "Read the story",
  },
];

export type Tier = { amount: string; href: string };

export const MONTHLY_TIERS: Tier[] = [
  { amount: "£2", href: "https://buy.stripe.com/cNi4gzagTgd6ePQ00ccV201" },
  { amount: "£5", href: "https://buy.stripe.com/28E00j4Wz9OIazAbIUcV204" },
  { amount: "£10", href: "https://buy.stripe.com/9B67sL9cP8KE6jk7sEcV205" },
];

export const ONE_OFF_TIERS: Tier[] = [
  { amount: "£5", href: "https://buy.stripe.com/7sY3cvex90e84bc14gcV203" },
  { amount: "£10", href: "https://buy.stripe.com/8x2aEX1Kn4uo5fgfZacV202" },
  { amount: "£25", href: "https://buy.stripe.com/9B68wP4Wz0e82349AMcV200" },
];

export const SUPPORT_PAYS_FOR = [
  {
    title: "Keeping it running",
    body: "Hosting, databases and the systems behind our products.",
  },
  {
    title: "App stores and tools",
    body: "Developer accounts, build services and the software we rely on.",
  },
  {
    title: "Building what comes next",
    body: "Time for new features, fixes, and the next project in the lab.",
  },
];
