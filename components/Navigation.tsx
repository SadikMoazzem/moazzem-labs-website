"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#funding", label: "Funding" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-6">
      <nav
        aria-label="Main"
        className="glass-nav mx-auto flex w-full max-w-[560px] items-center justify-between rounded-full py-1.5 pl-5 pr-1.5 sm:pl-6"
      >
        <Link href="/" className="text-[15px] font-semibold text-white no-underline">
          Moazzem Labs
        </Link>
        <div className="flex items-center gap-1.5 sm:gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden text-sm text-white/85 no-underline hover:text-white sm:inline"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/support" className="btn btn-solid !min-h-11 !px-5 !text-sm">
            Support
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 sm:hidden"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div
          id="mobile-menu"
          className="glass-nav mx-auto mt-2 flex w-full max-w-[560px] flex-col rounded-3xl p-2 sm:hidden"
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3.5 text-base text-white no-underline hover:bg-white/10"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
