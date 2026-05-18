"use client";

import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";

import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  FiClock,
  FiInfo,
  FiFileText,
  FiCheckCircle,
  FiMapPin,
  FiArrowLeft,
} from "react-icons/fi";
import Link from "next/link";

export default function AboutView() {
  const t = useTranslations("AboutPage");
  const tc = useTranslations("Common");

  return (
    <main className="min-h-screen bg-cream text-text-dark">
      <Navbar />
      <MobileSidebar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-20 px-4 md:px-6 bg-[#1a1108] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-br from-[#1a1108] via-[#2d1f0a] to-[#3d2c12] opacity-50"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold/60 hover:text-gold text-[10px] uppercase tracking-[3px] font-bold mb-10 transition-all group"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{tc("backToHome")}</span>
          </Link>

          <div className="text-center">
            <h1 className="font-cormorant text-5xl md:text-7xl font-light text-gold mb-6 animate-[fadeUp_0.8s_ease-out]">
              {t("title")}
            </h1>
            <div className="w-20 h-px bg-gold/50 mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Welcome & Image Section */}
      <section className="pt-20 pb-5 px-5 md:px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center bg-white p-2.5 md:p-5 shadow-[0_20px_80px_rgba(0,0,0,0.05)] rounded-sm -mt-32 relative z-20 border border-sand/20">
          <div className="relative aspect-video md:aspect-square w-full overflow-hidden rounded-sm">
            <Image
              src="/images/hotel/rooms/lux/king/2.jpg"
              alt="Safir Hotel Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-5">
            <div className="w-12 h-px bg-gold"></div>
            <p className="font-jost text-lg md:text-xl font-light leading-relaxed text-text-mid italic">
              "{t("welcome")}"
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-5 px-5 md:px-6 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Check-in / Check-out */}
        <div className="space-y-5 animate-[fadeUp_0.8s_0.2s_forwards] opacity-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-full text-gold">
              <FiClock size={24} />
            </div>
            <h2 className="font-cormorant text-3xl md:text-4xl text-text-dark">
              {t("termsTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border-l-4 border-gold shadow-sm">
              <span className="block text-xs uppercase tracking-[2px] text-gold font-bold mb-2">
                {t("checkInTime")}
              </span>
              <span className="text-3xl font-cormorant">
                {t("checkInValue")}
              </span>
            </div>
            <div className="bg-white p-6 border-l-4 border-gold shadow-sm">
              <span className="block text-xs uppercase tracking-[2px] text-gold font-bold mb-2">
                {t("checkOutTime")}
              </span>
              <span className="text-3xl font-cormorant">
                {t("checkOutValue")}
              </span>
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <div>
              <h3 className="text-gold font-jost font-bold uppercase tracking-[1px] text-sm mb-3 flex items-center gap-2">
                <FiInfo size={16} /> {t("earlyCheckIn")}
              </h3>
              <ul className="space-y-2 text-text-mid font-light text-sm">
                <li className="flex gap-3">
                  <span className="text-gold">•</span> {t("early1")}
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span> {t("early2")}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gold font-jost font-bold uppercase tracking-[1px] text-sm mb-3 flex items-center gap-2">
                <FiInfo size={16} /> {t("lateCheckOut")}
              </h3>
              <ul className="space-y-2 text-text-mid font-light text-sm">
                <li className="flex gap-3">
                  <span className="text-gold">•</span> {t("late1")}
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span> {t("late2")}
                </li>
              </ul>
            </div>

            <p className="text-xs text-text-mid/60 italic pt-4 border-t border-sand/30">
              {t("contactAdmin")}
            </p>
          </div>
        </div>

        {/* Cancellation & Policies */}
        <div className="space-y-5 animate-[fadeUp_0.8s_0.4s_forwards] opacity-0">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-full text-gold">
              <FiFileText size={24} />
            </div>
            <h2 className="font-cormorant text-3xl md:text-4xl text-text-dark">
              {t("policyTitle")}
            </h2>
          </div>

          <div className="bg-white p-2.5 md:p-5 shadow-sm border border-sand/20 space-y-5">
            <div>
              <h3 className="text-text-dark font-cormorant text-2xl mb-4">
                {t("cancellationTitle")}
              </h3>
              <p className="text-text-mid font-light leading-relaxed">
                {t("cancellationText")}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-sand/30">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-gold mt-1 shrink-0" />
                <p className="text-sm text-text-mid font-light">
                  Professional service and support for all our guests.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-gold mt-1 shrink-0" />
                <p className="text-sm text-text-mid font-light">
                  Transparent and clear policies for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5 md:py-10 px-4 md:px-6 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-full text-gold">
            <FiMapPin size={24} />
          </div>
          <h2 className="font-cormorant text-3xl md:text-4xl text-text-dark">
            Our Location
          </h2>
        </div>

        <div className="w-full aspect-video md:aspect-21/9 bg-[#e8e0d0] relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.1)] border border-sand/20">
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=71.789258%2C40.371206&z=16&pt=71.789258%2C40.371206%2Cpm2rdm"
            className="w-full h-full border-none grayscale-[0.2] contrast-[1.1]"
            allowFullScreen={true}
          ></iframe>
        </div>
      </section>

      <div className="pb-10"></div>

      <Footer />
    </main>
  );
}
