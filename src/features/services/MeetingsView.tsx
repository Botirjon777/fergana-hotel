"use client";

import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MeetingsView() {
  const t = useTranslations("Meetings");

  const rooms = [
    { name: "Executive Suite", capacity: "22", image: "/images/hotel/conference-rooms/22-person/1.jpg" },
    { name: "Boardroom", capacity: "32", image: "/images/hotel/conference-rooms/32-person/1.jpg" },
    { name: "Grand Hall", capacity: "52", image: "/images/hotel/conference-rooms/52-person/1.jpg" },
  ];

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <MobileSidebar />

      {/* Hero Section */}
      <section className="pt-25 pb-10 px-6 bg-[#111a08] text-white relative overflow-hidden">
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

      {/* Introduction */}
      <section className="py-20 px-6 max-w-[800px] mx-auto text-center">
        <h2 className="font-cormorant text-4xl md:text-5xl text-text-dark mb-6">
          {t("conferenceTitle")}
        </h2>
        <p className="font-jost text-text-mid text-lg leading-relaxed mb-8">
          {t("conferenceDesc")}
        </p>
      </section>

      {/* Conference Rooms Grid */}
      <section className="pb-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-4/5 overflow-hidden mb-6">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                  <span className="text-gold font-jost text-[10px] tracking-[2px] uppercase">Capacity: {room.capacity} Persons</span>
                </div>
              </div>
              <h3 className="font-cormorant text-2xl text-text-dark group-hover:text-gold transition-colors">
                {room.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services/Equipment */}
      <section className="py-20 px-6 bg-sand/20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="text-gold font-cormorant text-3xl block mb-2">Pro</span>
              <p className="text-[10px] tracking-[2px] uppercase text-text-mid">Audio-Visual</p>
            </div>
            <div className="text-center">
              <span className="text-gold font-cormorant text-3xl block mb-2">Wi-Fi</span>
              <p className="text-[10px] tracking-[2px] uppercase text-text-mid">High-Speed Fiber</p>
            </div>
            <div className="text-center">
              <span className="text-gold font-cormorant text-3xl block mb-2">Catering</span>
              <p className="text-[10px] tracking-[2px] uppercase text-text-mid">Custom Menus</p>
            </div>
            <div className="text-center">
              <span className="text-gold font-cormorant text-3xl block mb-2">Support</span>
              <p className="text-[10px] tracking-[2px] uppercase text-text-mid">Event Manager</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}
