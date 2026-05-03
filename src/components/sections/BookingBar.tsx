"use client";

import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";

export function BookingBar() {
  const { openPopup } = usePopup();
  const t = useTranslations("Booking");

  return (
    <div id="booking-bar" className="bg-white shadow-[0_-4px_60px_rgba(176,113,55,0.15)] relative z-10 -mt-[1px]">
      <div className="max-w-[1200px] mx-auto px-5 py-6 md:p-8 md:px-12 flex gap-4 items-end flex-col md:flex-row flex-wrap">
        <div className="flex-1 min-w-[160px] w-full md:w-auto flex flex-col gap-1.5">
          <label className="text-[10px] tracking-[3px] uppercase text-gold font-normal">{t("checkIn")}</label>
          <input className="bg-cream border border-sand px-4 py-3 font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold appearance-none cursor-pointer w-full" type="date" id="checkin" />
        </div>
        <div className="flex-1 min-w-[160px] w-full md:w-auto flex flex-col gap-1.5">
          <label className="text-[10px] tracking-[3px] uppercase text-gold font-normal">{t("checkOut")}</label>
          <input className="bg-cream border border-sand px-4 py-3 font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold appearance-none cursor-pointer w-full" type="date" id="checkout" />
        </div>
        <div className="flex-1 min-w-[160px] w-full md:w-auto flex flex-col gap-1.5">
          <label className="text-[10px] tracking-[3px] uppercase text-gold font-normal">{t("guests")}</label>
          <select suppressHydrationWarning className="bg-cream border border-sand px-4 py-3 font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold appearance-none cursor-pointer w-full">
            <option>1 {t("guests")}</option>
            <option>2 {t("guests")}</option>
            <option>3 {t("guests")}</option>
            <option>4 {t("guests")}</option>
          </select>
        </div>
        <div className="flex-1 min-w-[160px] w-full md:w-auto flex flex-col gap-1.5">
          <label className="text-[10px] tracking-[3px] uppercase text-gold font-normal">{t("roomType")}</label>
          <select suppressHydrationWarning className="bg-cream border border-sand px-4 py-3 font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold appearance-none cursor-pointer w-full">
            <option>Levitation Suite</option>
            <option>Cloud Deluxe</option>
            <option>Horizon Penthouse</option>
            <option>Float Studio</option>
          </select>
        </div>
        <button
          className="bg-gold hover:bg-gold-dark transition-colors duration-300 text-white border-none py-[14px] px-9 font-jost text-xs tracking-[3px] uppercase cursor-pointer whitespace-nowrap self-end w-full md:w-auto mt-2 md:mt-0"
          onClick={() => openPopup("confirm-popup")}
        >
          {t("checkAvailability")}
        </button>
      </div>
    </div>
  );
}
