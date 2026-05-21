import AboutView from "@/features/about-us/AboutView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Safir Hotel Fergana. Discover our hospitality standards, check-in policies, guest services, and find our prime location in Fergana.",
  openGraph: {
    title: "About Us | Safir Hotel Fergana",
    description: "Learn more about Safir Hotel Fergana. Discover our hospitality standards, check-in policies, guest services, and find our prime location in Fergana.",
    url: "https://safirhotel.uz/about",
    images: [
      {
        url: "/images/hotel/general/reception.webp",
        width: 1200,
        height: 630,
        alt: "Safir Hotel Reception Lounge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Safir Hotel Fergana",
    description: "Learn more about Safir Hotel Fergana. Discover our hospitality standards, check-in policies, guest services, and find our prime location in Fergana.",
    images: ["/images/hotel/general/reception.webp"],
  },
  alternates: {
    canonical: "https://safirhotel.uz/about",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
