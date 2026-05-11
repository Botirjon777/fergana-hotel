"use client";

import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export function WelcomePopup() {
  const { activePopup, openPopup, closePopup } = usePopup();
  const [hasShown, setHasShown] = useState(false);
  const router = useRouter();
  const t = useTranslations("Welcome");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShown && !activePopup) {
        openPopup("welcome-popup");
        setHasShown(true);
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, [hasShown, activePopup, openPopup]);

  if (activePopup !== "welcome-popup") return null;

  return (
    <div className="fixed inset-0 bg-[#1a1108]/75 z-4000 flex items-center justify-center p-6">
      <div className="bg-[#1a1108] w-full max-w-[600px] relative overflow-hidden animate-[popup-in_0.5s_cubic-bezier(.34,1.56,.64,1)]">
        <button
          className="absolute top-4 right-4 bg-white/20 border-none text-white w-8 h-8 rounded-full cursor-pointer text-base z-2 hover:bg-white/30 transition-colors"
          onClick={closePopup}
        >
          ✕
        </button>
        <div className="welcome-top-star bg-linear-to-br from-gold to-gold-dark px-6 py-12 md:px-12 md:pt-[60px] md:pb-10 text-center relative overflow-hidden">
          <h2 className="text-5xl font-light text-white mb-2 relative z-1">
            {t("title")}
          </h2>
          <p className="text-sm text-white/75 font-light tracking-[1px] relative z-1">
            {t("subtitle")}
          </p>
        </div>
        <div className="px-6 py-8 md:px-12 md:py-10">
          <p className="text-cream/70 text-[15px] leading-[1.8] font-light text-center mb-7">
            {t("description")}
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                closePopup();
                router.push("/gallery");
              }}
            >
              {t("explore")}
            </Button>
            <Button
              variant="gold"
              className="flex-1"
              onClick={() => {
                closePopup();
                router.push("/booking");
              }}
            >
              {t("book")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
