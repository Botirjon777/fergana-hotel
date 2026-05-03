"use client";

import { PopupWrapper } from "./Popup";
import { usePopup } from "@/lib/PopupContext";

export function BookingPopup() {
  const { openPopup, closePopup } = usePopup();

  return (
    <PopupWrapper id="booking-popup">
      <span className="font-jost text-[10px] tracking-[5px] uppercase text-gold block mb-4">Reserve</span>
      <h3 className="text-4xl font-light text-text-dark mb-2">Book Your Stay</h3>
      <p className="text-sm text-text-mid font-light leading-[1.7] mb-8">
        Fill in your details and our reservations team will confirm your stay within 2 hours.
      </p>
      <div className="flex flex-col gap-4">
        <input 
          className="bg-white border border-sand px-[18px] py-[14px] font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold w-full"
          type="text" 
          placeholder="Full Name" 
        />
        <input 
          className="bg-white border border-sand px-[18px] py-[14px] font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold w-full"
          type="email" 
          placeholder="Email Address" 
        />
        <input 
          className="bg-white border border-sand px-[18px] py-[14px] font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold w-full"
          type="tel" 
          placeholder="Phone Number" 
        />
        <input 
          className="bg-white border border-sand px-[18px] py-[14px] font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold w-full"
          type="date" 
          placeholder="Check In" 
        />
        <input 
          className="bg-white border border-sand px-[18px] py-[14px] font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold w-full"
          type="date" 
          placeholder="Check Out" 
        />
        <button
          className="bg-gold hover:bg-gold-dark hover:-translate-y-[2px] transition-all duration-300 text-white border-none py-4 px-10 font-jost text-xs tracking-[3px] uppercase cursor-pointer inline-block w-full"
          onClick={() => {
            closePopup();
            openPopup("confirm-popup");
          }}
        >
          Request Reservation
        </button>
      </div>
    </PopupWrapper>
  );
}
