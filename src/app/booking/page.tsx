import BookingView from "@/features/booking/BookingView";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description: "Secure online booking at Safir Hotel Fergana. Check real-time room availability, best rates, and exclusive booking benefits on our official site.",
  openGraph: {
    title: "Book Your Stay | Safir Hotel Fergana",
    description: "Secure online booking at Safir Hotel Fergana. Check real-time room availability, best rates, and exclusive booking benefits on our official site.",
    url: "https://safirhotel.uz/booking",
    images: [
      {
        url: "/images/hotel/general/hotel-day.webp",
        width: 1200,
        height: 630,
        alt: "Safir Hotel Online Booking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Stay | Safir Hotel Fergana",
    description: "Secure online booking at Safir Hotel Fergana. Check real-time room availability, best rates, and exclusive booking benefits on our official site.",
    images: ["/images/hotel/general/hotel-day.webp"],
  },
  alternates: {
    canonical: "https://safirhotel.uz/booking",
  },
};

export default function BookingPage() {
  return (
    <Suspense fallback={null}>
      <BookingView />
    </Suspense>
  );
}
