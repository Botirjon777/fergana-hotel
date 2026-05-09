"use client";
import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { newsItems } from "@/lib/data";
import { FiCalendar, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

interface NewsDetailViewProps {
  id: string;
}

export default function NewsDetailView({ id }: NewsDetailViewProps) {
  const t = useTranslations("NewsPage");
  const item = newsItems.find((n) => n.id === id);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <MobileSidebar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        {item.image && (
          <Image
            src={item.image}
            alt={t(`items.${item.id}.title`)}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-[#1a1108] via-[#1a1108]/40 to-transparent"></div>
        
        <div className="max-w-[1000px] mx-auto w-full px-6 pb-16 relative z-10">
          <Link 
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-[2px] mb-8 hover:text-white transition-colors group"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to News
          </Link>
          
          <div className="flex items-center gap-3 text-sand/60 mb-6">
            <FiCalendar className="w-4 h-4" />
            <span className="text-xs font-medium tracking-[2px] uppercase">
              {mounted ? new Date(item.date).toLocaleDateString() : ""}
            </span>
          </div>
          
          <h1 className="font-cormorant text-4xl md:text-6xl text-white leading-tight animate-[fadeUp_0.8s_ease-out]">
            {t(`items.${item.id}.title`)}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto">
        <div className="bg-white p-8 md:p-16 border border-sand/10 shadow-sm">
          <div className="prose prose-gold max-w-none">
            {t(`items.${item.id}.content`).split('\n\n').map((paragraph, i) => (
              <p key={i} className="font-jost text-text-mid text-lg leading-relaxed mb-8 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-sand/10 flex justify-between items-center">
            <div className="flex gap-4">
              {/* Share links could go here */}
            </div>
            <Link 
              href="/news"
              className="font-jost text-sm font-bold text-gold hover:text-text-dark transition-colors"
            >
              ← All News
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}
