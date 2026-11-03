import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Coffee
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ContactPage = () => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      showToast('Please provide your name', 'error');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      showToast('Please provide a valid email address', 'error');
      return;
    }
    if (!formData.message.trim()) {
      showToast('Please include your message', 'error');
      return;
    }

    setIsSubmitted(true);
    showToast('Your note has reached our front desk. We will write back soon.', 'success');
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="editorial-badge bg-caramel-100 text-caramel-600 border border-caramel-300">
          Find &amp; Connect
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-espresso-900 tracking-tight">
          Say Hello to the Hearth
        </h1>
        <p className="text-sm sm:text-base text-espresso-600 max-w-xl mx-auto font-sans">
          Whether you have an event proposal, whole-bean retail wholesale inquiry, or simply want to ask about our sourdough fermentation schedule, we would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Info Column (Col 1-5) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-espresso-900 text-cream-50 p-8 sm:p-10 rounded-3xl space-y-8 shadow-warm-lg border border-espresso-800">
            <div>
              <span className="editorial-badge bg-caramel-500/20 text-caramel-300 border border-caramel-400/30 mb-2">
                The Sanctuary
              </span>
              <h3 className="font-serif text-2xl font-bold">Jeff's Roast &amp; Rise Roasters</h3>
              <p className="text-xs text-cream-300/80 mt-1">
                Heritage Villa &amp; Courtyard Garden
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-espresso-800 flex items-center justify-center text-caramel-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-cream-100">Our Address</h4>
                  <p className="text-cream-300/80 text-xs leading-relaxed mt-0.5">
                    14 Heritage Lane, 12th Main Road, Indiranagar, Bengaluru, Karnataka 560038
                  </p>
                  <p className="text-[11px] text-caramel-400 mt-1">
                    (Valet parking available for weekend brunches)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-espresso-800 flex items-center justify-center text-caramel-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-cream-100">Opening Hours</h4>
                  <p className="text-cream-300/80 text-xs leading-relaxed mt-0.5">
                    Monday to Sunday: 7:30 AM – 10:00 PM
                  </p>
                  <p className="text-[11px] text-sage-300 mt-1">
                    Fresh bread pulled from the hearth daily at 7:00 AM &amp; 3:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-espresso-800 flex items-center justify-center text-caramel-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-cream-100">Telephone &amp; WhatsApp</h4>
                  <p className="text-cream-300/80 text-xs leading-relaxed mt-0.5">
                    +91 98450 82910 / +91 80 4123 9081
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-espresso-800 flex items-center justify-center text-caramel-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-cream-100">Email Dispatch</h4>
                  <p className="text-cream-300/80 text-xs leading-relaxed mt-0.5">
                    hello@jeffsroastandrise.com / wholesale@jeffsroastandrise.com
                  </p>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="pt-4 border-t border-espresso-800 flex gap-3">
              <a
                href="https://wa.me/919845082910"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-caramel-500 hover:bg-caramel-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Form Column (Col 6-12) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-cream-200 shadow-warm-md">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-espresso-900">
                Message Received!
              </h3>
              <p className="text-sm text-espresso-600 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Your note has been delivered to our management team. We usually reply within a single business day.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: 'General Inquiry',
                    message: '',
                  });
                }}
                className="px-6 py-2.5 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-warm-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-cream-200 pb-4">
                <h3 className="font-serif text-2xl font-bold text-espresso-900">
                  Send a Direct Note
                </h3>
                <p className="text-xs text-espresso-500 mt-1">
                  We read and answer every sincere dispatch personally.
                </p>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Rao"
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ananya@example.com"
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>
              </div>

              {/* Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Subject of Inquiry *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500 font-medium"
                  >
                    <option value="General Inquiry">General Cafe Inquiry</option>
                    <option value="Event or Private Gathering">Event or Private Gathering</option>
                    <option value="Whole Bean Wholesale">Whole-Bean Wholesale / Supply</option>
                    <option value="Press or Collaboration">Press &amp; Editorial</option>
                    <option value="Careers at Hearth">Careers &amp; Apprenticeships</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what is on your mind..."
                  className="w-full text-xs p-4 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-sm uppercase tracking-wider transition-all shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Embedded Google Map Section */}
      <div className="bg-cream-50 rounded-3xl overflow-hidden border border-cream-200 shadow-warm-md">
        <div className="p-6 border-b border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-espresso-900">
              Interactive Map &amp; Directions
            </h3>
            <p className="text-xs text-espresso-600">
              Easily accessible off 12th Main Indiranagar, nestled in a quiet leafy side lane.
            </p>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-cream-300 text-xs font-semibold text-espresso-800 hover:bg-cream-100 transition-colors shadow-sm self-start sm:self-auto"
          >
            <MapPin className="w-4 h-4 text-caramel-500" />
            <span>Open in Google Maps App</span>
          </a>
        </div>
        
        <div className="w-full h-96 bg-cream-200">
          <iframe
            title="Jeff's Roast & Rise Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.87979601362!2d77.63223049514785!3d12.973826279165689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a70c538cb3%3A0x633345863267b2d5!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 filter contrast-105"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
