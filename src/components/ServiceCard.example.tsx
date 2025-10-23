/**
 * ServiceCard Usage Examples
 * 
 * Demonstrates different ways to use the ServiceCard component
 * for fitness and wellness professionals
 */

import React from 'react';
import ServiceCard from './ServiceCard';

export const ServiceCardExamples = () => {
  return (
    <div className="space-y-16">
      {/* Example 1: Personal Training with Link */}
      <ServiceCard
        title="Personal training sessions"
        description="One-on-one fitness coaching tailored to your goals, fitness level, and schedule. Get the personalized attention you need to achieve lasting results."
        imageSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Personal trainer working with client using dumbbells"
        ctaLabel="Book session"
        ctaHref="/services/personal-training"
      />

      {/* Example 2: Physical Therapy with Button Handler */}
      <ServiceCard
        title="Physical therapy treatment"
        description="Evidence-based rehabilitation services to help you recover from injury, manage pain, and restore optimal movement and function."
        imageSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Physical therapist assisting patient with rehabilitation exercises"
        ctaLabel="Schedule consultation"
        onCtaClick={() => {
          // Example: Open booking modal or redirect
          console.log('Opening booking system...');
        }}
      />

      {/* Example 3: Massage Therapy */}
      <ServiceCard
        title="Therapeutic massage"
        description="Relax and restore with professional massage therapy designed to reduce stress, alleviate muscle tension, and promote overall wellness."
        imageSrc="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Peaceful massage therapy room with soft lighting"
        ctaLabel="Book appointment"
        ctaHref="/booking/massage-therapy"
        className="bg-gray-50"
      />

      {/* Example 4: Nutrition Counseling */}
      <ServiceCard
        title="Nutrition counseling"
        description="Personalized nutrition guidance to fuel your body, support your fitness goals, and develop sustainable healthy eating habits."
        imageSrc="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Fresh healthy vegetables and fruits arranged on wooden table"
        ctaLabel="Start consultation"
        ctaHref="/services/nutrition"
      />
    </div>
  );
};

export default ServiceCardExamples;