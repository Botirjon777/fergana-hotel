import HomeView from "@/features/home/HomeView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safir Hotel Fergana — Above the Ordinary",
  description: "Experience absolute comfort and premium service at Safir Hotel in Fergana. Book luxurious suites, enjoy our heated indoor pool, and indulge in refined dining.",
  alternates: {
    canonical: "https://safirhotel.uz",
  },
};

export default function Home() {
  return <HomeView />;
}
