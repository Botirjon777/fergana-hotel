import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { Recommendations } from "@/components/sections/Recommendations";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Services } from "@/components/sections/Services";
import { Location } from "@/components/sections/Location";

import { BookingPopup } from "@/components/ui/BookingPopup";
import { ConfirmPopup } from "@/components/ui/ConfirmPopup";
import { ServicePopup } from "@/components/ui/ServicePopup";
import { WelcomePopup } from "@/components/ui/WelcomePopup";
import { FloatBookBtn } from "@/components/ui/FloatBookBtn";

export default function Home() {
  return (
    <main>
      <Navbar />
      <MobileSidebar />

      <Hero />
      <ImageBanner />
      <Recommendations />
      <About />

      <Gallery />
      <Services />
      <Location />

      <Footer />
      <BottomNav />

      <FloatBookBtn />
      <BookingPopup />
      <ConfirmPopup />
      <ServicePopup />
      <WelcomePopup />
    </main>
  );
}
