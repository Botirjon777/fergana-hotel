"use client";

import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { useDetailedReviews, useRateSummary } from "@/hooks/useReviews";
import { useLocale } from "next-intl";
import { FiStar } from "react-icons/fi";

export default function ReviewsPage() {
  const locale = useLocale();
  const { data: summary, isLoading: isLoadingSummary } = useRateSummary(locale);
  const { data: reviewsData, isLoading: isLoadingReviews } = useDetailedReviews(locale, 20);

  return (
    <main className="min-h-screen bg-[#1a1108] text-white">
      <Navbar />
      <MobileSidebar />

      <section className="pt-32 pb-16 px-4 md:px-6 max-w-[1200px] mx-auto min-h-[70vh]">
        <div className="text-center mb-12">
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-gold mb-4">Guest Reviews</h1>
          <p className="text-white/60 font-jost">What our guests say about their stay at Fergana Hotel.</p>
        </div>

        {isLoadingSummary || isLoadingReviews ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Summary Column */}
            <div className="lg:col-span-1">
              {summary && (
                <div className="bg-white/5 border border-gold/20 p-6 md:p-8 rounded-lg sticky top-32">
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-5xl font-cormorant text-gold">{summary.rate.rate}</span>
                    <span className="text-white/50 mb-1">/ 10</span>
                  </div>
                  <div className="text-white/90 text-xl capitalize mb-1">{summary.rate.textRate}</div>
                  <div className="text-white/50 text-sm mb-8">Based on {summary.reviewsCount} reviews</div>

                  <div className="space-y-4">
                    {summary.providerRates.map((cat, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white/80 capitalize">{cat.categoryName.replace('_', ' ')}</span>
                          <span className="text-gold">{cat.rate}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gold rounded-full" 
                            style={{ width: `${(cat.rate / cat.maxRate) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Reviews List Column */}
            <div className="lg:col-span-2 space-y-6">
              {reviewsData?.reviews.map((review) => (
                <div key={review.reviewGuid} className="bg-white/5 border border-white/10 p-6 rounded-lg transition-colors hover:border-gold/30">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg text-white/90 font-medium">{review.authorName || "Anonymous"}</h3>
                      <div className="text-white/40 text-xs mt-1">
                        {new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(review.date))} 
                        {review.source?.name && ` via ${review.source.name}`}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-gold/10 px-3 py-1 rounded text-gold font-semibold">
                      <span>{review.reviewRates[0]?.rate}</span>
                      <FiStar className="fill-gold" size={12} />
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                    {review.text || "No written review provided."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}
