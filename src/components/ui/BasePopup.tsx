"use client";

import { usePopup } from "@/lib/PopupContext";
import { ServicePopup } from "./ServicePopup";
import { WelcomePopup } from "./WelcomePopup";

export function BasePopup() {
  const { activePopup } = usePopup();

  if (!activePopup) return null;

  switch (activePopup) {
    case "service-popup":
      return <ServicePopup />;
    case "welcome-popup":
      return <WelcomePopup />;
    default:
      return null;
  }
}
