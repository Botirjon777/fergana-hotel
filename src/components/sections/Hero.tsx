"use client";

import { useEffect, useRef } from "react";
import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openPopup } = usePopup();
  const t = useTranslations("Hero");

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Create particles
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.width = `${Math.random() * 3 + 1}px`;
      p.style.height = `${Math.random() * 3 + 1}px`;
      p.style.animationDuration = `${Math.random() * 10 + 8}s`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(p);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section id="hero" className="h-screen min-h-[600px] md:min-h-[700px] relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1108] via-[#2d1f0a] to-[#3d2c12] hero-orb-1 hero-orb-2"></div>
      <div className="absolute inset-0 overflow-hidden" id="particles" ref={containerRef}></div>
      <div className="relative z-[2] text-center px-6 max-w-[900px]">
        <p className="font-jost text-[11px] tracking-[6px] uppercase text-gold mb-6 opacity-0 animate-[fadeUp_0.8s_0.3s_forwards]">
          Above the Ordinary · Est. 2015
        </p>
        <h1 className="font-cormorant text-[clamp(52px,9vw,110px)] font-light leading-[0.9] text-cream mb-7 opacity-0 animate-[fadeUp_0.8s_0.5s_forwards]">
          {t("titlePart1")} <em className="italic text-gold">{t("titleEm")}</em><br />
          {t("titlePart2")}
        </h1>
        <p className="text-base font-light text-[#faf8f2]/65 tracking-[1px] leading-[1.7] max-w-[500px] mx-auto mb-12 opacity-0 animate-[fadeUp_0.8s_0.7s_forwards]">
          {t("welcomeSub")}
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row items-center opacity-0 animate-[fadeUp_0.8s_0.9s_forwards] max-w-[400px] sm:max-w-none mx-auto">
          <button 
            className="w-full sm:w-auto bg-gold hover:bg-gold-dark hover:-translate-y-[2px] transition-all duration-300 text-white border-none py-4 px-10 font-jost text-xs tracking-[3px] uppercase cursor-pointer text-center"
            onClick={() => openPopup("booking-popup")}
          >
            {t("reserveStay")}
          </button>
          <a 
            href="#about" 
            className="w-full sm:w-auto bg-transparent text-cream border border-[#faf8f2]/40 hover:border-gold hover:text-gold transition-colors duration-300 py-4 px-10 font-jost text-xs tracking-[3px] uppercase cursor-pointer no-underline text-center"
          >
            {t("discoverMore")}
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]">
        <span className="text-[10px] tracking-[4px] uppercase text-[#faf8f2]/50">Scroll</span>
        <div className="w-[1px] h-[50px] bg-gradient-to-b from-gold to-transparent animate-[scroll-pulse_2s_ease-in-out_infinite]"></div>
      </div>
    </section>
  );
}
