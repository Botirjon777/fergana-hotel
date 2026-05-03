"use client";

import { PopupWrapper } from "./Popup";
import { usePopup } from "@/lib/PopupContext";

export function ServicePopup() {
  const { openPopup, closePopup } = usePopup();

  return (
    <PopupWrapper id="service-popup">
      <span className="font-jost text-[10px] tracking-[5px] uppercase text-gold block mb-4">Enquire</span>
      <h3 className="text-4xl font-light text-text-dark mb-2">Book an Experience</h3>
      <p className="text-sm text-text-mid font-light leading-[1.7] mb-8">
        Contact our concierge to arrange this service during your stay or as a standalone experience.
      </p>
      <div className="flex flex-col gap-4">
        <input 
          className="bg-white border border-sand px-[18px] py-[14px] font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold w-full"
          type="text" 
          placeholder="Your Name" 
        />
        <input 
          className="bg-white border border-sand px-[18px] py-[14px] font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold w-full"
          type="email" 
          placeholder="Email Address" 
        />
        <input 
          className="bg-white border border-sand px-[18px] py-[14px] font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold w-full"
          type="text" 
          placeholder="Preferred Date" 
        />
        <input 
          className="bg-white border border-sand px-[18px] py-[14px] font-jost text-sm text-text-dark outline-none transition-colors duration-300 focus:border-gold w-full"
          type="text" 
          placeholder="Number of Guests" 
        />
        <button
          className="bg-gold hover:bg-gold-dark hover:-translate-y-[2px] transition-all duration-300 text-white border-none py-4 px-10 font-jost text-xs tracking-[3px] uppercase cursor-pointer inline-block w-full"
          onClick={() => {
            closePopup();
            openPopup("confirm-popup");
          }}
        >
          Send Enquiry
        </button>
      </div>
    </PopupWrapper>
  );
}
