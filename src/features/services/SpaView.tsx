"use client";

import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";

import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function SpaView() {
  const t = useTranslations("Spa");
  const tc = useTranslations("Common");

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <MobileSidebar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-10 px-5 bg-[#0a1a1a] text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold/60 hover:text-gold text-[10px] uppercase tracking-[3px] font-bold mb-8 transition-all group"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{tc("backToHome")}</span>
          </Link>

          <div className="text-center">
            <h1 className="font-cormorant text-5xl md:text-8xl font-light text-gold mb-6 animate-[fadeUp_0.8s_ease-out]">
              {t("title")}
            </h1>
            <p className="font-jost text-sand/70 tracking-[2px] uppercase text-xs md:text-sm max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 1: Indoor Pool */}
      <section className="py-5 px-5 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
            <h2 className="font-cormorant text-4xl md:text-5xl text-text-dark mb-6">
              {t("poolTitle")}
            </h2>
            <p className="font-jost text-text-mid text-lg leading-relaxed mb-5">
              {t("poolDesc")}
            </p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden animate-[fadeUp_0.8s_ease-out_forwards]">
            <Image
              src="/images/hotel/general/pool.webp"
              alt={t("poolTitle")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section 2: Fitness Room */}
      <section className="py-5 px-5 bg-sand/20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="relative aspect-square overflow-hidden animate-[fadeUp_0.8s_ease-out_forwards]">
            <Image
              src="/images/hotel/general/billiard.webp"
              alt={t("fitnessTitle")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Note: I'm using billiard image as a placeholder for fitness if not specifically available, 
                but I'll add a label if it looks too much like billiard. 
                Actually pool is more 'Spa'. I'll check if there's a better one.
                restaurant-2 looks modern. 
            */}
          </div>
          <div className="animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
            <h2 className="font-cormorant text-4xl md:text-5xl text-text-dark mb-5">
              {t("fitnessTitle")}
            </h2>
            <p className="font-jost text-text-mid text-lg leading-relaxed mb-8">
              {t("fitnessDesc")}
            </p>
            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="p-2.5 bg-white border border-gold/10">
                <span className="text-gold font-cormorant text-xl block mb-1">
                  {t("modernCardio")}
                </span>
                <p className="text-xs text-text-mid">{t("modernCardioDesc")}</p>
              </div>
              <div className="p-2.5 bg-white border border-gold/10">
                <span className="text-gold font-cormorant text-xl block mb-1">
                  {t("strengthArea")}
                </span>
                <p className="text-xs text-text-mid">{t("strengthAreaDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
