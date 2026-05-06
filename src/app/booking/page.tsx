"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { useBookingStore } from "@/store/useBookingStore";
import { useLocale } from "next-intl";

export default function BookingPage() {
  const { checkIn, checkOut, guests } = useBookingStore();
  const locale = useLocale();
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    let nights = 1;
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = end.getTime() - start.getTime();
      if (diffTime > 0) {
        nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      }
    }

    const queryParams = new URLSearchParams({
      accommodationMode: "auto",
      adults: guests || "1",
      language: locale === 'en' ? 'en' : locale === 'uz' ? 'uz' : 'ru',
      providerId: "506786",
      theme: "express-orange"
    });

    if (checkIn) {
      queryParams.append("date", checkIn);
      queryParams.append("nights", nights.toString());
    }

    // Notice we removed int=true, because int=true hides the interface waiting for postMessage from parent script.
    // We also removed origin which might cause CORS block if not whitelisted.
    setIframeUrl(`https://uz-ibe.hopenapi.com/booking2/hotel/index.html?${queryParams.toString()}`);
  }, [checkIn, checkOut, guests, locale]);

  return (
    <main className="min-h-screen bg-[#1a1108] flex flex-col">
      <Navbar />
      <MobileSidebar />

      <section className="pt-24 md:pt-32 pb-16 flex-1 flex flex-col">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 flex-1 flex flex-col">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex-1 min-h-[70vh] flex flex-col border border-gold/20">
            {iframeUrl ? (
              <iframe 
                src={iframeUrl}
                className="w-full h-full flex-1 border-none"
                title="Booking Engine"
                allow="payment"
              />
            ) : (
              <div className="flex-1 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}
