"use client";

import { useEffect, useState } from "react";
import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import { CustomSelect } from "./form/CustomSelect";
import { CustomDatePicker } from "./form/CustomDatePicker";

export function StickyBookingBar() {
  const [show, setShow] = useState(false);
  const { openPopup, activePopup, isSidebarOpen } = usePopup();
  const t = useTranslations("Booking");

  const [bookingData, setBookingData] = useState({
    checkIn: new Date().toISOString().split("T")[0],
    checkOut: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    guests: "2",
    roomType: "deluxe",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (activePopup || isSidebarOpen) return;
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activePopup, isSidebarOpen]);

  const guestOptions = [
    { value: "1", label: `1 ${t("guests")}` },
    { value: "2", label: `2 ${t("guests")}` },
    { value: "3", label: `3 ${t("guests")}` },
    { value: "4", label: `4 ${t("guests")}` },
  ];

  const roomOptions = [
    { value: "deluxe", label: "Deluxe Suite" },
    { value: "lux", label: "Lux Room" },
    { value: "standard", label: "Standard Room" },
  ];

  return (
    <div
      className={`fixed top-[64px] md:top-[80px] left-0 right-0 z-900 transition-all duration-500 transform ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[#1a1108]/95 backdrop-blur-md border-b border-gold/20 px-4 py-3 md:px-12 md:py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="hidden lg:flex items-center gap-6 flex-1">
          <CustomDatePicker
            label={t("checkIn")}
            value={bookingData.checkIn}
            onChange={(val) => setBookingData({ ...bookingData, checkIn: val })}
            className="flex-1"
          />
          <div className="w-px h-6 bg-gold/20"></div>
          <CustomDatePicker
            label={t("checkOut")}
            value={bookingData.checkOut}
            onChange={(val) =>
              setBookingData({ ...bookingData, checkOut: val })
            }
            className="flex-1"
          />
          <div className="w-px h-6 bg-gold/20"></div>
          <CustomSelect
            label={t("guests")}
            options={guestOptions}
            value={bookingData.guests}
            onChange={(val) => setBookingData({ ...bookingData, guests: val })}
            className="flex-1"
          />
          <div className="w-px h-6 bg-gold/20"></div>
          <CustomSelect
            label={t("roomType")}
            options={roomOptions}
            value={bookingData.roomType}
            onChange={(val) =>
              setBookingData({ ...bookingData, roomType: val })
            }
            className="flex-1"
          />
        </div>

        <div className="flex items-center justify-between w-full lg:w-auto gap-4">
          <div className="lg:hidden flex flex-col">
            <span className="text-[9px] tracking-[2px] uppercase text-gold font-bold">
              Fergana Hotel
            </span>
            <span className="text-white text-[10px] font-light">
              Luxury Above the Ordinary
            </span>
          </div>
          <button
            className="bg-gold hover:bg-[#b08d4a] text-white border-none py-2.5 px-6 md:py-3.5 md:px-10 font-jost text-[10px] md:text-xs tracking-[2px] uppercase cursor-pointer transition-all duration-300 shadow-lg shadow-gold/20 font-bold active:scale-95"
            onClick={() => openPopup("booking-popup")}
          >
            {t("checkAvailability")}
          </button>
        </div>
      </div>
    </div>
  );
}
