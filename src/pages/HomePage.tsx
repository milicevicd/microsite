import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "../components/hero/HeroSection";
import { VideoModal } from "../components/hero/VideoModal";
import { FocusSection } from "../components/focus/FocusSection";
import { Header } from "../components/layout/Header";
import { NewsSection } from "../components/news/NewsSection";
import { NewsletterSection } from "../components/newsletter/NewsletterSection";
import { Footer } from "../components/layout/Footer";

export function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#news") {
      const newsElement = document.getElementById("news");
      if (newsElement) {
        setTimeout(() => {
          newsElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);
  
  return (
    <>
    <Header />
    <main id="top">
        <HeroSection onWatchVideo={() => setIsVideoModalOpen(true)} />
        <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

            <FocusSection />
            <NewsSection />
            <NewsletterSection />
            <Footer />
    </main>
    </>
  )
}