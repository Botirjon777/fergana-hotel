"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { useTranslations } from "next-intl";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export function Location() {
  const t = useTranslations("Location");

  return (
    <section id="location" className="px-5 py-[80px] md:px-12 md:py-[120px] bg-sand relative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-start">
        <div className="pt-5">
          <SectionHeader
            label={t("findUs")}
            titlePart1={t("heartOfEverything")}
          />
          <div className="w-[60px] h-[1px] bg-gold my-6"></div>
          <p className="text-base leading-[1.9] text-text-mid font-light mb-8">
            {t("subtext")}
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <strong className="block text-[14px] tracking-[1px] text-text-dark mb-1 font-normal">{t("address")}</strong>
                <span className="text-sm text-text-mid font-light leading-relaxed">{t("addressText")}</span>
              </div>
            </div>
            
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                <FiPhone className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <strong className="block text-[14px] tracking-[1px] text-text-dark mb-1 font-normal">{t("reservations")}</strong>
                <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="text-sm text-text-mid font-light leading-relaxed hover:text-gold transition-colors">
                  {t("phone")}
                </a>
              </div>
            </div>
            
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                <FiMail className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <strong className="block text-[14px] tracking-[1px] text-text-dark mb-1 font-normal">{t("email")}</strong>
                <a href={`mailto:${t("emailAddress")}`} className="text-sm text-text-mid font-light leading-relaxed hover:text-gold transition-colors">
                  {t("emailAddress")}
                </a>
              </div>
            </div>
            
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                <FiClock className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <strong className="block text-[14px] tracking-[1px] text-text-dark mb-1 font-normal">{t("checkInOut")}</strong>
                <span className="text-sm text-text-mid font-light leading-relaxed">From 2:00 PM / Until 12:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full aspect-[4/3] bg-[#e8e0d0] relative overflow-hidden shadow-[0_8px_40px_rgba(176,113,55,0.12)]">
          <iframe
            suppressHydrationWarning
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.877!2d71.782!3d40.369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzA4LjAiTiA3McKwNDYnNTcuMSJF!5e0!3m2!1sen!2s!4v1234567890"
            className="w-full h-full border-none sepia-[0.1] contrast-[1.1] grayscale-[0.2]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute top-5 left-5 bg-cream px-5 py-3 shadow-[0_8px_40px_rgba(176,113,55,0.12)]">
            <p className="text-[11px] tracking-[2px] uppercase text-gold m-0">Fergana Hotel</p>
          </div>
        </div>
      </div>
    </section>
  );
}
