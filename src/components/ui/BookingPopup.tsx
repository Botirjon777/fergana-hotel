"use client";

import { PopupWrapper } from "./Popup";
import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";

export function BookingPopup() {
  const { openPopup, closePopup } = usePopup();
  const t = useTranslations("Booking");

  return (
    <PopupWrapper id="booking-popup">
      <div className="max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar">
        <span className="font-jost text-[10px] tracking-[5px] uppercase text-gold block mb-3 font-bold">
          {t("reserve")}
        </span>
        <h3 className="text-3xl md:text-4xl font-cormorant font-light text-text-dark mb-3">
          {t("bookYourStay")}
        </h3>
        <p className="text-sm text-text-mid font-light leading-relaxed mb-8 opacity-80">
          {t("bookSubtext")}
        </p>

        <div className="space-y-5">
          <div className="group">
            <label className="block font-jost text-[10px] uppercase tracking-widest text-gold mb-1.5 font-bold transition-colors group-focus-within:text-gold-dark">
              {t("fullName")}
            </label>
            <input
              className="bg-white border border-sand/30 px-4 py-3.5 font-jost text-base text-text-dark outline-none transition-all duration-300 focus:border-gold focus:ring-1 focus:ring-gold/20 w-full rounded-none"
              type="text"
              placeholder="John Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="group">
              <label className="block font-jost text-[10px] uppercase tracking-widest text-gold mb-1.5 font-bold">
                {t("emailAddress")}
              </label>
              <input
                className="bg-white border border-sand/30 px-4 py-3.5 font-jost text-base text-text-dark outline-none transition-all duration-300 focus:border-gold focus:ring-1 focus:ring-gold/20 w-full rounded-none"
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="group">
              <label className="block font-jost text-[10px] uppercase tracking-widest text-gold mb-1.5 font-bold">
                {t("phoneNumber")}
              </label>
              <input
                className="bg-white border border-sand/30 px-4 py-3.5 font-jost text-base text-text-dark outline-none transition-all duration-300 focus:border-gold focus:ring-1 focus:ring-gold/20 w-full rounded-none"
                type="tel"
                placeholder="+998 90 123 45 67"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="group">
              <label className="block font-jost text-[10px] uppercase tracking-widest text-gold mb-1.5 font-bold">
                {t("checkIn")}
              </label>
              <input
                className="bg-white border border-sand/30 px-4 py-3.5 font-jost text-base text-text-dark outline-none transition-all duration-300 focus:border-gold focus:ring-1 focus:ring-gold/20 w-full rounded-none appearance-none"
                type="date"
              />
            </div>
            <div className="group">
              <label className="block font-jost text-[10px] uppercase tracking-widest text-gold mb-1.5 font-bold">
                {t("checkOut")}
              </label>
              <input
                className="bg-white border border-sand/30 px-4 py-3.5 font-jost text-base text-text-dark outline-none transition-all duration-300 focus:border-gold focus:ring-1 focus:ring-gold/20 w-full rounded-none appearance-none"
                type="date"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              className="bg-gold hover:bg-gold-dark hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-white border-none py-4 px-10 font-jost text-[11px] tracking-[4px] uppercase cursor-pointer inline-block w-full shadow-lg shadow-gold/20 font-bold"
              onClick={() => {
                closePopup();
                openPopup("confirm-popup");
              }}
            >
              {t("requestReservation")}
            </button>
          </div>
        </div>
      </div>
    </PopupWrapper>
  );
}
