import { Button } from "@/components/ui/button";
import heroContent from "../content/hero-content.json";

export default function TherapistHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center">
      {/* Content */}
      <div className="relative z-10 fluid-container py-fluid-2xl px-[4.5vw]">
        <div className="grid grid-cols-4 items-center gap-fluid-lg md:grid-cols-12 lg:grid-cols-16">
          {/* Hero Content */}
          <div className="col-span-4 text-gray-900 md:col-span-8 lg:col-span-10">
            <h1 className="text-fluid-hero font-bold leading-tight mb-fluid-lg text-gray-900">
              {heroContent.headline}
            </h1>
            <p className="text-fluid-subtitle mb-fluid-xl text-gray-700 leading-relaxed max-w-fluid-lg">
              {heroContent.subheading}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col gap-fluid-md mb-fluid-xl sm:flex-row">
              <Button 
                size="lg" 
                variant={heroContent.ctaPrimary.variant as "default"}
                asChild
                className="fluid-button text-fluid-large"
              >
                <a href={heroContent.ctaPrimary.href}>
                  {heroContent.ctaPrimary.text}
                </a>
              </Button>
              <Button 
                size="lg" 
                variant={heroContent.ctaSecondary.variant as "outline"}
                asChild
                className="fluid-button text-fluid-large"
              >
                <a href={heroContent.ctaSecondary.href}>
                  {heroContent.ctaSecondary.text}
                </a>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mb-fluid-lg">
              <p className="text-fluid-small text-gray-600 mb-fluid-sm">Professional Credentials:</p>
              <div className="flex flex-wrap gap-fluid-sm">
                {heroContent.trustSignals.map((signal, index) => (
                  <span 
                    key={index}
                    className="text-fluid-small bg-blue-100 text-blue-800 px-fluid-sm py-fluid-xs rounded-full"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <div className="fluid-card bg-white shadow-lg border-gray-200">
              <h3 className="text-gray-900 text-fluid-title font-semibold mb-fluid-lg">Experience & Results</h3>
              <div className="grid grid-cols-1 gap-fluid-lg">
                {heroContent.heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-fluid-display font-bold text-blue-600 mb-fluid-xs">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-fluid-small">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}