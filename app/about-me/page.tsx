import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Sadik Moazzem — Full stack software engineer" },
  description:
    "Sadik Moazzem is a full stack software engineer in London, working across web, mobile, cloud and AI.",
};

const EXPERIENCE = [
  {
    role: "Software Engineer, Carpio Tech",
    when: "2024 to now",
    points: [
      "Developing AI-driven solutions for regulated industries and enterprise clients.",
      "Contributing to Carpio Studio's ContentOps automation platform.",
      "Building responsible AI systems with governance and evaluation frameworks.",
    ],
  },
  {
    role: "Full Stack Software Engineer, BKwai",
    when: "Jun 2020 to Jan 2024",
    points: [
      "Cut loading time for large datasets from 30s to 4s through strategic downsampling.",
      "Pioneered TypeScript adoption and a microfrontend architecture.",
      "Built a new live dashboard product within one week, winning a new client.",
      "Guided interns and new starters to become independent developers.",
    ],
  },
  {
    role: "Junior Software Engineer, Digital Fineprint",
    when: "Nov 2018 to Mar 2020",
    points: [
      "Led the Broker Profiling project: database design, API development and frontend visualisation.",
      "Created AWS developer tools in Python to simplify repeatable tasks.",
      "Mentored new joiners and worked with the Sales team on client needs.",
    ],
  },
];

const SKILLS = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "HTML/CSS"] },
  { group: "Frameworks", items: ["React", "React Native", "Next.js", "FastAPI", "Tailwind CSS"] },
  { group: "Data and AI", items: ["PostgreSQL", "NoSQL", "Prompt engineering", "Responsible AI"] },
  { group: "Cloud and tools", items: ["AWS Lambda", "CI/CD", "GitHub Actions", "Docker"] },
];

const NAV = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-[#0a0c11] px-5 pb-16 pt-6 sm:px-14 sm:pb-24 sm:pt-7">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-10 sm:gap-12">
        <header className="flex items-center justify-between gap-4 text-[15px]">
          <div className="text-[17px] font-semibold">Sadik Moazzem</div>
          <nav aria-label="Page" className="flex items-center gap-7">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hidden py-3 text-white no-underline hover:text-ice sm:inline">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-solid !min-h-11 !px-5">
              Get in touch
            </a>
          </nav>
        </header>

        <main className="flex flex-col gap-12 sm:gap-16">
          <section className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="flex flex-col gap-[18px] lg:col-span-8">
              <div className="kicker">Full stack software engineer · London</div>
              <h1 className="display text-[46px] sm:text-[84px]">
                I build products people <em>rely on</em>, end to end.
              </h1>
              <p className="m-0 max-w-[620px] text-base leading-relaxed text-mist sm:text-lg">
                I work across web, mobile, cloud and AI. By day I am a software engineer at Carpio
                Tech. I also founded Moazzem Labs, where I design, build and run My Local Masjid.
              </p>
            </div>
            <div className="flex flex-row items-center gap-5 lg:col-span-3 lg:col-start-10 lg:flex-col lg:items-start lg:gap-3.5">
              <Image
                src="/images/sadik-profile.jpg"
                alt="Sadik Moazzem"
                width={150}
                height={150}
                priority
                className="h-[110px] w-[110px] rounded-full object-cover sm:h-[150px] sm:w-[150px]"
              />
              <div className="flex gap-[18px] text-[15px]">
                <a href={LINKS.linkedin} className="text-link py-3">LinkedIn</a>
                <a href={LINKS.github} className="text-link py-3">GitHub</a>
              </div>
            </div>
          </section>

          <section id="experience" className="scroll-mt-6 border-t border-white/20 pt-8">
            <h2 className="kicker m-0 pb-3 font-normal">Experience</h2>
            <div className="flex flex-col border-b border-white/15">
              {EXPERIENCE.map((e) => (
                <article key={e.role} className="grid grid-cols-1 gap-2 border-t border-white/15 py-6 lg:grid-cols-12 lg:gap-6">
                  <div className="flex flex-col gap-1 lg:col-span-4">
                    <h3 className="m-0 text-xl font-semibold">{e.role}</h3>
                    <div className="text-[15px] text-ice">{e.when}</div>
                  </div>
                  <ul className="m-0 flex list-disc flex-col gap-1.5 pl-5 text-[15px] leading-relaxed text-mist lg:col-span-8 sm:text-base">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="flex flex-col gap-5 lg:col-span-8">
              <h2 className="kicker m-0 font-normal">Skills</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {SKILLS.map((s) => (
                  <div key={s.group} className="flex flex-col gap-2.5">
                    <h3 className="m-0 text-[17px] font-semibold">{s.group}</h3>
                    <ul className="m-0 flex list-none flex-wrap gap-2 p-0 text-sm">
                      {s.items.map((i) => (
                        <li key={i} className="rounded-full border border-white/25 px-3.5 py-2">{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4">
              <h2 className="kicker m-0 font-normal">Education</h2>
              <div>
                <div className="text-[17px] font-semibold">BCS Apprenticeship Diploma</div>
                <div className="text-[15px] leading-relaxed text-mist">Software Development</div>
              </div>
              <div>
                <div className="text-[17px] font-semibold">A-Levels, City &amp; Islington</div>
                <div className="text-[15px] leading-relaxed text-mist">
                  Computer Science, Electronics and Mathematics
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="scroll-mt-6 flex flex-col gap-5 border-t border-white/20 pt-8">
            <h2 className="kicker m-0 font-normal">Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Link href="/work/mylocalmasjid" className="glass group flex flex-col gap-2 rounded-3xl p-6 text-white no-underline">
                <h3 className="m-0 font-serif text-[32px] font-normal leading-none">My Local Masjid</h3>
                <p className="m-0 text-[15px] leading-relaxed text-mist">
                  Founder and sole engineer. An app for iOS and Android, watch apps, widgets,
                  websites for masajid and an open UK masjid directory.
                </p>
                <div className="pt-1 text-[15px] font-semibold group-hover:text-ice">Case study →</div>
              </Link>
              <Link href="/work/salahtimez" className="glass group flex flex-col gap-2 rounded-3xl p-6 text-white no-underline">
                <h3 className="m-0 font-serif text-[32px] font-normal leading-none">SalahTimez</h3>
                <p className="m-0 text-[15px] leading-relaxed text-mist">
                  Where it started in 2016: a fast, simple prayer times app for London.
                </p>
                <div className="pt-1 text-[15px] font-semibold group-hover:text-ice">The story →</div>
              </Link>
            </div>
          </section>

          <section id="contact" className="glass scroll-mt-6 flex flex-col gap-4 rounded-[28px] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex flex-col gap-1.5">
              <h2 className="m-0 font-serif text-[34px] font-normal leading-tight">Open to a conversation?</h2>
              <p className="m-0 text-base leading-relaxed text-mist">
                The quickest way to reach me is LinkedIn or email.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-solid">{CONTACT_EMAIL}</a>
              <a href={LINKS.linkedin} className="btn btn-ghost">LinkedIn</a>
            </div>
          </section>
        </main>

        <footer className="text-sm text-mist">
          © {new Date().getFullYear()} Sadik Moazzem ·{" "}
          <Link href="/" className="text-link">Moazzem Labs</Link>
        </footer>
      </div>
    </div>
  );
}
