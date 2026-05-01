"use client";

import { Github, Linkedin } from "lucide-react";
import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
            {site.studio}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Premium websites and web apps that help businesses win trust online.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={site.linkedin}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400/30"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={site.github}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400/30"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
