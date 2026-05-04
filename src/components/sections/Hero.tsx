"use client";

import { useEffect, useRef } from "react";
import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openPopup } = usePopup();
  const t = useTranslations("Hero");
  const tb = useTranslations("Booking");

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
    <section
      id="hero"
      className="h-screen min-h-[700px] md:min-h-[800px] relative flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#1a1108] via-[#2d1f0a] to-[#3d2c12] hero-orb-1 hero-orb-2"></div>
      <div
        className="absolute inset-0 overflow-hidden"
        id="particles"
        ref={containerRef}
      ></div>

      {/* Main Content Area */}
      <div className="relative z-2 text-center px-4 md:px-6 max-w-[1200px] w-full flex flex-col items-center">
        <div className="max-w-[900px] mb-8 md:mb-12">
          <h1 className="font-cormorant text-[clamp(42px,10vw,110px)] font-light leading-[0.9] text-cream mb-5 md:mb-7 opacity-0 animate-[fadeUp_0.8s_0.5s_forwards]">
            {t("titlePart1")} <em className="italic text-gold">{t("titleEm")}</em>
            <br />
            {t("titlePart2")}
          </h1>
          <p className="text-sm md:text-base font-light text-cream/65 tracking-[1px] leading-[1.7] max-w-[500px] mx-auto opacity-0 animate-[fadeUp_0.8s_0.7s_forwards]">
            {t("welcomeSub")}
          </p>
        </div>

        {/* Integrated Booking Form - Positioned after text with 3D effect */}
        <div className="w-full opacity-0 animate-[fadeUp_0.8s_0.9s_forwards]">
          <div className="max-w-[1200px] mx-auto group">
            <div className="bg-white shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:shadow-[0_50px_100px_rgba(26,17,8,0.6)] px-5 py-6 md:p-10 flex gap-4 md:gap-6 items-end flex-col lg:flex-row transition-all duration-500 hover:-translate-y-2 relative">
              <div className="flex-1 w-full flex flex-col gap-1.5 md:gap-2 text-left">
                <label className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-gold font-bold">
                  {tb("checkIn")}
                </label>
                <input
                  className="bg-cream/30 border border-sand/20 p-2.5 md:p-5 font-jost text-sm text-text-dark outline-none transition-all duration-300 focus:border-gold focus:bg-white appearance-none cursor-pointer w-full"
                  type="date"
                  id="hero-checkin"
                />
              </div>
              <div className="flex-1 w-full flex flex-col gap-1.5 md:gap-2 text-left">
                <label className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-gold font-bold">
                  {tb("checkOut")}
                </label>
                <input
                  className="bg-cream/30 border border-sand/20 p-2.5 md:p-5 font-jost text-sm text-text-dark outline-none transition-all duration-300 focus:border-gold focus:bg-white appearance-none cursor-pointer w-full"
                  type="date"
                  id="hero-checkout"
                />
              </div>
              <div className="flex-1 w-full flex flex-col gap-1.5 md:gap-2 text-left">
                <label className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-gold font-bold">
                  {tb("guests")}
                </label>
                <div className="relative">
                  <select
                    suppressHydrationWarning
                    className="bg-cream/30 border border-sand/20 p-2.5 md:p-5 font-jost text-sm text-text-dark outline-none transition-all duration-300 focus:border-gold focus:bg-white appearance-none cursor-pointer w-full"
                  >
                    <option>1 {tb("guests")}</option>
                    <option>2 {tb("guests")}</option>
                    <option>3 {tb("guests")}</option>
                    <option>4 {tb("guests")}</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold text-xs">
                    ▼
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full flex flex-col gap-1.5 md:gap-2 text-left">
                <label className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-gold font-bold">
                  {tb("roomType")}
                </label>
                <div className="relative">
                  <select
                    suppressHydrationWarning
                    className="bg-cream/30 border border-sand/20 p-2.5 md:p-5 font-jost text-sm text-text-dark outline-none transition-all duration-300 focus:border-gold focus:bg-white appearance-none cursor-pointer w-full"
                  >
                    <option>Levitation Suite</option>
                    <option>Cloud Deluxe</option>
                    <option>Horizon Penthouse</option>
                    <option>Float Studio</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold text-xs">
                    ▼
                  </div>
                </div>
              </div>
              <button
                className="bg-gold hover:bg-gold-dark transition-all duration-300 text-white border-none p-2.5 md:p-5 font-jost text-[10px] md:text-[11px] tracking-[3px] md:tracking-[4px] uppercase cursor-pointer whitespace-nowrap self-end w-full lg:w-auto shadow-xl shadow-gold/20 font-bold active:scale-95 mt-2 md:mt-0"
                onClick={() => openPopup("confirm-popup")}
              >
                {tb("checkAvailability")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
