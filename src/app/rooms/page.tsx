import RoomsView from "@/features/rooms/RoomsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Rooms & Suites",
  description: "Explore our collection of 63 premium rooms and suites at Safir Hotel Fergana. Each featuring individual climate control, orthopedic bedding, high-speed Wi-Fi, and sophisticated design.",
  openGraph: {
    title: "Luxury Rooms & Suites | Safir Hotel Fergana",
    description: "Explore our collection of 63 premium rooms and suites at Safir Hotel Fergana. Each featuring individual climate control, orthopedic bedding, high-speed Wi-Fi, and sophisticated design.",
    url: "https://safirhotel.uz/rooms",
    images: [
      {
        url: "/images/hotel/rooms/lux/king/2.jpg",
        width: 1200,
        height: 630,
        alt: "Safir Hotel Deluxe King Room Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Rooms & Suites | Safir Hotel Fergana",
    description: "Explore our collection of 63 premium rooms and suites at Safir Hotel Fergana. Each featuring individual climate control, orthopedic bedding, high-speed Wi-Fi, and sophisticated design.",
    images: ["/images/hotel/rooms/lux/king/2.jpg"],
  },
  alternates: {
    canonical: "https://safirhotel.uz/rooms",
  },
};

export default function RoomsPage() {
  return <RoomsView />;
}
