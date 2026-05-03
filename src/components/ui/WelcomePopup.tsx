"use client";

import { usePopup } from "@/lib/PopupContext";
import { useEffect, useState } from "react";

export function WelcomePopup() {
  const { activePopup, openPopup, closePopup } = usePopup();
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShown && !activePopup) {
        openPopup("welcome-popup");
        setHasShown(true);
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, [hasShown, activePopup, openPopup]);

  if (activePopup !== "welcome-popup") return null;

  return (
    <div className="fixed inset-0 bg-[#1a1108]/75 z-[4000] flex items-center justify-center p-6">
      <div className="bg-[#1a1108] w-full max-w-[600px] relative overflow-hidden animate-[popup-in_0.5s_cubic-bezier(.34,1.56,.64,1)]">
        <button 
          className="absolute top-4 right-4 bg-white/20 border-none text-white w-8 h-8 rounded-full cursor-pointer text-base z-[2] hover:bg-white/30 transition-colors" 
          onClick={closePopup}
        >
          ✕
        </button>
        <div className="welcome-top-star bg-gradient-to-br from-gold to-gold-dark px-6 py-12 md:px-12 md:pt-[60px] md:pb-10 text-center relative overflow-hidden">
          <h2 className="text-5xl font-light text-white mb-2 relative z-[1]">Welcome</h2>
          <p className="text-sm text-white/75 font-light tracking-[1px] relative z-[1]">Experience luxury above the ordinary</p>
        </div>
        <div className="px-6 py-8 md:px-12 md:py-10">
          <p className="text-[#faf8f2]/70 text-[15px] leading-[1.8] font-light text-center mb-7">
            Discover a world where gravity is a suggestion and every moment floats in perfect calm. Fergana Hotel — where the sky begins inside.
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <button 
              className="bg-transparent border border-[#faf8f2]/20 text-[#faf8f2]/60 px-6 py-3.5 font-jost text-xs tracking-[2px] uppercase cursor-pointer flex-1 transition-colors hover:border-gold hover:text-gold" 
              onClick={closePopup}
            >
              Explore Hotel
            </button>
            <button
              className="bg-gold hover:bg-gold-dark hover:-translate-y-[2px] transition-all duration-300 text-white border-none px-6 py-3.5 font-jost text-xs tracking-[3px] uppercase cursor-pointer flex-1"
              onClick={() => {
                closePopup();
                openPopup("booking-popup");
              }}
            >
              Book a Stay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
