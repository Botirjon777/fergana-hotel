import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { PopupProvider } from "@/lib/PopupContext";
import LanguageProvider from "@/components/providers/LanguageProvider";
import GalleryPopup from "@/components/ui/GalleryPopup";
import { BasePopup } from "@/components/ui/BasePopup";
import { StickyBookingBar } from "@/components/ui/StickyBookingBar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollToTop from "@/components/ui/ScrollToTop";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safirhotel.uz"),
  title: {
    default: "Safir Hotel Fergana — Above the Ordinary",
    template: "%s | Safir Hotel Fergana"
  },
  description: "Experience genuine hospitality, premium rooms, and modern comfort in the heart of Fergana. Safir Hotel — a place you will want to return to.",
  keywords: [
    "safir hotel", "safir hotel fergana", "hotel fergana", "fergana hotel", 
    "mehmonxona fargona", "fargona mehmonxona", "гостиница фергана", 
    "фергана гостиница", "safir mehmonxonasi", "best hotel in fergana", 
    "luxury accommodation fergana", "гостиница в фергане", "отель фергана"
  ],
  authors: [{ name: "Safir Hotel" }],
  creator: "Safir Hotel",
  publisher: "Safir Hotel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://safirhotel.uz",
    siteName: "Safir Hotel Fergana",
    title: "Safir Hotel — Above the Ordinary",
    description: "Experience genuine hospitality, premium rooms, and modern comfort in the heart of Fergana. Safir Hotel — a place you will want to return to.",
    images: [
      {
        url: "/images/hotel/general/hotel-day.webp",
        width: 1200,
        height: 630,
        alt: "Safir Hotel Fergana Exterior View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safir Hotel — Above the Ordinary",
    description: "Experience genuine hospitality, premium rooms, and modern comfort in the heart of Fergana. Safir Hotel — a place you will want to return to.",
    images: ["/images/hotel/general/hotel-day.webp"],
  },
  alternates: {
    canonical: "https://safirhotel.uz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.variable} ${cormorant.variable} antialiased`}>
        <LanguageProvider>
          <PopupProvider>
            <SmoothScroll>
              <div className="overflow-x-hidden relative w-full flex flex-col min-h-screen">
                {children}
                <BasePopup />
                <GalleryPopup />
                <StickyBookingBar />
                <ScrollToTop />
              </div>
            </SmoothScroll>
          </PopupProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
