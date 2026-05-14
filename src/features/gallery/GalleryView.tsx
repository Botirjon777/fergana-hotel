"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiArrowLeft, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { Footer } from "@/components/layout/Footer";
import { roomCategories, generalGallery } from "@/lib/data";
import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function GalleryView() {
  const { openPopup, setGalleryImages } = usePopup();
  const t = useTranslations("GalleryPage");
  const [expandedSections, setExpandedSections] = useState<string[]>(["hotel"]);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [lastOpened, setLastOpened] = useState<string | null>(null);

  const handleOpenGallery = (images: string[]) => {
    setGalleryImages(images);
    openPopup("gallery-popup");
  };

  const conferenceCategory = roomCategories.find((c) => c.id === "conference");
  const otherRoomCategories = roomCategories.filter(
    (c) => c.id !== "conference",
  );

  const allRoomImages = otherRoomCategories
    .filter((c) => c.images && c.images.length > 0)
    .flatMap((c) => c.images || []);

  const gallerySections = [
    {
      id: "hotel",
      title: t("sections.hotel"),
      label: "Safir Hotel",
      images: generalGallery,
      isPriority: true,
    },
    {
      id: "conference",
      title: t("sections.conference"),
      label: "Conference Hall",
      images: conferenceCategory?.images || [],
      isPriority: false,
    },
    {
      id: "rooms",
      title: t("sections.rooms"),
      label: "Rooms & Suites",
      images: allRoomImages,
      isPriority: false,
    },
  ];

  useEffect(() => {
    if (lastOpened) {
      const element = sectionRefs.current[lastOpened];
      if (element) {
        // Smooth scroll to the newly opened section
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [lastOpened]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const isExpanded = prev.includes(id);
      if (isExpanded) {
        return prev.filter((item) => item !== id);
      } else {
        setLastOpened(id);
        return [...prev, id];
      }
    });
  };

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <MobileSidebar />

      {/* Header Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 border-b border-gold/10">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold/60 hover:text-gold text-[10px] uppercase tracking-[3px] font-bold mb-10 transition-all group"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center">
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
        </div>
      </section>

      {/* Accordion Sections */}
      <div className="flex flex-col">
        {gallerySections.map((section) => (
          <div
            key={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="border-b border-gold/10 last:border-b-0 scroll-mt-[64px] md:scroll-mt-[80px]"
          >
            {/* Sticky Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className={`sticky top-[64px] md:top-[80px] z-30 w-full px-6 py-8 md:py-12 bg-cream/95 backdrop-blur-md flex items-center justify-between group transition-colors duration-500 ${
                expandedSections.includes(section.id) ? "bg-sand/40" : "hover:bg-sand/20"
              }`}
            >
              <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className="font-jost text-[10px] tracking-[4px] uppercase text-gold/50 group-hover:text-gold transition-colors">
                    {section.id.padStart(2, "0")}
                  </span>
                  <h2 className="font-cormorant text-2xl md:text-5xl text-text-dark font-light">
                    {section.title}
                  </h2>
                </div>
                <div className={`w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center transition-all duration-500 ${
                  expandedSections.includes(section.id) ? "rotate-180 bg-gold border-gold text-white" : "text-gold group-hover:border-gold"
                }`}>
                  <FiChevronDown size={20} />
                </div>
              </div>
            </button>

            {/* Expandable Content */}
            <AnimatePresence>
              {expandedSections.includes(section.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden bg-cream"
                >
                  <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                      {section.images
                        .filter((src) => src && src.trim() !== "")
                        .map((src, index) => (
                          <motion.div
                            key={`${src}-${index}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            className="group relative aspect-square cursor-pointer overflow-hidden bg-text-dark"
                            onClick={() => handleOpenGallery(section.images)}
                          >
                            <Image
                              src={src}
                              alt={section.label}
                              fill
                              loading={section.isPriority && index === 0 ? "eager" : "lazy"}
                              priority={section.isPriority && index === 0}
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
                                {section.label}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="pb-20"></div>
      <Footer />
    </main>
  );
}
