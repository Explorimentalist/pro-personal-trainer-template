import type { Metadata } from "next";

import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home - Hey Oko Fitness | Personal Training & Wellness",
  description:
    "Transform your fitness journey with professional personal training and wellness services. Expert guidance, personalized programs, and lasting results.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen space-y-24 bg-white pb-24">
      <HeroSection />
      
      <IntroSection />

      {/* Services Section */}
      <section className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Personal training sessions"
            description="One-on-one fitness coaching tailored to your goals, fitness level, and schedule. Get the personalized attention you need to achieve lasting results."
            imageSrc="/images/personal-training.png"
            imageAlt="Personal trainer working with client using dumbbells"
            ctaLabel="Book session"
            ctaHref="/services/personal-training"
            className="border-b border-r border-gray-200"
          />

          <ServiceCard
            title="Nutrition coaching"
            description="Personalized nutrition guidance to fuel your body, support your fitness goals, and develop sustainable healthy eating habits for long-term success."
            imageSrc="/images/nutrition-coaching.png"
            imageAlt="Fresh healthy vegetables and fruits arranged on wooden table"
            ctaLabel="Start coaching"
            ctaHref="/services/nutrition"
            className="border-b border-r border-gray-200"
          />

          <ServiceCard
            title="Wellness programs"
            description="Comprehensive wellness solutions combining fitness, mindfulness, and lifestyle coaching to help you achieve balance and optimal health."
            imageSrc="https://images.unsplash.com/photo-1540539335-f9b8b823a108?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Person practicing yoga in peaceful outdoor setting"
            ctaLabel="Explore programs"
            ctaHref="/services/wellness"
            className="border-b border-gray-200"
          />
        </div>
      </section>

      <ScheduleSection />

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Take the first step towards your fitness goals. Schedule a consultation today.
          </p>
          <Button variant="fitness" size="lg">
            Book Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
