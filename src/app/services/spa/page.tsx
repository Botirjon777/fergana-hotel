import SpaView from "@/features/services/SpaView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness & SPA Wellness",
  description: "Rejuvenate at the Safir Hotel SPA in Fergana. Enjoy our heated indoor swimming pool, traditional Finnish steam bath, Turkish Hammam, and fully equipped fitness gym.",
  openGraph: {
    title: "Fitness & SPA Wellness | Safir Hotel Fergana",
    description: "Rejuvenate at the Safir Hotel SPA in Fergana. Enjoy our heated indoor swimming pool, traditional Finnish steam bath, Turkish Hammam, and fully equipped fitness gym.",
    url: "https://safirhotel.uz/services/spa",
    images: [
      {
        url: "/images/hotel/general/pool.webp",
        width: 1200,
        height: 630,
        alt: "Safir Hotel Heated Indoor Swimming Pool Spa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness & SPA Wellness | Safir Hotel Fergana",
    description: "Rejuvenate at the Safir Hotel SPA in Fergana. Enjoy our heated indoor swimming pool, traditional Finnish steam bath, Turkish Hammam, and fully equipped fitness gym.",
    images: ["/images/hotel/general/pool.webp"],
  },
  alternates: {
    canonical: "https://safirhotel.uz/services/spa",
  },
};

export default function SpaPage() {
  return <SpaView />;
}
