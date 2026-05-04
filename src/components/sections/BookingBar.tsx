"use client";

import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";

export function BookingBar() {
  const { openPopup } = usePopup();
  const t = useTranslations("Booking");

  return (
    <div id="booking-bar" className="max-w-[1200px] mx-auto px-5 relative z-20 -mt-24 md:-mt-40 group">
      <div className="bg-white shadow-[0_20px_50px_rgba(26,17,8,0.3)] md:shadow-[0_40px_80px_rgba(26,17,8,0.4)] px-6 py-8 md:p-10 flex gap-6 items-end flex-col lg:flex-row transition-transform duration-500 hover:-translate-y-1">
        <div className="flex-1 w-full flex flex-col gap-2">
          <label className="text-[10px] tracking-[4px] uppercase text-gold font-bold">{t("checkIn")}</label>
          <input className="bg-cream/30 border border-sand/20 px-4 py-3.5 font-jost text-sm text-text-dark outline-none transition-all duration-300 focus:border-gold focus:bg-white appearance-none cursor-pointer w-full" type="date" id="checkin" />
        </div>
        <div className="flex-1 w-full flex flex-col gap-2">
          <label className="text-[10px] tracking-[4px] uppercase text-gold font-bold">{t("checkOut")}</label>
          <input className="bg-cream/30 border border-sand/20 px-4 py-3.5 font-jost text-sm text-text-dark outline-none transition-all duration-300 focus:border-gold focus:bg-white appearance-none cursor-pointer w-full" type="date" id="checkout" />
        </div>
        <div className="flex-1 w-full flex flex-col gap-2">
          <label className="text-[10px] tracking-[4px] uppercase text-gold font-bold">{t("guests")}</label>
          <div className="relative">
            <select suppressHydrationWarning className="bg-cream/30 border border-sand/20 px-4 py-3.5 font-jost text-sm text-text-dark outline-none transition-all duration-300 focus:border-gold focus:bg-white appearance-none cursor-pointer w-full">
              <option>1 {t("guests")}</option>
              <option>2 {t("guests")}</option>
              <option>3 {t("guests")}</option>
              <option>4 {t("guests")}</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold">▼</div>
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col gap-2">
          <label className="text-[10px] tracking-[4px] uppercase text-gold font-bold">{t("roomType")}</label>
          <div className="relative">
            <select suppressHydrationWarning className="bg-cream/30 border border-sand/20 px-4 py-3.5 font-jost text-sm text-text-dark outline-none transition-all duration-300 focus:border-gold focus:bg-white appearance-none cursor-pointer w-full">
              <option>Levitation Suite</option>
              <option>Cloud Deluxe</option>
              <option>Horizon Penthouse</option>
              <option>Float Studio</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold">▼</div>
          </div>
        </div>
        <button
          className="bg-gold hover:bg-gold-dark transition-all duration-300 text-white border-none py-4 px-10 font-jost text-[11px] tracking-[4px] uppercase cursor-pointer whitespace-nowrap self-end w-full lg:w-auto shadow-xl shadow-gold/20 font-bold active:scale-95"
          onClick={() => openPopup("confirm-popup")}
        >
          {t("checkAvailability")}
        </button>
      </div>
    </div>
  );
}
