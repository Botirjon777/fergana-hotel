import NewsView from "@/features/news/NewsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Stay updated with the latest news, announcements, special offers, and certifications at Safir Hotel Fergana.",
  openGraph: {
    title: "News & Events | Safir Hotel Fergana",
    description: "Stay updated with the latest news, announcements, special offers, and certifications at Safir Hotel Fergana.",
    url: "https://safirhotel.uz/news",
    images: [
      {
        url: "/news/safir-news-3.png",
        width: 1200,
        height: 630,
        alt: "Safir Hotel News & Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Events | Safir Hotel Fergana",
    description: "Stay updated with the latest news, announcements, special offers, and certifications at Safir Hotel Fergana.",
    images: ["/news/safir-news-3.png"],
  },
  alternates: {
    canonical: "https://safirhotel.uz/news",
  },
};

export default function NewsPage() {
  return <NewsView />;
}
