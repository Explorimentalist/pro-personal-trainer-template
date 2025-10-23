import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact - Hey Oko Fitness | Book Your Consultation",
  description: "Get in touch to start your fitness journey. Contact us for personal training, group sessions, or wellness consultations. Located in [Your City].",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Get Started
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Ready to transform your fitness journey? Contact us today to schedule your consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-12 md:grid-cols-12 lg:grid-cols-16">
            
            {/* Contact Form */}
            <div className="wellness-card border-0 !shadow-none hover:!shadow-none col-span-4 md:col-span-12 lg:col-span-8 lg:col-start-9 lg:order-2 lg:row-start-1">
              <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-normal text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full h-input-md border-b border-gray-300 px-3 focus:border-b-fitness-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-normal text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full h-input-md border-b border-gray-300 px-3 focus:border-b-fitness-primary focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-normal text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full h-input-md border-b border-gray-300 px-3 focus:border-b-fitness-primary focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-normal text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full h-input-md border-b border-gray-300 px-3 focus:border-b-fitness-primary focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-normal text-gray-700">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full h-input-md border-b border-gray-300 px-3 focus:border-b-fitness-primary focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="group-training">Group Training</option>
                    <option value="nutrition-coaching">Nutrition Coaching</option>
                    <option value="wellness-therapy">Wellness Therapy</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="goals" className="mb-2 block text-sm font-normal text-gray-700">
                    Fitness Goals & Message
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    placeholder="Tell us about your fitness goals and what you're looking to achieve..."
                    className="w-full rounded-sm border border-gray-300 px-3 py-2 focus:border-fitness-primary focus:outline-none"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  variant="fitness"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Hours + Map (left column on desktop) */}
            <div className="space-y-8 col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-1 lg:order-1 lg:row-start-1">
              
              {/* Business Hours */}
              <div className="wellness-card border-0 !shadow-none hover:!shadow-none">
                <h3 className="mb-4 text-xl font-bold">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-normal">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-normal">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-normal">8:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-orange-50 p-3">
                  <p className="text-sm text-orange-800">
                    <strong>Flexible scheduling available!</strong> Contact us to discuss times that work best for you.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="wellness-card border-0 !shadow-none hover:!shadow-none">
                <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-full bg-fitness-primary p-2 text-white">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-normal">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-3 rounded-full bg-fitness-primary p-2 text-white">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-normal">Email</p>
                      <p className="text-gray-600">info@heyokofitness.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-3 rounded-full bg-fitness-primary p-2 text-white">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-normal">Location</p>
                      <p className="text-gray-600">Your City, Your State</p>
                      <p className="text-sm text-gray-500">In-home & online sessions available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Module */}
              <div className="wellness-card border-0 !shadow-none hover:!shadow-none">
                <h3 className="mb-4 text-xl font-bold">Location & Map</h3>
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    title="Hey Oko Fitness Location Map"
                    src="https://www.google.com/maps?q=Your%20City%2C%20Your%20State&output=embed"
                    className="h-64 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Interactive map showing the fitness studio location"
                  />
                </div>
                <address className="mt-4 not-italic text-gray-600">
                  <p className="font-normal">123 Fitness Ave</p>
                  <p className="font-normal">Your City, Your State</p>
                  <p className="text-sm text-gray-500">Street parking available</p>
                </address>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
