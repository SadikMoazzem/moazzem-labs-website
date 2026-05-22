export const SITE = {
  name: 'Moazzem Labs',
  tagline: 'Innovation with Integrity',
  description:
    'Moazzem Labs builds privacy-first technology for Muslim communities. We create apps, websites and admin tools that serve masajid and their members with integrity — never ads, never tracking, never paywalls.',
  url: 'https://moazzemlabs.com',
  locale: 'en_GB',
  founder: {
    name: 'Sadik Moazzem',
    role: 'Founder & Software Engineer',
    location: 'London, United Kingdom',
    email: 'sadik@moazzemlabs.com',
  },
  email: 'info@moazzemlabs.com',
  social: {
    github: 'https://github.com/sadikmoazzem',
    twitter: 'https://twitter.com/MoazzemLabs',
    linkedin: 'https://www.linkedin.com/in/sadik-moazzem/',
  },
  ogImage: '/opengraph-image',
} as const;

export const absoluteUrl = (path: string): string => {
  if (path.startsWith('http')) return path;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
};
