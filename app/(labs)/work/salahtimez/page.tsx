import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "SalahTimez — where it began",
  description:
    "SalahTimez was the first thing Moazzem Labs made: a fast, simple prayer times app for London, started in 2016.",
};

const LESSONS = [
  {
    title: "Speed and simplicity",
    body: "People want the prayer time the moment they open it. Everything else came second.",
  },
  {
    title: "No app store in the way",
    body: "It was a web app you could add to your home screen, so updates reached everyone straight away.",
  },
  {
    title: "Listening first",
    body: "Running it taught us what communities were really asking for, which was their own masjid's times.",
  },
];

export default function SalahTimezStory() {
  return (
    <div className="relative overflow-hidden bg-ground px-5 pb-16 pt-32 sm:px-14 sm:pb-24 sm:pt-44">
      <div className="relative mx-auto flex max-w-[1168px] flex-col gap-9">
        <div className="flex flex-col gap-[18px]">
          <div className="kicker">Our work · Where it began</div>
          <h1 className="display text-[52px] sm:text-[92px]">SalahTimez</h1>
          <p className="m-0 max-w-[760px] text-lg leading-snug text-[#dbe4ee] sm:text-[22px]">
            A fast, simple prayer times app for London, and the first thing the lab ever made.
          </p>
        </div>

        <dl className="m-0 grid grid-cols-2 border-y border-white/20 lg:grid-cols-3">
          <div className="flex flex-col gap-1 py-5 pr-5">
            <dt className="text-[13px] text-ice">Started</dt>
            <dd className="m-0 text-[17px] font-semibold sm:text-lg">2016</dd>
          </div>
          <div className="flex flex-col gap-1 py-5 pr-5 lg:border-l lg:border-white/20 lg:pl-5">
            <dt className="text-[13px] text-ice">What it was</dt>
            <dd className="m-0 text-[17px] font-semibold sm:text-lg">A web app for prayer times</dd>
          </div>
          <div className="flex flex-col gap-1 py-5 pr-5 lg:border-l lg:border-white/20 lg:pl-5">
            <dt className="text-[13px] text-ice">Visit</dt>
            <dd className="m-0 text-[17px] font-semibold sm:text-lg">
              <a href={LINKS.salahTimez} className="text-link">salahtimez.com</a>
            </dd>
          </div>
        </dl>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {LESSONS.map((l) => (
            <section key={l.title} className="glass flex flex-col gap-2 rounded-3xl p-6">
              <h2 className="m-0 font-serif text-[28px] font-normal leading-tight">{l.title}</h2>
              <p className="m-0 text-[15px] leading-relaxed text-mist">{l.body}</p>
            </section>
          ))}
        </div>

        <div className="flex flex-col items-start gap-4 border-t border-white/20 pt-9">
          <p className="m-0 max-w-[640px] text-base leading-relaxed text-mist sm:text-lg">
            Those lessons became My Local Masjid, which carries the same idea much further.
          </p>
          <Link href="/work/mylocalmasjid" className="btn btn-solid">
            Read the My Local Masjid case study
          </Link>
        </div>
      </div>
    </div>
  );
}
