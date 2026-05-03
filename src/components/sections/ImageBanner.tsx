"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { MdOutlineBreakfastDining, MdOutlineRestaurant, MdOutlineLocalBar, MdEvStation } from "react-icons/md";
import { FiWifi, FiTruck, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperNavButtons } from "@/components/ui/SwiperNavButtons";

const images = [
  { src: "/images/slides/1.jpg", alt: "Fergana Suite 1" },
  { src: "/images/slides/2.jpg", alt: "Fergana Suite 2" },
  { src: "/images/slides/3.jpg", alt: "Fergana Suite 3" },
  { src: "/images/slides/4.jpg", alt: "Fergana Suite 4" },
  { src: "/images/slides/5.jpg", alt: "Fergana Suite 5" },
  { src: "/images/slides/6.jpg", alt: "Fergana Suite 6" },
  { src: "/images/slides/7.jpg", alt: "Fergana Suite 7" },
  { src: "/images/slides/8.jpg", alt: "Fergana Suite 8" },
];

const amenities = [
  { icon: <MdOutlineBreakfastDining className="w-5 h-5" />, label: "Buffet Breakfast Available" },
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
      <div className="relative group overflow-hidden">
        <Swiper
          onSwiper={setSwiper}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[400px] md:h-[600px]"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <SwiperNavButtons 
          swiper={swiper} 
          variant="glass" 
          className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300 max-md:opacity-100 [&_button]:pointer-events-auto"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-1">
            <h3 className="font-jost text-[10px] tracking-[4px] uppercase text-text-mid mb-2 font-bold">
              {t("featuredAmenities")}
            </h3>
            <a href="#" className="text-gold text-xs font-medium hover:underline">
              {t("allAmenities")}
            </a>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
            {amenities.map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-text-dark">
                <div className="text-gold shrink-0">
                  {item.icon}
                </div>
                <span className="text-[13px] font-medium tracking-[0.5px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
