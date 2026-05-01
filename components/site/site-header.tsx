"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Github, Menu, X } from "lucide-react";
import { navRoutes, site } from "@/lib/site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 shadow-[0_0_30px_rgba(168,85,247,0.25)]">
            <span className="text-lg font-black tracking-tight text-white">D</span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.26em] text-cyan-100/80">
              {site.studio.toUpperCase()}
            </p>
            <p className="text-xs text-slate-400">{site.role}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navRoutes.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.github}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(168,85,247,0.35)] transition hover:scale-[1.02]"
          >
            Hire Me
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-black/60 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navRoutes.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
