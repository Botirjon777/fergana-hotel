"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePopup } from "@/lib/PopupContext";
import {
  LiaWifiSolid,
  LiaBedSolid,
  LiaExpandArrowsAltSolid,
  LiaCitySolid,
} from "react-icons/lia";
import { FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/effect-fade";

const recommendations = [
  {
    id: "deluxe",
    titleKey: "deluxeTitle",
    descKey: "deluxeDesc",
    price: "450",
    images: [
      "/images/hotel/rooms/deluxe/2-room/1.jpg",
      "/images/hotel/rooms/deluxe/2-room/2.jpg",
      "/images/hotel/rooms/deluxe/king/1.jpg",
    ],
    features: [
      { icon: <LiaWifiSolid />, labelKey: "wifi" },
      { icon: <LiaBedSolid />, labelKey: "bed" },
      { icon: <LiaExpandArrowsAltSolid />, labelKey: "size" },
      { icon: <LiaCitySolid />, labelKey: "view" },
    ],
  },
  {
    id: "lux-king",
    titleKey: "luxKingTitle",
    descKey: "luxKingDesc",
    price: "320",
    images: [
      "/images/hotel/rooms/lux/king/1.jpg",
      "/images/hotel/rooms/lux/king/2.jpg",
      "/images/hotel/rooms/lux/king/3.jpg",
    ],
    features: [
      { icon: <LiaWifiSolid />, labelKey: "wifi" },
      { icon: <LiaBedSolid />, labelKey: "bed" },
      { icon: <LiaExpandArrowsAltSolid />, labelKey: "size" },
      { icon: <LiaCitySolid />, labelKey: "view" },
    ],
  },
  {
    id: "lux-family",
    titleKey: "luxFamilyTitle",
    descKey: "luxFamilyDesc",
    price: "380",
    images: [
      "/images/hotel/rooms/lux/family/1.jpg",
      "/images/hotel/rooms/lux/family/2.jpg",
      "/images/hotel/rooms/lux/family/3.jpg",
    ],
    features: [
      { icon: <LiaWifiSolid />, labelKey: "wifi" },
      { icon: <LiaBedSolid />, labelKey: "bed" },
      { icon: <LiaExpandArrowsAltSolid />, labelKey: "size" },
      { icon: <LiaCitySolid />, labelKey: "view" },
    ],
  },
];

export function Recommendations() {
  const t = useTranslations("Recommendations");
  const { openPopup, setGalleryImages } = usePopup();

  const handleOpenGallery = (images: string[]) => {
    setGalleryImages(images);
    openPopup("gallery-popup");
  };

  return (
    <section className="py-5 md:py-10 px-5 bg-cream overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-5 md:mb-10 text-center md:text-left">
          <span className="font-jost text-[9px] tracking-[4px] uppercase text-gold block mb-3 animate-[fadeUp_0.8s_ease-out]">
            {t("subtitle")}
          </span>
          <h2 className="font-cormorant text-[clamp(32px,4vw,48px)] font-light leading-[1.1] text-text-dark">
            {t("title")}
          </h2>
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
              enabled: true,
            },
          }}
          className="overflow-visible!"
        >
          {recommendations.map((room, index) => (
            <SwiperSlide key={room.id} className="h-auto! pb-5 flex">
              <div
                className={`flex flex-col bg-white shadow-[0_20px_40px_rgba(26,17,8,0.05)] overflow-hidden group hover:shadow-[0_30px_60px_rgba(26,17,8,0.08)] transition-all duration-700 animate-[fadeUp_0.8s_ease-out_forwards] w-full h-full`}
                style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
              >
                {/* Image Slider */}
                <div
                  className="w-full aspect-3/2 relative cursor-pointer overflow-hidden"
                  onClick={() => handleOpenGallery(room.images)}
                >
                  <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{
                      delay: 3500 + index * 500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-full"
                  >
                    {room.images.map((img, i) => (
                      <SwiperSlide key={i} className="h-full">
                        <Image
                          src={img}
                          alt={room.id}
                          fill
                          className="object-cover transition-transform duration-2000 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 30vw"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-between relative">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-cormorant text-xl md:text-2xl text-text-dark font-light group-hover:text-gold transition-colors duration-500">
                        {t(room.titleKey)}
                      </h3>
                      <div className="text-right">
                        <span className="block text-[7px] uppercase tracking-[2px] text-text-mid mb-0.5">
                          {t("priceFrom")}
                        </span>
                        <span className="text-lg font-jost text-gold font-medium">
                          ${room.price}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-mid text-[12px] font-light leading-relaxed mb-5 line-clamp-2">
                      {t(room.descKey)}
                    </p>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                      {room.features.slice(0, 4).map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 text-text-dark"
                        >
                          <span className="text-gold text-base">
                            {feature.icon}
                          </span>
                          <span className="text-[8px] tracking-[1px] font-medium uppercase">
                            {t(`features.${feature.labelKey}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-sand/20">
                    <button
                      onClick={() => openPopup("booking-popup")}
                      className="flex items-center gap-2 group/btn text-[9px] tracking-[2px] uppercase font-bold text-text-dark hover:text-gold transition-all duration-300"
                    >
                      Book Now
                      <FiArrowRight className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                    </button>
                    <span className="text-[8px] tracking-[2px] uppercase text-text-mid italic opacity-30">
                      Premium
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
