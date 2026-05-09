import { useState, useEffect } from 'react';

const PROPERTY_ID = 506781;

export interface RateSummary {
  rate: {
    providerName: string;
    providerAddress: string;
    rate: number;
    maxRate: number;
    reviewsCount: number;
    textRate: string;
  };
  providerRates: {
    rate: number;
    maxRate: number;
    categoryName: string;
  }[];
  ratingAssessmentCounts: Record<string, number>;
  reviewsCount: number;
}

export interface Review {
  reviewGuid: string;
  reviewId: number;
  reviewRates: { rate: number; maxRate: number; textRate: string }[];
  text: string;
  date: string;
  authorName: string;
  source: { name: string; code: string };
  language: string;
}

export interface ReviewsResponse {
  reviews: Review[];
}

export function useRateSummary(language: string = 'ru') {
  const [data, setData] = useState<RateSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchRate = async () => {
      try {
        setIsLoading(true);
        // Fallback locale handling: hopenapi uses specific language codes, default to ru
        const apiLang = ['en', 'ru', 'uz'].includes(language) ? language : 'ru';
        const res = await fetch(`https://uz-ibe.hopenapi.com/reputation-widget-api/rate?id=${PROPERTY_ID}&language=${apiLang}&extended=true`);
        if (!res.ok) throw new Error('Failed to fetch rate summary');
        const json = await res.json();
        if (isMounted) {
          setData(json);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchRate();
    return () => { isMounted = false; };
  }, [language]);

  return { data, isLoading, error };
}

export function useDetailedReviews(language: string = 'ru', limit: number = 10) {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const apiLang = ['en', 'ru', 'uz'].includes(language) ? language : 'ru';
        const res = await fetch(`https://uz-ibe.hopenapi.com/reputation-widget-api/reviews?id=${PROPERTY_ID}&language=${apiLang}&sort=date&order=desc&limit=${limit}`);
        if (!res.ok) throw new Error('Failed to fetch reviews');
        const json = await res.json();
        if (isMounted) {
          setData(json);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchReviews();
    return () => { isMounted = false; };
  }, [language, limit]);

  return { data, isLoading, error };
}
