/**
 * ServiceCard Component
 * 
 * A clean hero-like block for showcasing services with image support.
 * DOM order: heading → supporting text → product image → outline button
 * 
 * Props:
 * - title: string (default: "Professional training sessions")
 * - description: string (default: descriptive text about the service)
 * - imageSrc: string (required) - URL to the service image
 * - imageAlt: string (required) - Alt text for accessibility
 * - ctaLabel: string (default: "Learn more")
 * - ctaHref?: string - If provided, renders <a> tag; otherwise <button>
 * - onCtaClick?: () => void - Click handler for button variant
 * - className?: string - Additional classes for outer wrapper
 * 
 * Usage:
 * <ServiceCard 
 *   title="Personal training"
 *   description="One-on-one sessions tailored to your fitness goals."
 *   imageSrc="/images/personal-training.jpg"
 *   imageAlt="Personal trainer working with client"
 *   ctaHref="/services/personal-training"
 * />
 */

import React from 'react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title = "Professional training sessions",
  description = "Personalized fitness programs designed to help you achieve your health and wellness goals with expert guidance.",
  imageSrc,
  imageAlt,
  ctaLabel = "Learn more",
  ctaHref,
  onCtaClick,
  className = ""
}) => {
  const baseClasses = "font-sans";
  const stackClasses = "flex flex-col p-6 h-full w-full";
  
  const headingClasses = "text-xl md:text-2xl lg:text-3xl text-gray-900 text-left font-extralight";
  const descriptionClasses = "text-base text-zinc-400 text-left font-extralight";
  const imageWrapperClasses = "relative w-full";
  const imageClasses = "w-full aspect-square object-cover shadow-lg/40";
  const buttonWrapperClasses = "flex justify-start";

  return (
    <div 
      aria-labelledby="sc-title" 
      className={`${baseClasses} ${stackClasses} ${className}`.trim()}
    >
          <h5 
            id="sc-title" 
            className={`${headingClasses} mb-4`}
            style={{ letterSpacing: '0.035rem' }}
          >
            {title}
          </h5>
          
          <p 
            id="sc-desc" 
            className={`${descriptionClasses} mb-4`}
            style={{ letterSpacing: '0.035rem' }}
          >
            {description}
          </p>
          
          <div className="flex flex-col mt-auto">
            <figure className={`${imageWrapperClasses} mb-4`}>
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className={imageClasses}
              />
            </figure>
            
            <div className={buttonWrapperClasses}>
            {ctaHref ? (
              <Button
                variant="outline"
                size="default"
                asChild
                className="group rounded-full"
              >
                <a
                  href={ctaHref}
                  aria-describedby="sc-desc"
                >
                  {ctaLabel}
                </a>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="default"
                onClick={onCtaClick}
                aria-describedby="sc-desc"
                aria-label={`${ctaLabel} - ${description}`}
                className="group rounded-full"
              >
                {ctaLabel}
              </Button>
            )}
            </div>
          </div>
    </div>
  );
};

export default ServiceCard;