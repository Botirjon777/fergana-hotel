"use client";

import { PopupWrapper } from "./Popup";
import { usePopup } from "@/lib/PopupContext";

export function ConfirmPopup() {
  const { closePopup } = usePopup();

  return (
    <PopupWrapper id="confirm-popup" maxWidth="440px" center>
      <div className="text-[64px] mb-4 text-text-dark leading-none">✦</div>
      <h3 className="text-4xl font-light text-text-dark mb-2">We've Received Your Request</h3>
      <p className="text-sm text-text-mid font-light leading-[1.7] mb-8">
        Our concierge team will reach out within 2 hours to confirm your reservation at Fergana Hotel. We look forward to welcoming you above the clouds.
      </p>
      <button
        className="bg-gold hover:bg-gold-dark hover:-translate-y-[2px] transition-all duration-300 text-white border-none py-4 px-10 font-jost text-xs tracking-[3px] uppercase cursor-pointer inline-block w-full mt-2"
        onClick={closePopup}
      >
        Close
      </button>
    </PopupWrapper>
  );
}
