import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Send, 
  CheckCircle2, 
  Mail, 
  Sparkles, 
  Info,
  MapPin,
  Coffee
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ReservationsPage = () => {
  const { showToast } = useToast();

  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '10:00',
    guests: '2',
    seatingArea: 'The Sunlit Courtyard',
    occasion: 'Casual Brunch',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const seatingOptions = [
    {
      name: 'The Sunlit Courtyard',
      desc: 'Bappled daylight under the frangipani branches with cool natural breezes.',
      icon: '🌿',
    },
    {
      name: 'Library & Brick Hearth',
      desc: 'Intimate leather chairs surrounded by art books and the smell of oak timber.',
      icon: '📚',
    },
    {
      name: 'Roaster Bar Counters',
      desc: 'Front-row seats to our 1984 drum roaster and barista pour-over rituals.',
      icon: '☕',
    },
    {
      name: 'The Quiet Upper Loft',
      desc: 'Ideal for quiet work sessions, intimate meetings, or quiet conversation.',
      icon: '✨',
    },
  ];

  const times = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:30 PM', '01:30 PM', '03:30 PM', '04:30 PM', 
    '06:00 PM', '07:30 PM', '08:30 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!booking.name.trim()) {
      showToast('Please enter your full name', 'error');
      return;
    }
    if (!booking.phone.trim() || booking.phone.length < 10) {
      showToast('Please enter a valid contact phone number', 'error');
      return;
    }

    // Build WhatsApp message
    let msg = `✨ *TABLE RESERVATION REQUEST — Jeff's Roast & Rise* ✨\n`;
    msg += `-------------------------------------------\n`;
    msg += `*Guest Name:* ${booking.name}\n`;
    msg += `*Phone:* ${booking.phone}\n`;
    if (booking.email) msg += `*Email:* ${booking.email}\n`;
    msg += `*Date:* ${booking.date}\n`;
    msg += `*Time Slot:* ${booking.time}\n`;
    msg += `*Party Size:* ${booking.guests} Guests\n`;
    msg += `*Seating Preference:* ${booking.seatingArea}\n`;
    msg += `*Occasion:* ${booking.occasion}\n`;
    if (booking.specialRequests) {
      msg += `*Special Requests:* ${booking.specialRequests}\n`;
    }
    msg += `-------------------------------------------\n`;
    msg += `_Sent via Jeff's Roast & Rise Web App_`;

    const cafePhone = '919845082910';
    const waUrl = `https://wa.me/${cafePhone}?text=${encodeURIComponent(msg)}`;

    window.open(waUrl, '_blank');
    setIsSubmitted(true);
    showToast('Reservation request prepared for WhatsApp dispatch!', 'success');
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="editorial-badge bg-caramel-100 text-caramel-600 border border-caramel-300">
          Table Reservations
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-espresso-900 tracking-tight">
          Reserve Your Table by the Hearth
        </h1>
        <p className="text-sm sm:text-base text-espresso-600 max-w-xl mx-auto font-sans">
          We keep half of our seating open for spontaneous walk-ins, and reserve the rest for intimate gatherings, slow weekend brunches, and celebratory mornings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form (Col 1-7) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-cream-200 shadow-warm-md">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-espresso-900">
                Reservation Request Prepared!
              </h3>
              <p className="text-sm text-espresso-600 max-w-md mx-auto leading-relaxed">
                WhatsApp was opened with your booking summary. Our concierge team responds within 15 minutes to confirm table availability.
              </p>

              <div className="bg-cream-100 p-6 rounded-2xl text-left border border-cream-200 text-xs text-espresso-700 space-y-2 max-w-md mx-auto">
                <p><strong>Name:</strong> {booking.name}</p>
                <p><strong>Date &amp; Time:</strong> {booking.date} at {booking.time}</p>
                <p><strong>Party:</strong> {booking.guests} Guests ({booking.seatingArea})</p>
                <p><strong>Occasion:</strong> {booking.occasion}</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-cream-300 text-espresso-800 hover:bg-cream-100 text-xs font-semibold uppercase tracking-wider"
                >
                  Make Another Reservation
                </button>
                <a
                  href={`mailto:reservations@jeffsroastandrise.com?subject=Booking Inquiry for ${booking.name}&body=Date: ${booking.date}, Time: ${booking.time}, Guests: ${booking.guests}`}
                  className="px-6 py-2.5 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email instead</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-cream-200 pb-4">
                <h3 className="font-serif text-2xl font-bold text-espresso-900">
                  Guest &amp; Table Details
                </h3>
                <p className="text-xs text-espresso-500 mt-1">
                  Please let us know your preferred day and party requirements.
                </p>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    placeholder="e.g. Maya Krishnan"
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>
              </div>

              {/* Email & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={booking.email}
                    onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                    placeholder="maya@example.com"
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Number of Guests *
                  </label>
                  <select
                    value={booking.guests}
                    onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500 font-medium"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+ (Private Gathering)'].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest (Solo Coffee Session)' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Reservation Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={booking.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={booking.time}
                    onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500 font-medium"
                  >
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-2">
                  Seating Ambience Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seatingOptions.map((opt) => (
                    <div
                      key={opt.name}
                      onClick={() => setBooking({ ...booking, seatingArea: opt.name })}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        booking.seatingArea === opt.name
                          ? 'border-caramel-500 bg-caramel-100/60 shadow-sm'
                          : 'border-cream-300 bg-cream-50 hover:bg-cream-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{opt.icon}</span>
                        <h4 className="font-serif text-sm font-bold text-espresso-900">
                          {opt.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-espresso-600 mt-1 leading-snug">
                        {opt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Occasion & Requests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Occasion
                  </label>
                  <select
                    value={booking.occasion}
                    onChange={(e) => setBooking({ ...booking, occasion: e.target.value })}
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  >
                    <option value="Casual Brunch">Casual Morning / Brunch</option>
                    <option value="Birthday or Anniversary">Birthday / Anniversary</option>
                    <option value="Business Meeting">Coffee Meeting</option>
                    <option value="Reading & Work">Solo Reading &amp; Journaling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1.5">
                    Special Inquiries (High Chair, Flowers...)
                  </label>
                  <input
                    type="text"
                    value={booking.specialRequests}
                    onChange={(e) => setBooking({ ...booking, specialRequests: e.target.value })}
                    placeholder="e.g. Quiet corner, high chair needed"
                    className="w-full text-xs px-4 py-3 bg-cream-50 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-sm uppercase tracking-wider transition-all shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Request Booking via WhatsApp</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Policies & Experience (Col 8-12) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Editorial Card */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-espresso-900 text-cream-50 shadow-warm-lg">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
              alt="Sunlit cafe dining table"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80";
              }}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <span className="editorial-badge bg-caramel-500 text-white mb-2 self-start">
                The Sanctuary Experience
              </span>
              <h3 className="font-serif text-2xl font-bold leading-tight">
                Warm service, unhurried time.
              </h3>
              <p className="text-xs text-cream-200/80 mt-1 leading-relaxed">
                Tables are yours for 90 minutes during busy brunch hours, and as long as you desire during tranquil weekday afternoons.
              </p>
            </div>
          </div>

          {/* Guidelines Box */}
          <div className="bg-cream-100 p-6 sm:p-8 rounded-3xl border border-cream-200/90 space-y-4">
            <div className="flex items-center gap-2 text-espresso-900 font-serif font-bold text-lg">
              <Info className="w-5 h-5 text-caramel-500" />
              <span>Reservation Guidelines</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-espresso-700 leading-relaxed font-sans">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-caramel-500 shrink-0 mt-2"></span>
                <span><strong>15-Minute Grace Period:</strong> We hold reserved tables for 15 minutes past booking time before releasing to walk-ins.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-caramel-500 shrink-0 mt-2"></span>
                <span><strong>Walk-in Policy:</strong> 50% of our courtyard tables and roastery counter stools are always held open for spontaneous visitors.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-caramel-500 shrink-0 mt-2"></span>
                <span><strong>Large Gatherings:</strong> For parties larger than 8, we curate bespoke tasting flights and family-style sourdough spreads.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-cream-200 text-xs text-espresso-600">
              Need urgent assistance? Call our floor manager directly at <a href="tel:+919845082910" className="font-semibold text-caramel-600 underline">+91 98450 82910</a>.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ReservationsPage;

