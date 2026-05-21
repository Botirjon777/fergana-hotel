import GeneralServicesView from "@/features/services/GeneralServicesView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Amenities",
  description: "Discover our premium leisure services at Safir Hotel Fergana. Indulge in our heated indoor pool, relax in our traditional steam spa hammam, or enjoy exquisite dining at our residents-only Gastrobar.",
  openGraph: {
    title: "Services & Amenities | Safir Hotel Fergana",
    description: "Discover our premium leisure services at Safir Hotel Fergana. Indulge in our heated indoor pool, relax in our traditional steam spa hammam, or enjoy exquisite dining at our residents-only Gastrobar.",
    url: "https://safirhotel.uz/services",
    images: [
      {
        url: "/images/hotel/general/restaurant.webp",
        width: 1200,
        height: 630,
        alt: "Safir Hotel Premium Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Amenities | Safir Hotel Fergana",
    description: "Discover our premium leisure services at Safir Hotel Fergana. Indulge in our heated indoor pool, relax in our traditional steam spa hammam, or enjoy exquisite dining at our residents-only Gastrobar.",
    images: ["/images/hotel/general/restaurant.webp"],
  },
  alternates: {
    canonical: "https://safirhotel.uz/services",
  },
};

export default function ServicesPage() {
  return <GeneralServicesView />;
}
