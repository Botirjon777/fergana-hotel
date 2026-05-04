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
  title: "Fergana Hotel — Above the Ordinary",
  description: "Suspended between earth and sky, Fergana Hotel redefines luxury with weightless elegance and timeless design.",
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
              {children}
              <BasePopup />
              <GalleryPopup />
              <StickyBookingBar />
              <ScrollToTop />
            </SmoothScroll>
          </PopupProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
