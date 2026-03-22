import { useState } from "react";
import { HeroSection } from "../components/hero/HeroSection";
import { VideoModal } from "../components/hero/VideoModal";
import { FocusSection } from "../components/focus/FocusSection";
import { Header } from "../components/layout/Header";

export function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
    <Header />
    <main id="top">
        <HeroSection onWatchVideo={() => setIsVideoModalOpen(true)} />
        <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

            <FocusSection />
            <section id="news">News</section>
            <section>Newsletter</section>
            <section>Footer</section>
    </main>
    </>
  )
}