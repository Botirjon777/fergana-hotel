import { Hero } from "./components/Hero";
import { ImageBanner } from "./components/ImageBanner";
import { Recommendations } from "./components/Recommendations";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";
import { Location } from "./components/Location";
import { FloatBookBtn } from "@/components/ui/FloatBookBtn";
import { ServicePopup } from "@/components/ui/ServicePopup";
import { WelcomePopup } from "@/components/ui/WelcomePopup";
import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";

export default function HomeView() {
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
      <ServicePopup />
      <WelcomePopup />
    </main>
  );
}
