"use client";

import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import { CustomDatePicker } from "../ui/form/CustomDatePicker";
import { CustomSelect } from "../ui/form/CustomSelect";
import { useBookingStore } from "@/store/useBookingStore";
import { useRouter } from "@/i18n/routing";

export function BookingBar() {
  const { openPopup } = usePopup();
  const t = useTranslations("Booking");
  const router = useRouter();

  const { checkIn, checkOut, guests, roomType, setCheckIn, setCheckOut, setGuests, setRoomType } = useBookingStore();

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
    <div id="booking-bar" className="max-w-[1200px] mx-auto px-5 relative z-20 -mt-24 md:-mt-40 group">
      <div className="bg-white shadow-[0_20px_50px_rgba(26,17,8,0.3)] md:shadow-[0_40px_80px_rgba(26,17,8,0.4)] px-6 py-8 md:p-10 flex gap-6 items-end flex-col lg:flex-row transition-transform duration-500 hover:-translate-y-1">
        <CustomDatePicker
          label={`${t("checkIn")} — ${t("checkOut")}`}
          checkIn={checkIn}
          checkOut={checkOut}
          onChange={(inDate, outDate) => { setCheckIn(inDate); setCheckOut(outDate); }}
          className="flex-[1.5] w-full min-w-[280px]"
          theme="light"
        />
        <CustomSelect
          label={t("guests")}
          options={guestOptions}
          value={guests}
          onChange={setGuests}
          className="flex-1 w-full"
          theme="light"
        />
        <CustomSelect
          label={t("roomType")}
          options={roomOptions}
          value={roomType}
          onChange={setRoomType}
          className="flex-1 w-full"
          theme="light"
        />
        <button
          className="bg-gold hover:bg-gold-dark transition-all duration-300 text-white border-none px-10 font-jost text-[11px] tracking-[4px] uppercase cursor-pointer whitespace-nowrap self-end w-full lg:w-auto shadow-xl shadow-gold/20 font-bold active:scale-95 h-[58px] flex items-center justify-center"
          onClick={() => router.push("/booking")}
        >
          {t("checkAvailability")}
        </button>
      </div>
    </div>
  );
}
