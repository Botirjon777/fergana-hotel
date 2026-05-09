import NewsView from "@/features/news/NewsView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events | Safir Hotel",
  description: "Stay updated with the latest news, special offers, and events at Safir Hotel Fergana.",
};

export default function NewsPage() {
  return <NewsView />;
}
