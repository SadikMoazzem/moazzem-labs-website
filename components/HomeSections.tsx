import Image from "next/image";
import Link from "next/link";
import PhoneFrame from "@/components/PhoneFrame";
import { PROJECTS, SUPPORT_PAYS_FOR } from "@/lib/site";

const WRAP = "mx-auto w-full max-w-[1168px]";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center overflow-hidden px-5 pb-64 pt-32 sm:pb-72 sm:pt-40"
      style={{
        background: "radial-gradient(ellipse at 50% 80%, #0d2440 0%, #05080f 55%, #000000 100%)",
      }}
    >
      <div aria-hidden="true" className="ring-stage">
        <div className="ring ring-outer" />
        <div className="ring ring-inner" />
      </div>
      <div aria-hidden="true" className="ring-core" />

      <div className="relative flex max-w-[980px] flex-col items-center gap-5 text-center sm:gap-6">
        <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[13px] tracking-wide">
          A community technology lab
        </div>
        <h1 className="display text-[58px] sm:text-[84px] lg:text-[104px]">
          Built for the <em>ummah</em>, not for the algorithm.
        </h1>
        <p className="m-0 max-w-[540px] text-base leading-relaxed text-mist sm:text-lg">
          We build software for Muslim communities that respects the people using it. Made with
          care by a small lab.
        </p>
        <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row">
          <Link href="/#work" className="btn btn-solid">
            Explore the work
          </Link>
          <Link href="/#about" className="btn btn-ghost">
            Who we are
          </Link>
        </div>
      </div>
    </section>
  );
}

export function OurWork() {
  return (
    <section id="work" className="relative overflow-hidden bg-ground px-5 py-16 sm:px-14 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-420px] h-[600px] w-[600px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(120,200,255,0.3) 0%, rgba(0,0,0,0) 70%)" }}
      />
      <div className={`${WRAP} relative flex flex-col gap-8 sm:gap-10`}>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex flex-col gap-3.5">
            <div className="kicker">Our work</div>
            <h2 className="display text-[42px] sm:text-[64px]">
              What comes out of the <em>lab</em>.
            </h2>
          </div>
          <p className="m-0 max-w-[360px] text-base leading-relaxed text-mist sm:text-[17px]">
            A few products, each built end to end by us and looked after for the long run.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {PROJECTS.map((p) =>
            p.flagship ? (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group relative flex min-h-[380px] flex-col gap-3 overflow-hidden rounded-3xl border border-ice/45 p-6 text-white no-underline sm:p-7 lg:col-span-8"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(120,200,255,0.20) 0%, rgba(255,255,255,0.05) 60%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                <div className="kicker flex justify-between !tracking-[0.1em]">
                  <span>{p.label}</span>
                  <span className="sm:hidden">{p.status}</span>
                </div>
                <div className="grow" />
                <div className="font-serif text-[38px] leading-none sm:text-5xl">{p.name}</div>
                <p className="m-0 max-w-[380px] text-[15px] leading-normal text-[#dbe4ee] sm:text-base">
                  {p.summary}
                </p>
                <div className="pt-1.5 text-[15px] font-semibold group-hover:text-ice">{p.cta} →</div>
                <div aria-hidden="true" className="absolute right-[150px] top-[70px] hidden -rotate-6 sm:block">
                  <PhoneFrame src="/images/app/map.jpg" alt="" width={150} />
                </div>
                <div className="absolute right-7 top-10 hidden rotate-[4deg] sm:block">
                  <PhoneFrame
                    src="/images/app/prayer-screen.jpg"
                    alt="The My Local Masjid app showing a masjid's start and jama'ah times for the day"
                    width={165}
                  />
                </div>
              </Link>
            ) : (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="glass group flex min-h-[220px] flex-col gap-2.5 rounded-3xl p-6 text-white no-underline lg:col-span-4"
              >
                <div className="kicker flex justify-between !tracking-[0.1em]">
                  <span>{p.label}</span>
                  <span>{p.status}</span>
                </div>
                <div className="grow" />
                <div className="font-serif text-[32px] leading-none sm:text-[34px]">{p.name}</div>
                <p className="m-0 text-[15px] leading-normal text-mist">{p.summary}</p>
                <div className="pt-1.5 text-[15px] font-semibold group-hover:text-ice">{p.cta} →</div>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

const PROMISES = [
  { title: "No adverts in what we make.", body: "Nothing competing for your attention." },
  {
    title: "Your data is not the product.",
    body: "We do not sell it, and we collect as little as we can.",
  },
  {
    title: "Free where it matters.",
    body: "The things a community relies on stay free, supported by those who choose to give.",
  },
  {
    title: "Built to last, and open.",
    body: "We look after what we ship, and share data openly where we can.",
  },
];

export function Promise() {
  return (
    <section id="promise" className="relative overflow-hidden bg-black px-5 py-16 sm:px-14 sm:py-24">
      <div aria-hidden="true" className="absolute left-[-260px] top-40 hidden h-[700px] w-[700px] rounded-full border border-ice/25 lg:block" />
      <div aria-hidden="true" className="absolute left-[-180px] top-60 hidden h-[540px] w-[540px] rounded-full border border-ice/15 lg:block" />
      <div className={`${WRAP} relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6`}>
        <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-5">
          <div className="kicker">The promise</div>
          <h2 className="display text-[44px] sm:text-[72px]">
            Not for the <em>algorithm</em> means this.
          </h2>
          <p className="m-0 max-w-[400px] text-base leading-relaxed text-mist sm:text-[17px]">
            Most apps are free because you are the product. Ours are supported by the communities
            they serve. That changes what we build, whatever the project.
          </p>
        </div>
        <ol className="m-0 flex list-none flex-col border-b border-white/20 p-0 lg:col-span-6 lg:col-start-7">
          {PROMISES.map((p, i) => (
            <li key={p.title} className="flex items-baseline gap-4 border-t border-white/20 py-5 sm:gap-6">
              <span className="w-8 shrink-0 font-serif text-xl text-ice sm:text-[22px]">0{i + 1}</span>
              <div className="flex flex-col gap-1.5">
                <div className="text-[19px] font-semibold sm:text-2xl">{p.title}</div>
                <div className="text-[15px] leading-normal text-mist sm:text-base">{p.body}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhoWeAre() {
  return (
    <section id="about" className="relative overflow-hidden bg-ground px-5 py-16 sm:px-14 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute bottom-[-380px] right-[-200px] h-[760px] w-[760px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(120,200,255,0.28) 0%, rgba(0,0,0,0) 68%)" }}
      />
      <div className={`${WRAP} relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6`}>
        <div className="flex flex-col gap-5 lg:col-span-7">
          <div className="kicker">Who we are</div>
          <h2 className="display text-[42px] sm:text-[68px]">
            A small lab that started with one <em>prayer timetable</em>.
          </h2>
          <p className="m-0 max-w-[600px] text-base leading-relaxed text-mist sm:text-lg">
            In 2016 we made SalahTimez, a fast, simple prayer times app for London. Listening to
            the people who used it showed us what communities really needed. My Local Masjid grew
            out of that, and more is on the way.
          </p>
          <p className="m-0 max-w-[600px] text-base leading-relaxed text-mist sm:text-lg">
            We are still small on purpose, and we stay close to the communities we build for.
          </p>
        </div>
        <div className="glass flex flex-col gap-4 rounded-[28px] p-6 sm:p-7 lg:col-span-4 lg:col-start-9">
          <Image
            src="/images/sadik-profile.jpg"
            alt="Sadik Moazzem"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <div className="font-serif text-[30px] leading-tight sm:text-[34px]">Sadik Moazzem</div>
            <div className="text-[15px] text-ice">Founder and engineer</div>
          </div>
          <p className="m-0 text-[15px] leading-relaxed text-mist sm:text-base">
            Moazzem Labs was founded and is led by Sadik, who designs, builds and runs the
            products.
          </p>
          <Link href="/about-me" className="text-link py-3 text-[15px]">
            More about Sadik
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Funding() {
  return (
    <section
      id="funding"
      className="relative overflow-hidden px-5 py-16 sm:px-14 sm:py-24"
      style={{
        background: "radial-gradient(ellipse at 50% 120%, #0d2440 0%, #05080f 55%, #000000 100%)",
      }}
    >
      <div className={`${WRAP} relative flex flex-col gap-8`}>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex flex-col gap-3.5">
            <div className="kicker">How it is funded</div>
            <h2 className="display text-[42px] sm:text-[64px]">
              Paid for by the people it <em>serves</em>.
            </h2>
          </div>
          <p className="m-0 max-w-[380px] text-base leading-relaxed text-mist sm:text-[17px]">
            No investors and no advertisers. Support from the community goes to three things.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SUPPORT_PAYS_FOR.map((c, i) => (
            <div key={c.title} className="glass flex items-baseline gap-4 rounded-3xl p-5 md:flex-col md:gap-2 md:p-6">
              <div className="w-9 shrink-0 font-serif text-[28px] leading-none text-ice md:text-[44px]">0{i + 1}</div>
              <div className="flex flex-col gap-1.5">
                <div className="text-[17px] font-semibold sm:text-lg">{c.title}</div>
                <div className="text-[15px] leading-normal text-mist">{c.body}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 pt-6 text-center sm:pt-10">
          <p className="m-0 max-w-[560px] text-base leading-normal text-[#dfe6f0] sm:text-[17px]">
            If these tools help you or your masjid, you can help keep them free for everyone. Give
            monthly or once.
          </p>
          <Link href="/support" className="btn btn-solid w-full sm:w-auto">
            Support the work
          </Link>
        </div>
      </div>
    </section>
  );
}
