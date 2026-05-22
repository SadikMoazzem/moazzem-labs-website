import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SITE } from '@/lib/site';

const work = [
  { label: 'All projects', href: '/work' },
  { label: 'MyLocalMasjid', href: '/work/mylocalmasjid' },
  { label: 'SalahTimez', href: '/work/salahtimez' },
];

const studio = [
  { label: 'About', href: '/about' },
  { label: 'Sadik Moazzem', href: '/about/sadik' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];

const social = [
  { label: 'Email', href: `mailto:${SITE.email}`, icon: Mail },
  { label: 'GitHub', href: SITE.social.github, icon: Github },
  { label: 'Twitter', href: SITE.social.twitter, icon: Twitter },
  { label: 'LinkedIn', href: SITE.social.linkedin, icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--color-hairline)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-primary text-parchment flex items-center justify-center font-bold text-lg shadow-sm">
                M
              </div>
              <span className="text-lg font-bold text-ink tracking-tight">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-xs">
              {SITE.tagline}. Privacy-first technology for Muslim communities.
            </p>
          </div>

          <FooterColumn title="Work" links={work} />
          <FooterColumn title="Studio" links={studio} />

          <div>
            <h3 className="text-xs font-semibold tracking-wide uppercase text-ink-subtle mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-sm text-ink-muted hover:text-primary transition-colors"
                  >
                    <s.icon className="w-4 h-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-subtle"
          style={{ borderColor: 'var(--color-hairline)' }}
        >
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Built in London · {SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-wide uppercase text-ink-subtle mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-ink-muted hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
