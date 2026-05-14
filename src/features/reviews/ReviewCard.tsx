"use client";

import { useState } from "react";
import { Review } from "@/hooks/useReviews";
import { FiStar } from "react-icons/fi";

interface ReviewCardProps {
  review: Review;
  locale: string;
}

const getFlagUrl = (lang?: string) => {
  if (!lang) return "https://flagcdn.com/w40/ru.png";
  const normalized = lang.toLowerCase();

  // Mapping language/region codes to FlagCDN country codes
  const mapping: Record<string, string> = {
    en: "gb",
    "en-gb": "gb",
    "en-us": "us",
    ru: "ru",
    uz: "uz",
    zh: "cn",
    uk: "ua", // Default to Ukraine for 'uk'
    "uk-ua": "ua",
    "uk-gb": "gb", // In case some API uses this
    de: "de",
    fr: "fr",
    it: "it",
    es: "es",
    tr: "tr",
    ar: "sa",
  };

  let code = mapping[normalized] || normalized;

  // Handle specific overrides for ambiguous codes
  if (normalized === "uk" && lang.toUpperCase() === "UK") code = "gb"; // Heuristic: uppercase UK usually means United Kingdom

  // Strip regional parts if not mapped (e.g. "fr-FR" -> "fr")
  if (code.length > 2 && code.includes("-")) {
    code = code.split("-")[1] || code.split("-")[0];
  }

  // Ensure it's 2 chars for flagcdn
  const finalCode = code.length > 2 ? code.substring(0, 2) : code;

  return `https://flagcdn.com/w40/${finalCode.toLowerCase()}.png`;
};

export function ReviewCard({ review, locale }: ReviewCardProps) {
  const [showTranslation, setShowTranslation] = useState(false);

  const rating = review.reviewRates[0];
  const stars = Math.round((rating.rate / rating.maxRate) * 5);

  const dateObj = new Date(review.date);
  const formattedDate = isNaN(dateObj.getTime())
    ? ""
    : new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(dateObj);

  return (
    <div className="bg-white/5 border border-white/10 p-2.5 md:p-5 rounded-lg flex flex-col gap-5 transition-all hover:border-gold/30">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Stars and Score */}
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={i < stars ? "fill-gold text-gold" : "text-white/20"}
                size={16}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold text-sm">
              {rating.rate}/{rating.maxRate}
            </span>
            <span className="text-gold/80 text-[11px] uppercase tracking-widest font-medium">
              {rating.textRate}
            </span>
          </div>
        </div>

        {/* Author and Language */}
        <div className="flex flex-col items-end gap-1 self-end md:self-auto">
          <div className="flex items-center gap-2.5">
            <span className="text-white font-medium">
              {review.authorName || "Guest"}
            </span>
            <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded text-[10px] text-white/70">
              <img
                src={getFlagUrl(review.language)}
                alt={review.language}
                className="w-4 h-auto rounded-sm object-cover"
              />
              <span className="uppercase">{review.language}</span>
            </div>
          </div>
          <div className="text-white/40 text-[11px]">
            {formattedDate} on {review.source.name}
          </div>
        </div>
      </div>

      <div className="h-px bg-white/5 w-full" />

      {/* Review Content */}
      <div className="flex flex-col gap-4">
        <p className="text-white/80 text-[15px] leading-relaxed whitespace-pre-line font-light">
          {showTranslation && review.translateText
            ? review.translateText
            : review.text}
        </p>

        {review.translateText && (
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="text-gold/80 text-xs font-medium underline underline-offset-4 hover:text-gold transition-colors text-left w-fit"
          >
            {showTranslation ? "Show original" : "Show translation"}
          </button>
        )}
      </div>

      {/* Review Responses */}
      {review.reviewResponses && review.reviewResponses.length > 0 && (
        <div className="mt-2 flex flex-col gap-4">
          {review.reviewResponses.map((response, i) => (
            <div
              key={i}
              className="bg-[#1f160d] border border-gold/10 p-2.5 md:p-5 rounded-md"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-gold/90 font-bold text-sm tracking-wide uppercase">
                  Review response:
                </span>
                <span className="text-white/30 text-[11px]">
                  {(() => {
                    const d = new Date(response.date);
                    return isNaN(d.getTime())
                      ? ""
                      : new Intl.DateTimeFormat(locale, {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }).format(d);
                  })()}
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-light italic">
                {response.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
