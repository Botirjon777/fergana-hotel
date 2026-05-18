"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="min-h-screen bg-[#1a1108] text-cream flex flex-col relative overflow-hidden">
      {/* Background aesthetic elements */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1a1108] via-[#2d1f0a] to-[#3d2c12] opacity-50 hero-orb-1 hero-orb-2"></div>

      {/* Main 404 content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="animate-[fadeUp_0.8s_ease-out_forwards] flex flex-col items-center">
          <div className="mb-8 relative z-20">
            <Logo className="[&>div]:w-[120px]! [&>div]:h-[120px]! [&>div]:md:w-[180px]! [&>div]:md:h-[180px]! brightness-0 invert opacity-90 drop-shadow-2xl" />
          </div>
          <h1 className="font-cormorant text-[clamp(100px,20vw,200px)] font-light leading-none text-gold mb-2 tracking-widest drop-shadow-[0_0_30px_rgba(176,113,55,0.3)]">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-jost font-light text-cream mb-6 tracking-wide">
            {t("title")}
          </h2>
          <p className="text-sm md:text-base font-light text-cream/60 tracking-[1px] leading-[1.7] max-w-[500px] mx-auto mb-10">
            {t("desc")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark transition-all duration-300 text-white border-none h-[58px] px-10 font-jost text-[11px] tracking-[4px] uppercase cursor-pointer shadow-xl shadow-gold/20 font-bold active:scale-95 no-underline"
          >
            {t("returnHome")}
          </Link>
        </div>
      </div>
    </main>
  );
}
