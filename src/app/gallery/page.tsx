"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { roomCategories } from "@/lib/data";
import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

export default function GalleryPage() {
  const { openPopup, setGalleryImages } = usePopup();
  const t = useTranslations("GalleryPage");
  const [activeFilter, setActiveFilter] = useState("all");

  const handleOpenGallery = (images: string[]) => {
    setGalleryImages(images);
    openPopup("gallery-popup");
  };

  const filters = [
    { id: "all", label: t("all") },
    { id: "deluxe", label: t("deluxe") },
    { id: "lux", label: t("lux") },
    { id: "standart", label: t("standart") },
    { id: "conference", label: t("conference") },
  ];

  const filteredCategories = useMemo(() => {
    if (activeFilter === "all") return roomCategories;
    return roomCategories.filter((cat) => cat.id === activeFilter);
  }, [activeFilter]);

  // Extract all images for the "All" filter or categorized images
  const displayImages = useMemo(() => {
    const imagesList: {
      src: string;
      label: string;
      categoryImages: string[];
    }[] = [];

    filteredCategories.forEach((cat) => {
      cat.images.forEach((img) => {
        imagesList.push({
          src: img,
          label: cat.label,
          categoryImages: cat.images,
        });
      });
    });

    return imagesList;
  }, [filteredCategories]);

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

      {/* Filter Section */}
      <section className="pb-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`font-jost text-[11px] tracking-[3px] uppercase transition-all duration-300 relative py-2 ${
                activeFilter === filter.id
                  ? "text-gold"
                  : "text-text-mid hover:text-text-dark"
              }`}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold animate-[scaleIn_0.3s_ease-out]"></div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 md:pb-40 px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {displayImages.map((img, index) => (
            <div
              key={`${img.src}-${index}`}
              className="group relative aspect-square cursor-pointer overflow-hidden bg-text-dark animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
              onClick={() => handleOpenGallery(img.categoryImages)}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-50"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />

              <div className="absolute inset-0 bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                  <FiPlus className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[9px] tracking-[3px] uppercase text-white/80 block mb-1">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}
