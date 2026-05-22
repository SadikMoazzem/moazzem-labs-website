import { SITE, absoluteUrl } from './site';

type JsonLd = Record<string, unknown>;

export const organizationSchema = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: absoluteUrl('/images/moazzem-labs-logo.png'),
  description: SITE.description,
  founder: {
    '@type': 'Person',
    '@id': `${SITE.url}/#sadik`,
    name: SITE.founder.name,
  },
  sameAs: [SITE.social.github, SITE.social.twitter, SITE.social.linkedin],
  contactPoint: {
    '@type': 'ContactPoint',
    email: SITE.email,
    contactType: 'customer support',
    availableLanguage: ['English'],
  },
});

export const personSchema = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#sadik`,
  name: SITE.founder.name,
  jobTitle: SITE.founder.role,
  worksFor: { '@id': `${SITE.url}/#organization` },
  url: absoluteUrl('/about-me'),
  image: absoluteUrl('/images/sadik-profile.jpg'),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
  sameAs: [SITE.social.github, SITE.social.twitter, SITE.social.linkedin],
});

type AppSchemaInput = {
  name: string;
  description: string;
  url: string;
  pagePath: string;
  operatingSystems: string[];
  category?: string;
  rating?: { value: number; count: number };
  price?: { amount: string; currency: string };
};

export const softwareApplicationSchema = (app: AppSchemaInput): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: app.name,
  description: app.description,
  url: app.url,
  applicationCategory: app.category ?? 'LifestyleApplication',
  operatingSystem: app.operatingSystems.join(', '),
  creator: { '@id': `${SITE.url}/#organization` },
  mainEntityOfPage: absoluteUrl(app.pagePath),
  ...(app.rating && {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: app.rating.value.toString(),
      ratingCount: app.rating.count.toString(),
    },
  }),
  offers: app.price
    ? {
        '@type': 'Offer',
        price: app.price.amount,
        priceCurrency: app.price.currency,
      }
    : {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
      },
});

type BreadcrumbItem = { name: string; path: string };

export const breadcrumbSchema = (items: BreadcrumbItem[]): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
