import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services - Hey Oko Fitness | Personal Training & Wellness Programs",
  description: "Explore our comprehensive fitness and wellness services including personal training, group sessions, nutrition coaching, and specialized therapy programs.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-fitness-primary text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-green-100">
            Comprehensive fitness and wellness solutions tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Personal Training */}
            <div className="wellness-card">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-fitness-primary p-3 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Personal Training</h3>
              </div>
              <p className="mb-4 text-gray-600">
                One-on-one training sessions designed specifically for your fitness level, 
                goals, and preferences. Get the focused attention you deserve.
              </p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Customized workout plans
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Progress tracking & adjustments
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Proper form instruction
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Motivation & accountability
                </li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-fitness-primary">$75 <span className="text-base font-normal text-gray-600">per session</span></p>
                <p className="text-sm text-gray-500">Package deals available</p>
              </div>
            </div>

            {/* Group Training */}
            <div className="wellness-card">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-fitness-secondary p-3 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Group Training</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Small group sessions that combine the benefits of personal training 
                with the motivation and camaraderie of working out with others.
              </p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Maximum 4 people per group
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Varied workout styles
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Social motivation
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cost-effective option
                </li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-fitness-secondary">$35 <span className="text-base font-normal text-gray-600">per session</span></p>
                <p className="text-sm text-gray-500">Monthly memberships available</p>
              </div>
            </div>

            {/* Nutrition Coaching */}
            <div className="wellness-card">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-fitness-accent p-3 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Nutrition Coaching</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Personalized nutrition guidance to complement your fitness goals. 
                Learn sustainable eating habits that support your active lifestyle.
              </p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Meal planning & prep guidance
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Macro & calorie coaching
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Supplement recommendations
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Habit formation support
                </li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-fitness-accent">$150 <span className="text-base font-normal text-gray-600">initial consultation</span></p>
                <p className="text-sm text-gray-500">Follow-up sessions $60 each</p>
              </div>
            </div>

            {/* Wellness Therapy */}
            <div className="wellness-card">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-purple-500 p-3 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Wellness Therapy</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Holistic approach to wellness including stress management, 
                recovery techniques, and mental health support for optimal well-being.
              </p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Stress management techniques
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Recovery optimization
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mind-body connection
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lifestyle counseling
                </li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-purple-500">$120 <span className="text-base font-normal text-gray-600">per session</span></p>
                <p className="text-sm text-gray-500">Integrated wellness packages available</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Choose the service that best fits your goals and let's create a personalized plan for your success.
          </p>
          <Button variant="fitness" size="lg">
            Book a Consultation
          </Button>
        </div>
      </section>
    </main>
  );
}