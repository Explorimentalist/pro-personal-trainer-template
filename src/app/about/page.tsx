import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Hey Oko Fitness | Meet Your Personal Trainer",
  description: "Learn about our experienced personal trainers and wellness professionals. Discover our story, certifications, and commitment to your success.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Meet Your Fitness Expert
              </h1>
              <p className="mb-6 text-lg text-gray-600">
                With over 10 years of experience in personal training and wellness, 
                I'm dedicated to helping you achieve your fitness goals through 
                personalized programs and expert guidance.
              </p>
              <p className="text-lg text-gray-600">
                My approach combines proven fitness methodologies with a deep 
                understanding of individual needs, ensuring every client receives 
                the attention and support they deserve.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="h-96 w-80 rounded-lg bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">Professional Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Certifications & Expertise
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Continuously educated and certified to provide the highest quality training.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="wellness-card text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-fitness-secondary p-3 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-bold">NASM Certified</h3>
              <p className="text-sm text-gray-600">National Academy of Sports Medicine</p>
            </div>

            <div className="wellness-card text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-fitness-secondary p-3 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-bold">CPR/AED</h3>
              <p className="text-sm text-gray-600">Emergency Response Certified</p>
            </div>

            <div className="wellness-card text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-fitness-secondary p-3 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-bold">Nutrition Specialist</h3>
              <p className="text-sm text-gray-600">Certified Nutrition Coaching</p>
            </div>

            <div className="wellness-card text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-fitness-secondary p-3 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-bold">10+ Years</h3>
              <p className="text-sm text-gray-600">Professional Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              My Training Philosophy
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-3 text-xl font-bold text-fitness-primary">
                  Personalized Approach
                </h3>
                <p className="text-gray-600">
                  Every person is unique, and so should be their fitness journey. 
                  I create customized programs that fit your lifestyle and goals.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-fitness-primary">
                  Sustainable Results
                </h3>
                <p className="text-gray-600">
                  Quick fixes don't last. I focus on building healthy habits 
                  and sustainable practices that will serve you for life.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-fitness-primary">
                  Holistic Wellness
                </h3>
                <p className="text-gray-600">
                  True fitness encompasses more than just exercise. I consider 
                  nutrition, recovery, and mental health in every program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}