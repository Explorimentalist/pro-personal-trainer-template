"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

const HERO_IMAGE_URL =
  "https://quechua-lookbook.com/ss25/wp-content/uploads/2025/04/image-cover.jpg";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const handleScroll = () => {
      if (!heroRef.current) return;
      const progress = Math.min(window.scrollY / 12, 72);
      const radius = Math.min(Math.max(window.scrollY / 40, 0), 32);
      heroRef.current.style.clipPath = `inset(${progress}px round ${radius}px)`;
      const translate = Math.min(window.scrollY / 60, 10);
      heroRef.current.style.transform = `translate3d(0, ${translate}%, 0)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white will-change-[clip-path,transform]"
      style={{ clipPath: "inset(0px round 0px)" }}
    >
      <Image
        src={HERO_IMAGE_URL}
        alt="Focused personal trainer coaching a client during an outdoor workout"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* overlays removed to fully reveal the image */}

      <div className="fluid-container grid min-h-screen w-full grid-cols-4 items-center gap-fluid-lg py-fluid-2xl px-[4.5vw] md:grid-cols-12 lg:grid-cols-16 relative z-10">
        <div
          className={`col-span-4 md:col-span-8 lg:col-span-10 transition-all duration-700 ease-out relative z-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="max-w-narrow space-y-fluid-lg">
            <h1 className="text-fluid-hero font-bold !leading-[0.92] tracking-tight">
              Personal Training for Real Results
            </h1>
            <p className="text-fluid-large text-slate-200 font-extralight">
              Build strength, mobility, and confidence with tailored programs, real-time coaching, and data-driven progress tracking designed for your lifestyle.
            </p>
            <div>
              <Button
                variant="fitness"
                size="lg"
                className="fluid-button text-fluid-body font-bold shadow-lg shadow-green-500/25"
              >
                Book your assessment
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-4 lg:col-span-6">
          {/* Additional content space for stats, testimonials, or secondary CTA */}
        </div>
      </div>
    </section>
  );
}
