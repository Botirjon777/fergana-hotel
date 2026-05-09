"use client";

import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { roomCategories, generalGallery } from "@/lib/data";
import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

export default function GalleryView() {
  const { openPopup, setGalleryImages } = usePopup();
  const t = useTranslations("GalleryPage");

  const handleOpenGallery = (images: string[]) => {
    setGalleryImages(images);
    openPopup("gallery-popup");
  };

  const conferenceCategory = roomCategories.find(c => c.id === 'conference');
  const otherRoomCategories = roomCategories.filter(c => c.id !== 'conference');

  // Helper to render a section
  const renderSection = (title: string, images: string[], categoryLabel: string) => (
    <section className="pb-20 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-10">
          <h2 className="font-cormorant text-3xl md:text-5xl text-text-dark">{title}</h2>
          <div className="flex-1 h-px bg-gold/20"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="group relative aspect-square cursor-pointer overflow-hidden bg-text-dark animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ opacity: 0, animationDelay: `${index * 0.05}s` }}
              onClick={() => handleOpenGallery(images)}
            >
              <Image
                src={src}
                alt={categoryLabel}
                fill
                loading="lazy"
                className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-50"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />

              <div className="absolute inset-0 bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                  <FiPlus className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[9px] tracking-[3px] uppercase text-white/80 block">
                  {categoryLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const allRoomImages = otherRoomCategories.flatMap(c => c.images);

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <MobileSidebar />

      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="font-jost text-[10px] tracking-[5px] uppercase text-gold block mb-6 animate-[fadeUp_0.8s_ease-out]">
            {t("title")}
          </span>
          <h1 className="font-cormorant text-[clamp(48px,8vw,90px)] font-light leading-none text-text-dark mb-8">
            Visual <span className="italic text-gold">Excellence</span>
          </h1>
          <p className="text-text-mid text-[16px] md:text-[18px] font-light leading-relaxed max-w-[600px] mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Sections */}
      {renderSection(t("sections.hotel"), generalGallery, "Safir Hotel")}
      {conferenceCategory && renderSection(t("sections.conference"), conferenceCategory.images, "Conference Hall")}
      {renderSection(t("sections.rooms"), allRoomImages, "Rooms & Suites")}

      <div className="pb-20"></div>

      <Footer />
      <BottomNav />
    </main>
  );
}
