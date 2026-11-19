import type { Metadata } from "next";
import PhoneFrame from "@/components/PhoneFrame";
import { LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "My Local Masjid — case study",
  description:
    "How Moazzem Labs designs, builds and runs My Local Masjid: real prayer times from the masjid itself, across phone, watch and web.",
};

const FACTS = [
  { label: "Status", value: "Live" },
  { label: "Our role", value: "Design, build and run" },
  { label: "Platforms", value: "iOS, Android, watch, web" },
];

const STORY = [
  {
    title: "The problem",
    body: "Most prayer apps calculate times. The masjid down the road prays at its own times, and those were scattered across PDFs, noticeboards and old websites.",
  },
  {
    title: "What we built",
    body: "One source of truth for each masjid, and many ways to reach it: the app, the watch, widgets, a website for the masjid, and an open directory others can build on.",
  },
  {
    title: "How it is built",
    body: "React Native, Next.js, TypeScript, Postgres and AWS.",
  },
];

export default function MyLocalMasjidCaseStudy() {
  return (
    <div className="relative overflow-hidden bg-ground px-5 pb-16 pt-32 sm:px-14 sm:pb-24 sm:pt-44">
      <div
        aria-hidden="true"
        className="absolute right-[-240px] top-[-260px] h-[760px] w-[760px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(120,200,255,0.3) 0%, rgba(0,0,0,0) 68%)" }}
      />
      <div className="relative mx-auto flex max-w-[1168px] flex-col gap-9">
        <div className="flex flex-col gap-[18px]">
          <div className="kicker">Our work · Case study</div>
          <h1 className="display text-[52px] sm:text-[92px]">My Local Masjid</h1>
          <p className="m-0 max-w-[760px] text-lg leading-snug text-[#dbe4ee] sm:text-[22px]">
            Every UK masjid in one open place, with the prayer times the masjid itself keeps, not
            a calculation.
          </p>
        </div>

        <dl className="m-0 grid grid-cols-2 border-y border-white/20 lg:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.label} className="flex flex-col gap-1 py-5 pr-5 lg:border-l lg:border-white/20 lg:pl-5 lg:first:border-l-0 lg:first:pl-0">
              <dt className="text-[13px] text-ice">{f.label}</dt>
              <dd className="m-0 text-[17px] font-semibold sm:text-lg">{f.value}</dd>
            </div>
          ))}
          <div className="flex flex-col gap-1 py-5 pr-5 lg:border-l lg:border-white/20 lg:pl-5">
            <dt className="text-[13px] text-ice">Visit</dt>
            <dd className="m-0 text-[17px] font-semibold sm:text-lg">
              <a href={LINKS.myLocalMasjid} className="text-link">mylocalmasjid.com</a>
            </dd>
          </div>
        </dl>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-7 lg:col-span-5">
            {STORY.map((s) => (
              <section key={s.title} className="flex flex-col gap-2">
                <h2 className="m-0 font-serif text-[30px] font-normal">{s.title}</h2>
                <p className="m-0 text-base leading-relaxed text-mist">{s.body}</p>
              </section>
            ))}
          </div>
          <div className="relative mx-auto h-[440px] w-full max-w-[590px] lg:col-span-6 lg:col-start-7">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[60px] h-[420px] w-[420px] -translate-x-1/2 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(120,200,255,0.35) 0%, rgba(0,0,0,0) 68%)" }}
            />
            <div className="absolute left-1/2 top-11 hidden -translate-x-[250px] -rotate-[7deg] sm:block">
              <PhoneFrame
                src="/images/app/map.jpg"
                alt="Map of London with the masjids and prayer spaces nearby"
                width={170}
              />
            </div>
            <div className="absolute left-1/2 top-11 hidden translate-x-[80px] rotate-[7deg] sm:block">
              <PhoneFrame
                src="/images/app/my-masjid.jpg"
                alt="A masjid's page in the app with today's times, Jumu'ah, announcements and facilities"
                width={170}
              />
            </div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <PhoneFrame
                src="/images/app/prayer-screen.jpg"
                alt="The app's prayer screen with East London Mosque's start and jama'ah times for the day"
                width={190}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
