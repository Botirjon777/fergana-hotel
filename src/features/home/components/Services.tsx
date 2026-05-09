"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { servicesItems } from "@/lib/data";
import { usePopup } from "@/lib/PopupContext";

export function Services() {
  const { openPopup } = usePopup();

  return (
    <section
      id="services"
      className="px-5 py-10 md:px-12 md:py-20 bg-cream relative"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="What We Offer"
          titlePart1="Elevated"
          titleEm="Experiences"
        />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-px md:gap-[2px] mt-10 md:mt-[60px]">
          {servicesItems.map((service, i) => (
            <div
              className="bg-sand p-6 md:p-12 relative overflow-hidden transition-colors duration-400 cursor-pointer group hover:bg-cream"
              key={i}
              onClick={() => openPopup("service-popup")}
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 transition-transform duration-400 group-hover:scale-x-100"></div>
              <span className="text-2xl md:text-4xl mb-4 md:mb-6 block transition-transform duration-400 group-hover:-translate-y-1.5">
                {service.icon}
              </span>
              <h3 className="text-sm md:text-2xl font-normal text-text-dark mb-1 md:mb-3">
                {service.title}
              </h3>
              <p className="hidden md:block text-sm leading-[1.8] text-text-mid font-light">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 mt-3 md:mt-5 text-[9px] md:text-[11px] tracking-[2px] uppercase text-gold no-underline font-normal">
                {service.linkText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
