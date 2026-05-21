import MeetingsView from "@/features/services/MeetingsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meetings & Corporate Events",
  description: "Host successful business meetings and conferences at Safir Hotel Fergana. High-tech corporate venues equipped with modern projectors, premium acoustics, and corporate catering options.",
  openGraph: {
    title: "Meetings & Corporate Events | Safir Hotel Fergana",
    description: "Host successful business meetings and conferences at Safir Hotel Fergana. High-tech corporate venues equipped with modern projectors, premium acoustics, and corporate catering options.",
    url: "https://safirhotel.uz/services/meetings",
    images: [
      {
        url: "/images/hotel/conference-rooms/52-person/1.jpg",
        width: 1200,
        height: 630,
        alt: "Safir Hotel Conference Hall Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meetings & Corporate Events | Safir Hotel Fergana",
    description: "Host successful business meetings and conferences at Safir Hotel Fergana. High-tech corporate venues equipped with modern projectors, premium acoustics, and corporate catering options.",
    images: ["/images/hotel/conference-rooms/52-person/1.jpg"],
  },
  alternates: {
    canonical: "https://safirhotel.uz/services/meetings",
  },
};

export default function MeetingsPage() {
  return <MeetingsView />;
}
