"use client";

import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function WelcomePopup() {
  const { activePopup, openPopup, closePopup } = usePopup();
  const [hasShown, setHasShown] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const t = useTranslations("Welcome");

  useEffect(() => {
    setMounted(true);
    const isShownSession = sessionStorage.getItem("welcome-popup-shown");
    if (isShownSession) {
      setHasShown(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasShown && !activePopup) {
        openPopup("welcome-popup");
        setHasShown(true);
        sessionStorage.setItem("welcome-popup-shown", "true");
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, [hasShown, activePopup, openPopup]);

  const isOpen = activePopup === "welcome-popup";

  if (!mounted || !isOpen) return null;

  return (
    // Single container: backdrop + flex centering combined
    // On mobile: dark bg fills screen, flex aligns card to center
    // On desktop: same, but card has max-width
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center"
      onClick={closePopup}
    >
      {/* Card — stop propagation so clicking inside doesn't close */}
      <div
        className="relative bg-[#1a1108] overflow-hidden w-full h-full md:h-auto md:max-w-[520px] md:mx-4 md:rounded-sm animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hotel/general/reception.webp"
            alt="Welcome to Safir Hotel"
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#1a1108]/90 via-[#1a1108]/40 to-[#1a1108]/95" />
        </div>

        {/* Close Button — high z-index, clearly above everything */}
        <button
          className="absolute top-5 right-5 z-20 bg-white/20 hover:bg-white/35 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors cursor-pointer"
          onClick={closePopup}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          <div className="w-full max-w-[420px] mx-auto">
            <div className="welcome-top-star px-8 py-10 md:px-10 md:py-8 text-center">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-2 drop-shadow-lg font-cormorant">
                {t("title")}
              </h2>
              <p className="text-sm text-white/75 font-light tracking-[1px]">
                {t("subtitle")}
              </p>
            </div>
            <div className="px-8 pb-10 md:px-10 md:pb-10">
              <p className="text-cream/90 text-[15px] leading-[1.8] font-light text-center mb-7 drop-shadow-md">
                {t("description")}
              </p>
              <div className="flex flex-col md:flex-row gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-white/20 hover:bg-white/10"
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
      </div>
    </div>
  );
}
