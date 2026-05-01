import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-6rem] h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-[16rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[18%] h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <SiteHeader />
      <main className="relative z-10">{children}</main>
      <SiteFooter />
    </div>
  );
}
