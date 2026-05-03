"use client";

import { usePopup } from "@/lib/PopupContext";
import React from "react";

export function PopupWrapper({
  id,
  children,
  maxWidth = "560px",
  center = false,
}: {
  id: "booking-popup" | "confirm-popup" | "service-popup" | "welcome-popup";
  children: React.ReactNode;
  maxWidth?: string;
  center?: boolean;
}) {
  const { activePopup, closePopup } = usePopup();

  if (activePopup !== id) return null;

  return (
    <div className="fixed inset-0 bg-[#1a1108]/70 z-[3000] flex items-center justify-center p-6">
      <div
        className="bg-cream w-full relative animate-[popup-in_0.4s_cubic-bezier(.34,1.56,.64,1)] px-6 py-10 md:px-12 md:py-14"
        style={{ maxWidth, textAlign: center ? "center" : "left" }}
      >
        <button 
          className="absolute top-5 right-5 bg-transparent border-none text-2xl text-text-mid cursor-pointer transition-colors duration-300 hover:text-gold" 
          onClick={closePopup}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
