import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wheat, 
  Coffee, 
  Heart, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80";

export const AboutPage = () => {
  const team = [
    {
      name: 'JEFFYNA SHARON',
      role: 'Head & Founder',
      bio: 'Visionary behind Jeff\'s Roast & Rise. JEFFYNA SHARON oversees single-estate coffee curation, small-batch roasting profiles, and our mindful sourdough fermentation standards.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      badge: 'Head & Founder',
    },
    {
      name: 'Kabir Sen',
      role: 'Master Sourdough Baker',
      bio: 'Trained in French country hearths, Kabir tends our 100-year-old wild sourdough mother with obsessive care. He believes patience and wild bacteria make the finest medicine.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      badge: '36-Hour Hearth',
    },
    {
      name: 'Chloe Martin',
      role: 'Head Pastry Chef',
      bio: 'Former Parisian patissiere specializing in 72-layer laminated viennoiserie. Chloe ensures every pain au chocolat shatters with crisp butter flakes and deep Valrhona chocolate.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      badge: 'Viennoiserie Lead',
    },
  ];

  const values = [
    {
      icon: Clock,
      title: 'The Grace of Unhurried Time',
      description: 'We do not rush yeast, and we do not rush roasting profiles. Our dough ferments for 36 hours; our coffee degasses in controlled clay vessels. Speed is never a virtue here.',
    },
    {
      icon: Heart,
      title: 'Direct-Trade Estate Partnerships',
      description: 'We purchase whole harvest lots directly from smallholder farms in Chikmagalur and Coorg, paying 40% above fair-trade thresholds to ensure regenerative agricultural practices.',
    },
    {
      icon: ShieldCheck,
      title: 'Radical Ingredient Honesty',
      description: 'Zero dough conditioners, zero artificial flavorings, and zero commercial yeast in our rustic loaves. Only stoneground flour, pure mountain water, mineral salt, and wild leaven.',
    },
    {
      icon: Coffee,
      title: 'Community as Sanctuary',
      description: 'We designed Jeff\'s Roast & Rise as a peaceful haven where conversations linger, music remains gentle, and strangers share long oak tables over warm filter carafes.',
    },
  ];

  const milestones = [
    {
      year: '2021',
      title: 'The Garage & The Wild Starter',
      text: 'Began with an electric tabletop mill and a glass crock of wild sourdough starter nurtured during quiet mornings in Indiranagar.',
    },
    {
      year: '2022',
      title: 'The 1984 Cast-Iron Roaster',
      text: 'Acquired and painstakingly rebuilt an antique 5kg drum roaster, beginning our direct sourcing journey with estate farmers.',
    },
    {
      year: '2023',
      title: 'The Heritage Hearth Doors Open',
      text: 'Restored a sun-drenched colonial villa with high brick vaults, courtyard gardens, and a stone-deck bread oven.',
    },
    {
      year: 'Today',
      title: 'A Living Sanctuary for Craft',
      text: 'Over thirty items baked fresh before dawn, pouring over 400 artisanal cups daily for our beloved community.',
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-24 space-y-24 md:space-y-32">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="editorial-badge bg-caramel-100 text-caramel-600 border border-caramel-300">
              Our Origins &amp; Philosophy
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-espresso-900 leading-tight">
            We believe good bread and honest coffee heal the soul.
          </h1>

          <p className="text-lg sm:text-xl text-espresso-700 font-sans leading-relaxed">
            Jeff's Roast &amp; Rise was born out of a quiet rebellion against fast food convenience. 
            We are an independent boutique roastery and wild sourdough hearth founded on the belief that what takes time to make, gives time back to those who enjoy it.
          </p>
        </div>
      </section>

      {/* Editorial Large Photography Mosaic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-7 rounded-3xl overflow-hidden aspect-[16/10] bg-cream-200 shadow-warm-lg">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
              alt="Jeff's Roast & Rise Roastery Bar"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-5 rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto bg-cream-200 shadow-warm-lg">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
              alt="Baker dusting flour on proofed dough"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* The Story / The Manifesto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <span className="editorial-badge bg-sage-100 text-sage-700 border border-sage-300">
              The Manifesto
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900 leading-tight">
              From Grain to Hearth, Bean to Cup
            </h2>
            <p className="text-sm text-espresso-600 leading-relaxed">
              Why do we wake at 4:30 AM every morning to check ambient humidity and roast profiles? Because perfection lives in the nuances.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-8 text-espresso-700 text-base sm:text-lg leading-relaxed font-sans">
            <p>
              In an age of instant coffee pods and commercial bread made in sixty minutes with artificial dough relaxers, something vital was lost: the deep, caramel sweetness that only thirty-six hours of wild lactic acid fermentation can unlock.
            </p>
            <p>
              When JEFFYNA SHARON established the hearth, the goal was to unite ancient wild fermentation with estate-level coffee stewardship. JEFFYNA SHARON traveled directly to the misty hills of Chikmagalur, selecting single-estate Arabicas nurtured under silver oaks and hand-harvested by smallholder families.
            </p>
            
            {/* Pull Quote */}
            <div className="my-10 p-8 rounded-3xl bg-cream-200/80 border-l-4 border-caramel-500 space-y-3">
              <p className="font-serif italic text-xl sm:text-2xl text-espresso-900 leading-snug">
                "When you eat a slice of bread that was fermented for thirty-six hours, your body recognizes it as nourishment, not filler."
              </p>
              <p className="text-xs uppercase tracking-widest text-caramel-600 font-semibold">
                — Kabir Sen, Master Sourdough Baker
              </p>
            </div>

            <p>
              Today, Jeff's Roast &amp; Rise remains steadfast in that founding ethos. Every single loaf of bread is baked on our stone decks at dawn. Every batch of coffee is roasted in micro-lots of five kilograms, cupped blind, and served at peak flavor freshness.
            </p>
          </div>

        </div>
      </section>

      {/* Our Values Grid */}
      <section className="bg-espresso-900 text-cream-50 py-24 border-y border-espresso-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="editorial-badge bg-caramel-500/20 text-caramel-300 border border-caramel-400/30">
              Our Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50">
              What We Stand For
            </h2>
            <p className="text-sm text-cream-300/80">
              Four non-negotiable promises baked into every morning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-espresso-800/80 p-8 rounded-3xl border border-espresso-700/60 shadow-warm-md space-y-4 flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-2xl bg-espresso-700 text-caramel-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-cream-100 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="editorial-badge bg-sage-100 text-sage-700 border border-sage-300">
            Timeline
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900">
            The Flour &amp; Coffee Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative space-y-3 border-t-2 border-caramel-400 pt-6">
              <span className="font-serif text-3xl font-bold text-caramel-600 block">
                {m.year}
              </span>
              <h4 className="font-serif text-lg font-bold text-espresso-900">
                {m.title}
              </h4>
              <p className="text-xs sm:text-sm text-espresso-600 leading-relaxed">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Artisans / Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="editorial-badge bg-caramel-100 text-caramel-600 border border-caramel-300">
            The Craftspeople
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900">
            Hands Behind the Hearth
          </h2>
          <p className="text-sm text-espresso-600">
            Meet the bakers, roasters, and culinary minds shaping your morning coffee and loaves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-warm-sm hover:shadow-warm-md transition-shadow group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="editorial-badge bg-espresso-900/90 text-cream-50 backdrop-blur-sm border border-cream-200/20 shadow-sm">
                    {member.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-espresso-900">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-caramel-600 font-semibold mt-0.5">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-espresso-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-200/70 rounded-3xl p-8 sm:p-14 border border-cream-300 text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900">
            Experience our hearth in person.
          </h2>
          <p className="text-sm sm:text-base text-espresso-600 max-w-xl mx-auto">
            Reserve a sunlit table by the bay window or drop by for a hot morning cortado and a freshly pulled croissant.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/reservations"
              className="px-8 py-3.5 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-warm-md"
            >
              Book a Table
            </Link>
            <Link
              to="/menu"
              className="px-8 py-3.5 rounded-full bg-espresso-800 hover:bg-espresso-900 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-all shadow-warm-sm"
            >
              Browse Today's Bakes
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

