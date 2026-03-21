import { useState } from "react";
import { HeroSection } from "../components/hero/HeroSection";
import { VideoModal } from "../components/hero/VideoModal";

export function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <main>
        <HeroSection onWatchVideo={() => setIsVideoModalOpen(true)} />
        <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

            <section>Focus</section>
            <section id="news">News</section>
            <section>Newsletter</section>
            <section>Footer</section>
    </main>
  )
}