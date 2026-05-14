"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { CustomDatePicker } from "@/components/ui/form/CustomDatePicker";
import { GuestPicker } from "@/components/ui/form/GuestPicker";
import { useBookingStore } from "@/store/useBookingStore";
import { ReviewsWidget } from "@/components/ui/ReviewsWidget";
import { useRouter } from "next/navigation";

import { usePopup } from "@/lib/PopupContext";

export function Hero() {
  const { openPopup } = usePopup();
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Hero");
  const tb = useTranslations("Booking");
  const router = useRouter();

  const { checkIn, checkOut, adults, childrenAges, setCheckIn, setCheckOut, setAdults, setChildrenAges } = useBookingStore();

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
      className="h-screen min-h-[700px] md:min-h-[800px] relative flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#1a1108] via-[#2d1f0a] to-[#3d2c12] hero-orb-1 hero-orb-2 overflow-hidden"></div>
      <div
        className="absolute inset-0 overflow-hidden"
        id="particles"
        ref={containerRef}
      ></div>

      {/* Main Content Area */}
      <div className="relative z-2 text-center px-4 md:px-6 max-w-[1200px] w-full flex flex-col items-center pt-20 md:pt-24">
        <div className="max-w-[900px] mb-8 md:mb-12">
          <h1 className="font-cormorant text-[clamp(42px,10vw,110px)] font-light leading-[0.9] text-cream mb-5 md:mb-7 opacity-0 animate-[fadeUp_0.8s_0.5s_forwards]">
            {t("titlePart1")} <em className="italic text-gold">{t("titleEm")}</em>
            <br />
            {t("titlePart2")}
          </h1>
          <p className="text-sm md:text-base font-light text-cream/65 tracking-[1px] leading-[1.7] max-w-[500px] mx-auto opacity-0 animate-[fadeUp_0.8s_0.7s_forwards]">
            {t("welcomeSub")}
          </p>
          <div className="mt-8 opacity-0 animate-[fadeUp_0.8s_0.8s_forwards] flex justify-center">
            <ReviewsWidget />
          </div>
        </div>

        {/* Integrated Booking Form - Positioned after text with 3D effect */}
        <div className="w-full opacity-0 animate-[fadeUp_0.8s_0.9s_forwards]">
          <div className="max-w-[1200px] mx-auto group">
            <div className="bg-white shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:shadow-[0_50px_100px_rgba(26,17,8,0.6)] px-5 py-6 md:p-10 flex gap-4 md:gap-6 items-end flex-col lg:flex-row transition-all duration-500 hover:-translate-y-2 relative">
              <CustomDatePicker
                label={`${tb("checkIn")} — ${tb("checkOut")}`}
                checkIn={checkIn}
                checkOut={checkOut}
                onChange={(inDate, outDate) => { setCheckIn(inDate); setCheckOut(outDate); }}
                className="flex-[1.5] w-full min-w-[280px]"
                theme="light"
              />
              <GuestPicker
                adults={adults}
                childrenAges={childrenAges}
                onChange={(a, c) => { setAdults(a); setChildrenAges(c); }}
                className="flex-1 w-full"
                theme="light"
              />
              <button
                className="bg-gold hover:bg-gold-dark transition-all duration-300 text-white border-none px-6 md:px-10 font-jost text-[10px] md:text-[11px] tracking-[2px] md:tracking-[4px] uppercase cursor-pointer whitespace-nowrap self-end w-full lg:w-auto shadow-xl shadow-gold/20 font-bold active:scale-95 h-[58px] flex items-center justify-center"
                onClick={() => openPopup("availability-popup")}
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
