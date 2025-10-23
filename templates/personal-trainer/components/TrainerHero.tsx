import { Button } from "@/components/ui/button";
import heroContent from "../content/hero-content.json";

export default function TrainerHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-fitness-primary via-fitness-secondary to-fitness-accent flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 fluid-container py-fluid-2xl px-[4.5vw]">
        <div className="grid grid-cols-4 items-center gap-fluid-lg md:grid-cols-12 lg:grid-cols-16">
          {/* Hero Content */}
          <div className="col-span-4 text-white md:col-span-8 lg:col-span-10">
            <h1 className="text-fluid-hero font-bold leading-tight mb-fluid-lg">
              {heroContent.headline}
            </h1>
            <p className="text-fluid-subtitle mb-fluid-xl text-white/90 leading-relaxed max-w-fluid-lg">
              {heroContent.subheading}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col gap-fluid-md mb-fluid-xl sm:flex-row">
              <Button 
                size="lg" 
                variant={heroContent.ctaPrimary.variant as "fitness"}
                asChild
                className="fluid-button text-fluid-large"
              >
                <a href={heroContent.ctaPrimary.href}>
                  {heroContent.ctaPrimary.text}
                </a>
              </Button>
              <Button 
                size="lg" 
                variant={heroContent.ctaSecondary.variant as "fitness-outline"}
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
              <p className="text-fluid-small text-white/70 mb-fluid-sm">Certifications:</p>
              <div className="flex flex-wrap gap-fluid-sm">
                {heroContent.trustSignals.map((signal, index) => (
                  <span 
                    key={index}
                    className="text-fluid-small bg-white/10 px-fluid-sm py-fluid-xs rounded-full backdrop-blur-sm"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <div className="fluid-card bg-white/10 backdrop-blur-md border-white/20">
              <h3 className="text-white text-fluid-title font-semibold mb-fluid-lg">Proven Results</h3>
              <div className="grid grid-cols-1 gap-fluid-lg">
                {heroContent.heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-fluid-display font-bold text-white mb-fluid-xs">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-fluid-small">
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