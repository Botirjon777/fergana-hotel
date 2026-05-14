"use client";

import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";

import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { 
  FiTv, FiSun, FiLock, FiWind, FiCoffee, FiWifi, 
  FiMap, FiShield, FiPhone, FiHome, FiCloud 
} from "react-icons/fi";

export default function GeneralServicesView() {
  const t = useTranslations("GeneralServices");

  const mainServices = [
    { title: t("laundryTitle"), desc: t("laundryDesc"), image: "/images/hotel/general/reception-3.webp" },
    { title: t("billiardTitle"), desc: t("billiardDesc"), image: "/images/hotel/general/billiard.webp" },
    { title: t("wifiTitle"), desc: t("wifiDesc"), icon: <FiWifi /> },
    { title: t("parkingTitle"), desc: t("parkingDesc"), icon: <FiMap /> },
  ];

  const amenities = [
    { icon: <FiTv />, label: t("amenities.tv") },
    { icon: <FiSun />, label: t("amenities.lamp") },
    { icon: <FiLock />, label: t("amenities.lock") },
    { icon: <FiWind />, label: t("amenities.ac") },
    { icon: <FiWifi />, label: t("amenities.wifi") },
    { icon: <FiCoffee />, label: t("amenities.kettle") },
    { icon: <FiShield />, label: t("amenities.safe") },
    { icon: <FiPhone />, label: t("amenities.phone") },
    { icon: <FiHome />, label: t("amenities.smartHome") },
    { icon: <FiCloud />, label: t("amenities.climate") },
  ];

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <MobileSidebar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-10 px-6 bg-[#1a1a1a] text-white relative overflow-hidden">
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

      {/* Services with Room Stay */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <h2 className="font-cormorant text-4xl md:text-5xl text-text-dark mb-12 text-center">
          {t("roomStayTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mainServices.map((service, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 border border-sand shadow-sm">
              {service.image ? (
                <div className="relative w-full md:w-48 aspect-square overflow-hidden shrink-0">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-full md:w-48 aspect-square flex items-center justify-center bg-sand text-gold text-5xl shrink-0">
                  {service.icon}
                </div>
              )}
              <div>
                <h3 className="font-cormorant text-2xl text-text-dark mb-3">{service.title}</h3>
                <p className="font-jost text-sm text-text-mid leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 px-6 bg-[#1a1108] text-cream">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-16 text-center">
            {t("amenitiesTitle")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
            {amenities.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="text-3xl text-gold/50 mb-4 transition-transform group-hover:scale-110 group-hover:text-gold">
                  {item.icon}
                </div>
                <span className="text-[11px] tracking-[2px] uppercase font-jost text-sand/60 group-hover:text-sand transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
