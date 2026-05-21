import ReviewsView from "@/features/reviews/ReviewsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Reviews & Ratings",
  description: "Read verified reviews from guests who stayed at Safir Hotel Fergana. See our guest ratings for staff service, room cleanliness, location, comfort, and value.",
  openGraph: {
    title: "Guest Reviews & Ratings | Safir Hotel Fergana",
    description: "Read verified reviews from guests who stayed at Safir Hotel Fergana. See our guest ratings for staff service, room cleanliness, location, comfort, and value.",
    url: "https://safirhotel.uz/reviews",
    images: [
      {
        url: "/images/hotel/general/hotel-day.webp",
        width: 1200,
        height: 630,
        alt: "Safir Hotel Guest Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guest Reviews & Ratings | Safir Hotel Fergana",
    description: "Read verified reviews from guests who stayed at Safir Hotel Fergana. See our guest ratings for staff service, room cleanliness, location, comfort, and value.",
    images: ["/images/hotel/general/hotel-day.webp"],
  },
  alternates: {
    canonical: "https://safirhotel.uz/reviews",
  },
};

export default function ReviewsPage() {
  return <ReviewsView />;
}
