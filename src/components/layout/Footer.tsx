import Link from "next/link";
import LogoMark from "@/components/common/LogoMark";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="grid-container py-12">
        <div className="grid grid-cols-4 gap-8 md:grid-cols-12 xl:grid-cols-16">
          
          {/* Brand Section */}
          <div className="col-span-4 md:col-span-6 xl:col-span-7">
            <div className="mb-4">
              <LogoMark className="h-16 w-16 text-white" title="Hey Oko Fitness" />
            </div>
            <p className="mb-4 text-gray-300 font-normal">
              Transform your fitness journey with professional personal training 
              and wellness services. Expert guidance for lasting results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-2 md:col-span-2 xl:col-span-3">
            <h4 className="mb-4 footer-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white font-normal hover:text-fitness-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white font-normal hover:text-fitness-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white font-normal hover:text-fitness-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-normal hover:text-fitness-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-2 md:col-span-2 xl:col-span-3">
            <h4 className="mb-4 footer-heading">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white font-normal hover:text-fitness-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-normal hover:text-fitness-primary">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-normal hover:text-fitness-primary">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-2 xl:col-span-3">
            <h4 className="mb-4 footer-heading">Contact</h4>
            <ul className="space-y-2 text-white font-normal">
              <li>
                <a href="tel:+15551234567" className="text-white font-normal hover:text-fitness-primary">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@heyokofitness.com" className="text-white font-normal hover:text-fitness-primary">
                  info@heyokofitness.com
                </a>
              </li>
              <li className="font-normal">Your City, Your State</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-4 gap-8 md:grid-cols-12 xl:grid-cols-16">
            <div className="col-span-4 md:col-span-12 xl:col-span-16">
              <p className="text-gray-400 font-normal">&copy; 2024 Hey Oko Fitness. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}