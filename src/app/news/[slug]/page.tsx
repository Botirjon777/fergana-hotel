import { newsItems } from "@/lib/data";
import { notFound } from "next/navigation";
import SpringPromo from "@/features/news/articles/SpringPromo";
import NewSpaMenu from "@/features/news/articles/NewSpaMenu";
import Award2024 from "@/features/news/articles/Award2024";

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
  "spring-promo": SpringPromo,
  "new-spa-menu": NewSpaMenu,
  "award-2024": Award2024,
};

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ArticleComponent = articleMap[slug];

  if (!ArticleComponent) {
    notFound();
  }

  return <ArticleComponent />;
}
