import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Coffee, 
  Sparkles, 
  Clock, 
  MapPin, 
  Award, 
  Flame, 
  Heart, 
  Check, 
  Star,
  Quote,
  Wheat,
  Calendar
} from 'lucide-react';
import menuData from '../data/menuData.json';
import ItemCard from '../components/menu/ItemCard';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80";

export const HomePage = () => {
  // Select signature items to display on the home page
  const signatureItems = menuData.filter((item) => item.isChefSpecial).slice(0, 4);

  const categories = [
    {
      name: 'Coffee',
      title: 'Specialty Coffee',
      tagline: 'Single-estate pour-overs & precision espresso',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Bakery',
      title: 'Wild Sourdough & Viennoiserie',
      tagline: '36-hour wild leavening & French cultured butter',
      image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Breakfast',
      title: 'All-Day Brunch',
      tagline: 'Farm poached eggs, sourdough tartines & shakshuka',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Desserts',
      title: 'Decadent Sweets',
      tagline: 'Burnt Basque cheesecake & Valrhona dark chocolate tarts',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const testimonials = [
    {
      quote: "The 36-hour country sourdough is a religious experience — that blistered mahogany crust and custardy crumb is unmatched anywhere in the city.",
      author: "Radhika Mehra",
      role: "Culinary Editor, The Urban Epicure",
      rating: 5,
    },
    {
      quote: "Jeff's Roast & Rise does what few cafes dare: they roast their own micro-lot Arabicas and balance them with exquisite French laminated pastries.",
      author: "Aditya Roy",
      role: "Specialty Coffee Judge & Barista Guild",
      rating: 5,
    },
    {
      quote: "My morning ritual for two years now. The brown butter oat latte and a warm cardamom knot by the sunlit bay window is pure sanctuary.",
      author: "Simran Kapoor",
      role: "Architect & Regular",
      rating: 5,
    },
  ];

  const galleryStrip = [
    {
      url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
      alt: 'Artisan Coffee Roasting Bar',
      caption: 'Single Origin Roastery',
    },
    {
      url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
      alt: 'Freshly Baked Croissants',
      caption: 'Gossamer Lamination',
    },
    {
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
      alt: 'Sunlit Cafe Table',
      caption: 'The Sunlit Hearth',
    },
    {
      url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
      alt: 'Barista pouring latte art',
      caption: 'Handcrafted Pour',
    },
    {
      url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      alt: 'Twisted Brioche Knots',
      caption: 'Fresh Out of Hearth',
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      
      {/* Hero Section */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-espresso-950 text-cream-50 overflow-hidden pt-20 pb-16 sm:pb-24">
        {/* Background Image with warm grading */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85"
            alt="Jeff's Roast & Rise Roastery Interior"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Dark gradient overlay about rgba(25,15,10,0.65) to 0.35 */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(25,15,10,0.75) 0%, rgba(25,15,10,0.65) 45%, rgba(25,15,10,0.45) 85%, rgba(25,15,10,0.35) 100%)'
            }}
          />
          <div className="absolute inset-0 z-10 bg-[rgba(25,15,10,0.35)] mix-blend-multiply pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-16">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-espresso-950/85 backdrop-blur-md border border-caramel-400/40 text-cream-50 text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-md">
            <Wheat className="w-4 h-4 text-caramel-400" />
            <span>Wild Ferment &amp; Single-Estate Hearth</span>
            <span className="w-1.5 h-1.5 rounded-full bg-caramel-400"></span>
            <span className="text-caramel-300">Bengaluru</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Slow Mornings. <br />
            <span className="font-serif italic font-normal text-caramel-300">
              Wild Sourdough.
            </span> <br />
            Honest Roasts.
          </h1>

          {/* Tagline / Subtitle: pure cream/white with a slight text shadow */}
          <p className="text-base sm:text-lg md:text-xl text-[#FFFDF9] max-w-2xl mx-auto font-sans font-normal leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Every loaf fermented over thirty-six quiet hours with heirloom wild yeast. 
            Every cup slowly hand-dripped from Chikmagalur high-altitude estates. 
            Welcome to your neighborhood haven.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-caramel-500 hover:bg-caramel-600 active:bg-caramel-700 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-warm-lg hover:shadow-warm-xl hover:-translate-y-0.5"
            >
              <span>Explore Artisanal Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/reservations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-espresso-900/60 hover:bg-espresso-900/85 backdrop-blur-md border border-white/30 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-caramel-400" />
              <span>Reserve a Table</span>
            </Link>
          </div>

          {/* Opening Hours & Address Info Strip */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-cream-100 font-medium">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-espresso-900/70 border border-white/20 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sage-400 animate-ping"></span>
              <span>Open Today: <strong>7:30 AM – 10:00 PM</strong></span>
            </div>
            <span className="hidden sm:inline text-cream-400/50">•</span>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-espresso-900/70 border border-white/20 backdrop-blur-sm shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-caramel-300" />
              <span>14 Heritage Lane, Indiranagar</span>
            </div>
          </div>

          {/* Editorial Scroll indicator: placed below with comfortable spacing, hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center justify-center gap-2 pt-6 sm:pt-10 text-cream-300/80 text-[11px] tracking-widest uppercase select-none">
            <span>Scroll to Discover</span>
            <div className="w-px h-7 bg-gradient-to-b from-caramel-400 to-transparent animate-pulse" />
          </div>

        </div>
      </section>

      {/* Floating Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-cream-50 border border-cream-200 shadow-warm-lg">
          
          <div className="text-center sm:text-left space-y-1 p-2">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900 block">
              36h
            </span>
            <span className="text-xs font-semibold text-caramel-600 uppercase tracking-wider block">
              Wild Fermentation
            </span>
            <p className="text-xs text-espresso-500">Heirloom starter leavened slowly for gut-health &amp; rich crust.</p>
          </div>

          <div className="text-center sm:text-left space-y-1 p-2 border-l border-cream-200">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900 block">
              1,450m
            </span>
            <span className="text-xs font-semibold text-caramel-600 uppercase tracking-wider block">
              High-Altitude Coffee
            </span>
            <p className="text-xs text-espresso-500">Directly sourced micro-lots from Chikmagalur estates.</p>
          </div>

          <div className="text-center sm:text-left space-y-1 p-2 border-l border-cream-200">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900 block">
              84%
            </span>
            <span className="text-xs font-semibold text-caramel-600 uppercase tracking-wider block">
              AOP Cultured Butter
            </span>
            <p className="text-xs text-espresso-500">Traditional French lamination for 72 gossamer pastry layers.</p>
          </div>

          <div className="text-center sm:text-left space-y-1 p-2 border-l border-cream-200">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900 block">
              4.9★
            </span>
            <span className="text-xs font-semibold text-caramel-600 uppercase tracking-wider block">
              Beloved Neighborhood
            </span>
            <p className="text-xs text-espresso-500">Over 1,200 honest local reviews celebrating mindful bakes.</p>
          </div>

        </div>
      </section>

      {/* Our Story Teaser: Editorial Asymmetric Layout with Overlapping Image Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Overlapping Image Cards (Col 1-6) */}
          <div className="lg:col-span-6 relative pb-12 sm:pb-16 pr-4 sm:pr-8">
            {/* Main Primary Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-warm-xl border border-cream-200">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
                alt="Baker handling rustic sourdough bread"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Secondary Card */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 w-3/5 aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-cream-100 hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80"
                alt="Pour over coffee dripping in glass decanter"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stamp Badge */}
            <div className="absolute top-6 -left-4 sm:top-10 sm:-left-6 bg-sage-500 text-cream-50 p-4 rounded-2xl shadow-warm-lg transform -rotate-6">
              <div className="text-center font-serif">
                <span className="block text-xs uppercase tracking-widest font-sans font-semibold">Since</span>
                <span className="text-2xl font-bold">2021</span>
                <span className="block text-[10px] uppercase tracking-wider font-sans opacity-80">Wild Hearth</span>
              </div>
            </div>
          </div>

          {/* Story Text (Col 7-12) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <div className="inline-flex items-center gap-2">
              <span className="editorial-badge bg-caramel-100 text-caramel-600 border border-caramel-300">
                Our Manifesto
              </span>
              <span className="text-xs uppercase tracking-widest text-espresso-500 font-semibold">
                Mindful Craft
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900 leading-tight">
              We started with a wild starter and an ancient roaster.
            </h2>

            <p className="text-base sm:text-lg text-espresso-700 leading-relaxed font-sans">
              At Jeff's Roast &amp; Rise, we reject the rush. True bread takes three days of unhurried fermentation. 
              True coffee demands understanding the soil, rainfall, and farmer's touch behind every bean.
            </p>

            <p className="text-sm sm:text-base text-espresso-600 leading-relaxed">
              We bake our crusty country loaves in stone-deck hearths at 5:00 AM every single morning. 
              Our small-batch roastery operates right beside the sunlit dining room — so when you step in, 
              you breathe toasted malt, blooming filter coffee, and caramelized brown butter.
            </p>

            {/* Quote pill */}
            <div className="p-5 rounded-2xl bg-cream-100 border-l-4 border-caramel-500 text-espresso-800 space-y-2">
              <p className="font-serif italic text-base">
                "We don't make fast food; we make food worth waiting for. Every morning is a chance to nourish."
              </p>
              <div className="text-xs font-semibold uppercase tracking-wider text-caramel-600">
                — JEFFYNA SHARON, Head &amp; Founder
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-espresso-900 font-semibold text-sm hover:text-caramel-600 transition-colors group"
              >
                <span>Read our full grain-to-cup story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-caramel-500" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Signature Items Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="editorial-badge bg-sage-100 text-sage-700 border border-sage-300 mb-2">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900">
              The Hearth's Signature Delights
            </h2>
            <p className="text-sm sm:text-base text-espresso-600 mt-2 max-w-xl">
              Hand-selected daily bakes and signature brews that define the soul of Brew &amp; Crumb.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-espresso-800 hover:bg-espresso-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition-colors shadow-warm-sm self-start md:self-auto"
          >
            <span>View Full Menu (30+ Items)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Signature Item Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Menu Highlights Category Grid */}
      <section className="bg-cream-200/60 py-20 border-y border-cream-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="editorial-badge bg-caramel-100 text-caramel-600 border border-caramel-300">
              Artisanal Categories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900">
              Crafted Across Five Chapters
            </h2>
            <p className="text-sm text-espresso-600">
              From dawn pour-overs to evening decadent Basque cheesecakes, discover what our ovens and grinders are producing right now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/menu?category=${cat.name}`}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-warm-md hover:shadow-warm-xl transition-all duration-500 hover:-translate-y-1.5"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Bottom-to-top dark gradient overlay */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(18,10,6,0.95) 0%, rgba(18,10,6,0.78) 42%, rgba(18,10,6,0.3) 75%, transparent 100%)'
                  }}
                />
                
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-cream-50 space-y-2 pointer-events-none">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-caramel-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    Chapter
                  </span>
                  <h3 className="font-serif text-2xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] group-hover:text-caramel-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#FAF6F0] line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] font-normal">
                    {cat.tagline}
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-caramel-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                    <span>Explore items</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Guest Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="editorial-badge bg-sage-100 text-sage-700 border border-sage-300">
            Voices of the Table
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900">
            What Our Patrons Say
          </h2>
          <p className="text-sm text-espresso-600">
            Words from critics, neighbors, and morning regulars who share our love for slow craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-cream-200 shadow-warm-sm hover:shadow-warm-md transition-shadow relative flex flex-col justify-between space-y-6"
            >
              <Quote className="w-10 h-10 text-caramel-200" />
              <p className="text-espresso-700 text-sm leading-relaxed font-sans italic">
                "{t.quote}"
              </p>

              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-espresso-900">
                    {t.author}
                  </h4>
                  <p className="text-xs text-espresso-500">{t.role}</p>
                </div>
                <div className="flex items-center gap-0.5 text-caramel-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-caramel-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="overflow-hidden space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <span className="editorial-badge bg-caramel-100 text-caramel-600 border border-caramel-300 mb-1">
              Visual Chronicles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-900">
              Moments from the Hearth
            </h3>
          </div>
          <Link
            to="/gallery"
            className="text-xs font-semibold uppercase tracking-wider text-caramel-600 hover:text-caramel-700 flex items-center gap-1 group"
          >
            <span>Full Gallery Lightbox</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Horizontal photo strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 px-4 sm:px-6">
          {galleryStrip.map((photo, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-cream-200 shadow-warm-sm"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-serif text-white font-medium">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Opening Hours + Map Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-espresso-900 text-cream-50 rounded-3xl overflow-hidden border border-espresso-800 shadow-warm-xl grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="editorial-badge bg-caramel-500/20 text-caramel-300 border border-caramel-400/30">
                Join Us in Person
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight">
                Warm tables await you every single day.
              </h2>
              <p className="text-sm sm:text-base text-cream-300/80 max-w-lg leading-relaxed">
                Whether you come to finish a book with an Ethiopian single-origin or gather your family for Sunday sourdough brunch, our hearth is open.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-espresso-700/60">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-caramel-400 text-xs font-semibold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Opening Hours</span>
                </div>
                <p className="text-sm font-serif font-bold text-cream-100">
                  Monday – Sunday
                </p>
                <p className="text-xs text-cream-300/80">
                  7:30 AM – 10:00 PM (Kitchen closes at 9:30 PM)
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-caramel-400 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </div>
                <p className="text-sm font-serif font-bold text-cream-100">
                  Indiranagar Heritage Quarter
                </p>
                <p className="text-xs text-cream-300/80">
                  14 Heritage Lane, 12th Main, Bengaluru 560038
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/reservations"
                className="px-6 py-3 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-warm-sm"
              >
                Book a Table Now
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-espresso-800 hover:bg-espresso-700 text-cream-200 border border-espresso-700 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Directions &amp; Contact
              </Link>
            </div>
          </div>

          {/* Map Preview Graphic */}
          <div className="lg:col-span-5 relative min-h-[300px] bg-espresso-800 overflow-hidden">
            <iframe
              title="Jeff's Roast & Rise Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.87979601362!2d77.63223049514785!3d12.973826279165689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a70c538cb3%3A0x633345863267b2d5!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[320px] border-0 filter contrast-125 opacity-85"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;

