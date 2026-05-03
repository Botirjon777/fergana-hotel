"use client";

import { useTranslations } from "next-intl";
import { FiHome, FiImage, FiGrid, FiMapPin } from "react-icons/fi";

export function BottomNav() {
  const t = useTranslations("Navbar");

  return (
    <nav className="hidden max-md:block fixed bottom-0 left-0 right-0 h-[65px] bg-cream/95 backdrop-blur-md border-t border-sand/50 z-[900] shadow-[0_-4px_20px_rgba(176,113,55,0.12)]">
      <div className="flex h-full items-center">
        <a href="#" className="flex-1 flex flex-col items-center justify-center gap-1.5 cursor-pointer no-underline text-text-mid text-[10px] tracking-[1px] uppercase font-medium transition-all duration-300 hover:text-gold group">
          <FiHome className="text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5" />
          {t("home")}
        </a>
        <a href="#gallery" className="flex-1 flex flex-col items-center justify-center gap-1.5 cursor-pointer no-underline text-text-mid text-[10px] tracking-[1px] uppercase font-medium transition-all duration-300 hover:text-gold group">
          <FiImage className="text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5" />
          {t("gallery")}
        </a>
        <a href="#services" className="flex-1 flex flex-col items-center justify-center gap-1.5 cursor-pointer no-underline text-text-mid text-[10px] tracking-[1px] uppercase font-normal transition-all duration-300 hover:text-gold group">
          <FiGrid className="text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5" />
          {t("services")}
        </a>
        <a href="#location" className="flex-1 flex flex-col items-center justify-center gap-1.5 cursor-pointer no-underline text-text-mid text-[10px] tracking-[1px] uppercase font-normal transition-all duration-300 hover:text-gold group">
          <FiMapPin className="text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5" />
          {t("location")}
        </a>
      </div>
    </nav>
  );
}
