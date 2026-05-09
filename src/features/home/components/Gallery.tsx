"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { roomCategories } from "@/lib/data";
import { usePopup } from "@/lib/PopupContext";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { FiPlus } from "react-icons/fi";
import { SwiperNavButtons } from "@/components/ui/SwiperNavButtons";

import "swiper/css";

export function Gallery() {
  const { openPopup, setGalleryImages } = usePopup();
  const t = useTranslations("Gallery");
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleOpenGallery = (images: string[]) => {
    setGalleryImages(images);
    openPopup("gallery-popup");
  };

  return (
    <section
      id="gallery"
      className="px-5 py-10 md:px-12 md:py-20 bg-sand overflow-hidden relative"
    >
      <div className="max-w-[1200px] mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-20">
          <div className="flex-1">
            <span className="font-jost text-[10px] tracking-[5px] uppercase text-gold block mb-6 animate-[fadeUp_0.8s_ease-out]">
              {t("visualJourney")}
            </span>
            <h2 className="font-cormorant text-[clamp(40px,6vw,72px)] font-light leading-none text-text-dark">
              {t("throughOur")} <br />
              <span className="italic text-gold">{t("spaces")}</span>
            </h2>
          </div>

          <div className="max-w-[450px] pb-2">
            <div className="w-12 h-px bg-gold mb-6"></div>
            <p className="text-text-mid text-[15px] font-light leading-relaxed mb-8">
              Discover our curated selection of suites and halls, each designed
              with a unique blend of comfort and weightless elegance.
            </p>
            <a
              href="/gallery"
              className="inline-block font-jost text-[11px] tracking-[3px] uppercase text-gold border border-gold/30 px-8 py-3.5 transition-all duration-300 hover:bg-gold hover:text-white"
            >
              {t("viewFullGallery")}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto relative px-4 md:px-0">
        <Swiper
          onSwiper={setSwiper}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="gallery-categories-swiper"
        >
          {roomCategories.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="group relative aspect-4/5 cursor-pointer overflow-hidden bg-text-dark"
                onClick={() => handleOpenGallery(item.images || [])}
              >
                <Image
                  src={item.mainImage || ""}
                  alt={item.label}
                  fill
                  className="object-cover transition-all duration-1000 md:group-hover:scale-110 md:group-hover:opacity-40"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay Color - Desktop Only */}
                <div className="absolute inset-0 bg-gold/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Mobile Gradient Overlay - Darker and taller for readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent md:hidden"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white z-10 drop-shadow-md">
                  <div className="overflow-hidden mb-1 md:mb-2">
                    <span className="text-[10px] tracking-[5px] uppercase text-gold md:group-hover:text-white transition-colors duration-500 block md:transform md:translate-y-full md:group-hover:translate-y-0">
                      Room Type
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-cormorant text-2xl md:text-3xl tracking-[1px] md:transform md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-700 md:delay-100">
                      {item.label}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-6 flex items-center gap-3 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:translate-y-4 md:group-hover:translate-y-0 md:delay-200">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white flex items-center justify-center">
                      <FiPlus className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="text-[9px] md:text-[10px] tracking-[2px] uppercase font-medium">
                      Explore Gallery
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons - Reusable */}
        <SwiperNavButtons
          swiper={swiper}
          className="absolute inset-x-[-20px] md:inset-x-[-60px] top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none [&_button]:pointer-events-auto"
        />
      </div>
    </section>
  );
}
