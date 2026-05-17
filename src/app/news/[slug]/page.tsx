import { newsItems } from "@/lib/data";
import { notFound } from "next/navigation";
import FoodSafetyCert from "@/features/news/articles/FoodSafetyCert";
import QualityManagementCert from "@/features/news/articles/QualityManagementCert";
import SmartInRoomService from "@/features/news/articles/SmartInRoomService";

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.id === slug);
  
  return {
    title: `${item ? item.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'News'} | Safir Hotel`,
    description: "Read the latest news and updates from Safir Hotel.",
  };
}

const articleMap: Record<string, React.ComponentType> = {
  "food-safety-cert": FoodSafetyCert,
  "quality-management-cert": QualityManagementCert,
  "smart-in-room-service": SmartInRoomService,
};

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ArticleComponent = articleMap[slug];

  if (!ArticleComponent) {
    notFound();
  }

  return <ArticleComponent />;
}
