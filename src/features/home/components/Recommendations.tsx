"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePopup } from "@/lib/PopupContext";
import { FiArrowRight } from "react-icons/fi";
import { roomCategories } from "@/lib/data";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

import "swiper/css";
import "swiper/css/effect-fade";

export function Recommendations() {
  const t = useTranslations("Recommendations");
  const tr = useTranslations("RoomsPage");
  const { openPopup, setGalleryImages } = usePopup();

  const handleOpenGallery = (images: string[]) => {
    setGalleryImages(images);
    openPopup("gallery-popup");
  };

  // Select 3 bestsellers or specific rooms
  const selectedRooms = roomCategories.filter((cat) =>
    ["deluxe-king", "superior-twin", "superior-family"].includes(cat.id),
  );

  return (
    <section className="py-10 md:py-10 px-5 bg-cream overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          label={t("subtitle")}
          title={t("title")}
          className="text-center md:text-left"
        />

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
          {selectedRooms.map((room, index) => (
            <SwiperSlide key={room.id} className="h-auto! pb-5 flex">
              <div
                className={`flex flex-col bg-white shadow-[0_20px_40px_rgba(26,17,8,0.05)] overflow-hidden group hover:shadow-[0_30px_60px_rgba(26,17,8,0.08)] transition-all duration-700 animate-[fadeUp_0.8s_ease-out_forwards] w-full h-full`}
                style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
              >
                {/* Image Slider */}
                <div
                  className="w-full aspect-3/2 relative cursor-pointer overflow-hidden"
                  onClick={() => handleOpenGallery(room.images || [])}
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
                    {(room.images || []).map((img, i) => (
                      <SwiperSlide key={i} className="h-full">
                        <Image
                          src={img}
                          alt={room.label}
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
                        {tr(`details.${room.id}.title`)}
                      </h3>
                    </div>

                    <p className="text-text-mid text-[12px] font-light leading-relaxed mb-8 line-clamp-3">
                      {tr(`details.${room.id}.description`)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-sand/20">
                    <button
                      onClick={() => openPopup("booking-popup")}
                      className="flex items-center gap-2 group/btn text-[9px] tracking-[2px] uppercase font-bold text-text-dark hover:text-gold transition-all duration-300"
                    >
                      {tr("bookNow")}
                      <FiArrowRight className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                    </button>
                    <span className="text-[8px] tracking-[2px] uppercase text-text-mid italic opacity-30">
                      {t("premium")}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Show More Slide */}
          <SwiperSlide className="h-auto! pb-5 flex">
            <Link
              href="/rooms"
              className="flex flex-col bg-gold overflow-hidden group hover:bg-[#b08d4a] transition-all duration-700 animate-[fadeUp_0.8s_ease-out_forwards] w-full h-full p-8 md:p-10 justify-center items-center text-center text-white relative shadow-[0_20px_40px_rgba(176,113,55,0.2)]"
              style={{ animationDelay: `0.6s`, opacity: 0 }}
            >
              <div className="absolute inset-0 opacity-10 bg-[url('/images/hotel/general/hotel-day.webp')] bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <span className="font-jost text-[10px] tracking-[4px] uppercase block mb-4 opacity-80">
                  {t("subtitle")}
                </span>
                <h3 className="font-cormorant text-3xl md:text-4xl font-light mb-8">
                  {t("discoverAll")} <br /> <span className="italic">{t("roomTypes")}</span>
                </h3>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto group-hover:border-white transition-colors duration-300">
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <span className="font-jost text-[9px] tracking-[2px] uppercase mt-6 block font-bold">
                  {t("viewRooms")}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
