"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { stats } from "@/lib/data";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function About() {
  const t = useTranslations("About");
  const ta = useTranslations("AboutPage");

  return (
    <section
      id="about"
      className="px-5 py-10 md:px-6 md:py-20 bg-cream relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label={t("storyLabel")}
          title={t("storyTitle1")}
          subtitle={t("storyTitleEm")}
          description={ta("welcome")}
          action={{
            label: "Read More",
            href: "/about",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div
                className="border-l-2 border-gold/20 pl-6 animate-[fadeUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                key={i}
              >
                <span className="font-cormorant text-5xl md:text-6xl font-light text-gold leading-none block mb-3">
                  {stat.num}
                </span>
                <span className="text-[11px] tracking-[3px] uppercase text-text-mid font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="hidden md:block w-full aspect-4/5 relative overflow-hidden">
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
          <div className="hidden lg:flex absolute bottom-[-30px] left-[-30px] w-[200px] h-[200px] bg-gold flex-col items-center justify-center text-white font-cormorant">
            <div className="flex gap-1 mb-2">
              <span className="text-[32px] font-light leading-none">★</span>
              <span className="text-[32px] font-light leading-none">★</span>
              <span className="text-[32px] font-light leading-none">★</span>
            </div>
            <span className="text-[11px] tracking-[3px] opacity-80 font-jost uppercase">
              3 Stars
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
