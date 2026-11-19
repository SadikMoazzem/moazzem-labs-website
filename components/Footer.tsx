import Link from "next/link";
import { Lockup } from "@/components/Logo";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-black px-5 py-12 sm:px-14">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <Lockup markSize={34} markClassName="text-ice" className="text-[26px]" />
          <p className="m-0 max-w-sm text-[15px] leading-relaxed text-mist">
            Built for the ummah, not for the algorithm.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-link py-2 text-[15px]">
            {CONTACT_EMAIL}
          </a>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-1 text-[15px]">
          <Link href="/#work" className="text-link py-2">Work</Link>
          <Link href="/support" className="text-link py-2">Support</Link>
          <a href={LINKS.myLocalMasjid} className="text-link py-2">mylocalmasjid.com</a>
          <a href={LINKS.linkedin} className="text-link py-2">LinkedIn</a>
          <a href={LINKS.github} className="text-link py-2">GitHub</a>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-[1168px] text-sm text-mist">
        © {new Date().getFullYear()} Moazzem Labs
      </div>
    </footer>
  );
}
