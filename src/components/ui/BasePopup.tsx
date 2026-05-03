"use client";

import { usePopup } from "@/lib/PopupContext";
import { BookingPopup } from "./BookingPopup";
import { ConfirmPopup } from "./ConfirmPopup";
import { ServicePopup } from "./ServicePopup";
import { WelcomePopup } from "./WelcomePopup";

export function BasePopup() {
  const { activePopup } = usePopup();

  if (!activePopup) return null;

  switch (activePopup) {
    case "booking-popup":
      return <BookingPopup />;
    case "confirm-popup":
      return <ConfirmPopup />;
    case "service-popup":
      return <ServicePopup />;
    case "welcome-popup":
      return <WelcomePopup />;
    default:
      return null;
  }
}
