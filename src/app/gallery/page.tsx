import GalleryView from "@/features/gallery/GalleryView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo & Video Gallery",
  description: "Take a visual tour through Safir Hotel Fergana. View photos of our stylish lobby, premium guest rooms, indoor swimming pool, gastrobar, and modern meeting rooms.",
  openGraph: {
    title: "Photo & Video Gallery | Safir Hotel Fergana",
    description: "Take a visual tour through Safir Hotel Fergana. View photos of our stylish lobby, premium guest rooms, indoor swimming pool, gastrobar, and modern meeting rooms.",
    url: "https://safirhotel.uz/gallery",
    images: [
      {
        url: "/images/hotel/general/reception-2.webp",
        width: 1200,
        height: 630,
        alt: "Safir Hotel Interior Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo & Video Gallery | Safir Hotel Fergana",
    description: "Take a visual tour through Safir Hotel Fergana. View photos of our stylish lobby, premium guest rooms, indoor swimming pool, gastrobar, and modern meeting rooms.",
    images: ["/images/hotel/general/reception-2.webp"],
  },
  alternates: {
    canonical: "https://safirhotel.uz/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryView />;
}
