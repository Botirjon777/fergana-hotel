"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import {
  MdOutlineBreakfastDining,
  MdOutlineRestaurant,
  MdOutlineLocalBar,
  MdEvStation,
} from "react-icons/md";
import { FiWifi, FiTruck } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperNavButtons } from "@/components/ui/SwiperNavButtons";

const images = [
  {
    src: "/images/hotel/general/hotel-day.webp",
    alt: "Fergana Hotel Day View",
    id: "hotel-day",
  },
  {
    src: "/images/hotel/general/hotel-night.webp",
    alt: "Fergana Hotel Night View",
    id: "hotel-night",
  },
  {
    src: "/images/hotel/general/reception.webp",
    alt: "Hotel Reception",
    id: "reception",
  },
  {
    src: "/images/hotel/general/restaurant.webp",
    alt: "Hotel Restaurant",
    id: "restaurant",
  },
  {
    src: "/images/hotel/general/pool.webp",
    alt: "Hotel Swimming Pool",
    id: "pool",
  },
  {
    src: "/images/hotel/general/breakfast.webp",
    alt: "Hotel Breakfast Buffet",
    id: "breakfast",
  },
  {
    src: "/images/hotel/general/billiard.webp",
    alt: "Hotel Billiard Room",
    id: "billiard",
  },
];

const amenities = [
  {
    icon: <MdOutlineBreakfastDining className="w-5 h-5" />,
    label: "Buffet Breakfast Available",
  },
  { icon: <FiWifi className="w-5 h-5" />, label: "Free WiFi" },
  { icon: <MdEvStation className="w-5 h-5" />, label: "EV Charging" },
  { icon: <MdOutlineRestaurant className="w-5 h-5" />, label: "Restaurant" },
  { icon: <MdOutlineLocalBar className="w-5 h-5" />, label: "Bar" },
  { icon: <FiTruck className="w-5 h-5" />, label: "Airport Shuttle" },
];

export function ImageBanner() {
  const t = useTranslations("ImageBanner");
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="bg-cream">
      <div className="max-w-[1200px] mx-auto px-5 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-1">
            <h3 className="font-jost text-[10px] tracking-[4px] uppercase text-text-mid mb-2 font-bold">
              {t("featuredAmenities")}
            </h3>
            <a
              href="#"
              className="text-gold text-xs font-medium hover:underline"
            >
              {t("allAmenities")}
            </a>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-3 md:gap-x-4">
            {amenities.map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-text-dark">
                <div className="text-gold shrink-0">{item.icon}</div>
                <span className="text-[13px] font-medium tracking-[0.5px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative group overflow-hidden h-[450px] md:h-[700px]">
        <Swiper
          onSwiper={setSwiper}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-full banner-swiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />

                {/* Darkening Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex items-end md:items-center justify-start pointer-events-none px-6 md:px-20 pb-24 md:pb-0">
                  <div className="max-w-[1200px] w-full">
                    {/* Left Side Content Only */}
                    <div className="text-cream/70 max-w-[600px] animate-[fadeUp_1s_ease-out] drop-shadow-lg">
                      <span className="font-jost text-md md:text-lg tracking-[5px] uppercase block mb-4 md:mb-6 font-semibold">
                        {t(`slides.${img.id}.subtitle`)}
                      </span>
                      <h2 className="font-cormorant text-[clamp(38px,5vw,70px)] leading-[0.85] font-light">
                        {t(`slides.${img.id}.title`)
                          .split(" ")
                          .map((word, idx) => (
                            <span
                              key={idx}
                              className="block last:italic last:text-cream"
                            >
                              {word}
                            </span>
                          ))}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons - Inside the banner container */}
        <SwiperNavButtons
          swiper={swiper}
          variant="glass"
          className="absolute left-6 md:left-20 bottom-8 z-30 flex justify-start gap-5 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 max-md:opacity-100 [&_button]:pointer-events-auto"
        />
      </div>
    </section>
  );
}
