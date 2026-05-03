"use client";

import { usePopup } from "@/lib/PopupContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperNavButtons } from "@/components/ui/SwiperNavButtons";

export default function GalleryPopup() {
  const { activePopup, closePopup, galleryImages } = usePopup();
  const [mounted, setMounted] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || activePopup !== "gallery-popup") return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-[fade-in_0.3s_ease-out]">
      <button 
        onClick={closePopup}
        className="absolute top-6 right-6 z-[2001] text-white/70 hover:text-white transition-colors duration-300"
      >
        <LiaTimesSolid className="w-8 h-8" />
      </button>

      <div className="w-full h-full max-w-[1400px] max-h-[90vh] px-4 md:px-12 flex items-center justify-center relative">
        <Swiper
          onSwiper={setSwiper}
          modules={[Pagination]}
          pagination={{ clickable: true, type: "fraction" }}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          className="w-full h-full gallery-swiper"
        >
          {galleryImages.map((src, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Room image ${i + 1}`}
                  fill
                  className="object-contain"
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Reusable Nav Buttons */}
        <SwiperNavButtons 
          swiper={swiper} 
          variant="glass" 
          className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 z-[2002] flex justify-between pointer-events-none [&_button]:pointer-events-auto"
        />
      </div>

      <style jsx global>{`
        .gallery-swiper .swiper-pagination-fraction {
          color: white;
          font-family: var(--font-jost);
          letter-spacing: 2px;
          bottom: 20px;
        }
      `}</style>
    </div>
  );
}
