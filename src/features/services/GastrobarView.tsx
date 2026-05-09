"use client";

import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function GastrobarView() {
  const t = useTranslations("Gastrobar");

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <MobileSidebar />

      {/* Hero Section */}
      <section className="pt-25 pb-10 px-6 bg-[#1a1108] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent"></div>
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <h1 className="font-cormorant text-5xl md:text-8xl font-light text-gold mb-6 animate-[fadeUp_0.8s_ease-out]">
            {t("title")}
          </h1>
          <p className="font-jost text-sand/70 tracking-[2px] uppercase text-xs md:text-sm max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Content Section 1: Buffet Breakfast */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-4/3 overflow-hidden animate-[fadeUp_0.8s_ease-out_forwards]">
            <Image
              src="/images/hotel/general/breakfast.webp"
              alt={t("breakfastTitle")}
              fill
              className="object-cover"
            />
          </div>
          <div className="animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
            <h2 className="font-cormorant text-4xl md:text-5xl text-text-dark mb-6">
              {t("breakfastTitle")}
            </h2>
            <p className="font-jost text-text-mid text-lg leading-relaxed mb-8">
              {t("breakfastDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 2: Restaurant & Discount */}
      <section className="py-20 px-6 bg-sand/20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
            <h2 className="font-cormorant text-4xl md:text-5xl text-text-dark mb-6">
              {t("discountTitle")}
            </h2>
            <p className="font-jost text-text-mid text-lg leading-relaxed mb-8">
              {t("discountDesc")}
            </p>
            <div className="p-8 bg-white border border-gold/20 shadow-sm">
              <span className="text-gold font-cormorant text-2xl italic block mb-2">Exquisite Cuisine</span>
              <p className="text-sm text-text-mid italic">The perfect atmosphere for your dining experience.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-square overflow-hidden animate-[fadeUp_0.8s_ease-out_forwards]">
            <Image
              src="/images/hotel/general/restaurant.webp"
              alt="Restaurant"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/images/hotel/general/restaurant-2.webp"
              alt="Gastrobar Interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/images/hotel/general/reception-2.webp"
              alt="Bar Service"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}
