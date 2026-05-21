import GastrobarView from "@/features/services/GastrobarView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gastrobar Dining",
  description: "Dine in style at the Safir Hotel Gastrobar in Fergana. Taste exquisite international dishes, enjoy premium buffet breakfasts, and enjoy an exclusive 10% discount for hotel residents.",
  openGraph: {
    title: "Gastrobar Dining | Safir Hotel Fergana",
    description: "Dine in style at the Safir Hotel Gastrobar in Fergana. Taste exquisite international dishes, enjoy premium buffet breakfasts, and enjoy an exclusive 10% discount for hotel residents.",
    url: "https://safirhotel.uz/services/gastrobar",
    images: [
      {
        url: "/images/hotel/general/restaurant-2.webp",
        width: 1200,
        height: 630,
        alt: "Safir Hotel Gastrobar Restaurant Dining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gastrobar Dining | Safir Hotel Fergana",
    description: "Dine in style at the Safir Hotel Gastrobar in Fergana. Taste exquisite international dishes, enjoy premium buffet breakfasts, and enjoy an exclusive 10% discount for hotel residents.",
    images: ["/images/hotel/general/restaurant-2.webp"],
  },
  alternates: {
    canonical: "https://safirhotel.uz/services/gastrobar",
  },
};

export default function GastrobarPage() {
  return <GastrobarView />;
}
