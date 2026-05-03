"use client";

import { usePopup } from "@/lib/PopupContext";

export function FloatBookBtn() {
  const { openPopup } = usePopup();

  return (
    <button
      className="hidden max-md:block fixed bottom-[72px] right-5 bg-gold text-white border-none py-[14px] px-5 font-jost text-[11px] tracking-[2px] uppercase cursor-pointer z-[901] shadow-[0_4px_20px_rgba(176,113,55,0.4)] animate-[bounce-in_0.5s_2s_cubic-bezier(.34,1.56,.64,1)_both]"
      onClick={() => openPopup("booking-popup")}
    >
      Book Now
    </button>
  );
}
