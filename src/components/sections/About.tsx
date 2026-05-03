"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { stats } from "@/lib/data";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="px-5 py-[80px] md:px-12 md:py-[120px] bg-cream relative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <SectionHeader
            label={t("storyLabel")}
            titlePart1={t("storyTitle1")}
            titleEm={t("storyTitleEm")}
            titlePart2={t("storyTitle2")}
          />
          <div className="w-[60px] h-[1px] bg-gold my-6"></div>
          <p className="text-base leading-[1.9] text-text-mid mb-5 font-light">
            {t("description1")}
          </p>
          <p className="text-base leading-[1.9] text-text-mid mb-5 font-light">
            {t("description2")}
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12">
            {stats.map((stat, i) => (
              <div className="border-l-2 border-sand pl-5" key={i}>
                <span className="font-cormorant text-5xl font-light text-gold leading-none block mb-1">{stat.num}</span>
                <span className="text-[11px] tracking-[2px] uppercase text-text-mid">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="w-full aspect-[4/5] relative overflow-hidden">
            <Image
              src="/images/slides/1.jpg"
              alt="Fergana Hotel Atmosphere"
              fill
              className="object-cover z-0"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
            <div className="absolute inset-0 bg-black/5 z-10"></div>
          </div>
          <div className="hidden lg:flex absolute -bottom-[30px] -left-[30px] w-[200px] h-[200px] bg-gold flex-col items-center justify-center text-white font-cormorant">
            <div className="flex gap-1 mb-2">
              <span className="text-[32px] font-light leading-none">★</span>
              <span className="text-[32px] font-light leading-none">★</span>
              <span className="text-[32px] font-light leading-none">★</span>
            </div>
            <span className="text-[11px] tracking-[3px] opacity-80 font-jost uppercase">3 Stars</span>
          </div>
        </div>
      </div>
    </section>
  );
}
