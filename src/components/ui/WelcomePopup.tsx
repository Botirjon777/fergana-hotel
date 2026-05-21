"use client";

import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Modal } from "./Modal";

export function WelcomePopup() {
  const { activePopup, openPopup, closePopup } = usePopup();
  const [hasShown, setHasShown] = useState(false);
  const router = useRouter();
  const t = useTranslations("Welcome");

  useEffect(() => {
    // Check if popup has already been shown in this session
    const isShownSession = sessionStorage.getItem("welcome-popup-shown");
    if (isShownSession) {
      setHasShown(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasShown && !activePopup) {
        openPopup("welcome-popup");
        setHasShown(true);
        // Mark as shown for this session
        sessionStorage.setItem("welcome-popup-shown", "true");
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, [hasShown, activePopup, openPopup]);

  return (
    <Modal
      isOpen={activePopup === "welcome-popup"}
      onClose={closePopup}
      type="full"
      id="welcome-popup-modal"
    >
      <div className="bg-[#1a1108] w-screen h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hotel/general/reception.webp"
            alt="Welcome to Safir Hotel"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#1a1108]/90 via-[#1a1108]/40 to-[#1a1108]/95" />
        </div>

        <button
          className="absolute top-6 right-6 md:top-10 md:right-10 bg-white/20 border-none text-white w-10 h-10 rounded-full cursor-pointer text-lg z-10 hover:bg-white/30 transition-colors flex items-center justify-center"
          onClick={closePopup}
        >
          ✕
        </button>

        <div className="relative z-10 w-full max-w-150">
          <div className="welcome-top-star px-6 py-12 md:px-12 md:pt-15 md:pb-10 text-center relative overflow-hidden">
            <h2 className="text-5xl font-light text-white mb-2 relative z-10 drop-shadow-lg">
              {t("title")}
            </h2>
            <p className="text-sm text-white/75 font-light tracking-[1px] relative z-10">
              {t("subtitle")}
            </p>
          </div>
          <div className="px-6 py-8 md:px-12 md:py-10 bg-linear-to-t from-[#1a1108] to-transparent">
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
    </Modal>
  );
}
