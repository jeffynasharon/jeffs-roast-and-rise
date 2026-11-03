import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Coffee,
  Heart
} from 'lucide-react';
import Logo from './Logo';
import { useToast } from '../../context/ToastContext';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setIsSubscribed(true);
    showToast('Welcome to The Morning Dispatch! Look out for our weekend bakes.', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-espresso-900 text-cream-100 pt-16 pb-12 border-t border-espresso-700/60 selection:bg-caramel-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 pb-16 border-b border-espresso-700/50">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" size="lg" showTagline={true} />
            <p className="text-cream-300/80 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              An independent sanctuary dedicated to slow-fermented wild sourdough, ethical single-origin coffee roasts, and unhurried conversation. Handcrafted daily since 2021.
            </p>
            
            {/* Hours summary badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-espresso-800/80 border border-caramel-500/30 text-xs text-cream-200">
              <Clock className="w-4 h-4 text-caramel-400 shrink-0" />
              <span>Monday – Sunday: <strong>7:30 AM – 10:00 PM</strong></span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-espresso-800 flex items-center justify-center text-cream-300 hover:text-caramel-400 hover:bg-espresso-700 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Maps Location"
                className="w-10 h-10 rounded-full bg-espresso-800 flex items-center justify-center text-cream-300 hover:text-caramel-400 hover:bg-espresso-700 transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@jeffsroastandrise.com"
                aria-label="Send email"
                className="w-10 h-10 rounded-full bg-espresso-800 flex items-center justify-center text-cream-300 hover:text-caramel-400 hover:bg-espresso-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-cream-50 tracking-wide">
              The Hearth
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-300/80">
              <li>
                <Link to="/" className="hover:text-caramel-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-caramel-400 transition-colors">
                  Artisanal Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-caramel-400 transition-colors">
                  Our Story &amp; Craft
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-caramel-400 transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-caramel-400 transition-colors">
                  Book a Table
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-caramel-400 transition-colors">
                  Find Us &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit & Contact (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-cream-50 tracking-wide">
              Visit Us
            </h4>
            <div className="space-y-3.5 text-sm text-cream-300/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-caramel-400 shrink-0 mt-1" />
                <span className="leading-snug">14 Heritage Lane, 12th Main, Indiranagar, Bengaluru, 560038</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-caramel-400 shrink-0" />
                <span>+91 98450 82910</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-caramel-400 shrink-0 mt-0.5" />
                <a 
                  href="mailto:hello@jeffsroastandrise.com"
                  className="hover:text-caramel-400 transition-colors break-all [overflow-wrap:anywhere] leading-snug"
                >
                  hello@jeffsroastandrise.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Column (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-cream-50 tracking-wide">
              The Morning Dispatch
            </h4>
            <p className="text-xs text-cream-300/80 leading-relaxed">
              Receive secret weekend bake drops, roaster cupping schedules, and seasonal tasting invitations.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  className="w-full bg-espresso-800 text-cream-100 placeholder:text-cream-400/50 text-xs rounded-xl px-4 py-3 border border-espresso-600 focus:outline-none focus:border-caramel-400 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-caramel-500 hover:bg-caramel-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-warm-sm"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            {isSubscribed && (
              <p className="text-xs text-sage-300 flex items-center gap-1.5 mt-3.5 sm:mt-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Thank you for joining our morning circle.</span>
              </p>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400/70">
          <p>© {new Date().getFullYear()} Jeff's Roast &amp; Rise Roasters Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Specialty Grade Arabica</span>
            <span className="w-1 h-1 rounded-full bg-caramel-500"></span>
            <span>Wild Fermented Bakes</span>
            <span className="w-1 h-1 rounded-full bg-caramel-500"></span>
            <span>Zero Preservatives</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
