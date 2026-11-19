import type { Metadata } from "next";
import { MONTHLY_TIERS, ONE_OFF_TIERS, SUPPORT_PAYS_FOR, type Tier } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support the work",
  description:
    "Help keep what Moazzem Labs builds free and free of adverts. Give monthly or once.",
};

function TierGrid({ tiers, unit, featured }: { tiers: Tier[]; unit: string; featured?: number }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {tiers.map((t, i) => (
        <a
          key={t.href}
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Give ${t.amount} ${unit} (opens Stripe)`}
          className={
            i === featured
              ? "flex flex-col gap-1 rounded-[18px] bg-white px-3 py-[18px] text-center text-ground no-underline transition hover:bg-[#dff1ff]"
              : "flex flex-col gap-1 rounded-[18px] border border-white/30 bg-white/5 px-3 py-[18px] text-center text-white no-underline transition hover:border-white/70"
          }
        >
          <span className="font-serif text-[40px] leading-none">{t.amount}</span>
          <span className={i === featured ? "text-sm" : "text-sm text-mist"}>{unit}</span>
        </a>
      ))}
    </div>
  );
}

export default function SupportPage() {
  return (
    <div
      className="px-5 pb-16 pt-32 sm:px-14 sm:pb-24 sm:pt-44"
      style={{
        background: "radial-gradient(ellipse at 50% -10%, #0d2440 0%, #05080f 45%, #000000 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[1168px] flex-col gap-10 sm:gap-12">
        <div className="flex flex-col items-center gap-[18px] text-center">
          <div className="kicker">Support the work</div>
          <h1 className="display max-w-[900px] text-[48px] sm:text-[80px]">
            Help keep it free for <em>everyone</em>.
          </h1>
          <p className="m-0 max-w-[580px] text-base leading-relaxed text-mist sm:text-lg">
            Your support keeps what we build running and free of adverts. Insha&apos;Allah it is a
            sadaqah jariyah, an ongoing charity, for as long as people benefit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <section
            aria-labelledby="monthly"
            className="flex flex-col gap-[18px] rounded-[28px] border border-ice/45 bg-ice/[0.08] p-6 sm:p-7"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 id="monthly" className="m-0 font-serif text-4xl font-normal">Give monthly</h2>
              <div className="text-sm text-ice">Ongoing support, ongoing reward</div>
            </div>
            <TierGrid tiers={MONTHLY_TIERS} unit="a month" featured={1} />
            <p className="m-0 text-sm leading-normal text-mist">
              Cancel any time. Payments are handled by Stripe.
            </p>
          </section>
          <section aria-labelledby="once" className="glass flex flex-col gap-[18px] rounded-[28px] p-6 sm:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 id="once" className="m-0 font-serif text-4xl font-normal">Give once</h2>
              <div className="text-sm text-ice">A single gift</div>
            </div>
            <TierGrid tiers={ONE_OFF_TIERS} unit="once" />
            <p className="m-0 text-sm leading-normal text-mist">Payments are handled by Stripe.</p>
          </section>
        </div>

        <section
          id="costs"
          aria-labelledby="pays-for"
          className="grid grid-cols-1 gap-6 border-t border-white/20 pt-9 lg:grid-cols-12"
        >
          <div className="flex flex-col gap-2.5 lg:col-span-4">
            <div className="kicker">What it pays for</div>
            <h2 id="pays-for" className="display text-[36px] !leading-[1.02] sm:text-[40px]">
              Where your support goes.
            </h2>
          </div>
          <dl className="m-0 flex flex-col lg:col-span-7 lg:col-start-6">
            {SUPPORT_PAYS_FOR.map((c, i) => (
              <div
                key={c.title}
                className={`flex flex-col gap-1 py-3.5 sm:flex-row sm:gap-5 ${i > 0 ? "border-t border-white/15" : ""}`}
              >
                <dt className="w-[220px] shrink-0 text-[17px] font-semibold">{c.title}</dt>
                <dd className="m-0 text-base leading-normal text-mist">{c.body}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
