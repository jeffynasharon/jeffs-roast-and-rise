import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Maximize2 } from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80";

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Space & Vibe', 'Artisanal Bakes', 'Coffee Rituals', 'Golden Hours'];

  const photos = [
    {
      id: 1,
      title: 'The Sunlit Main Hall',
      category: 'Space & Vibe',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
      description: 'Morning light spilling across solid teak communal tables and exposed heritage brick vaults.',
    },
    {
      id: 2,
      title: '36-Hour Sourdough Loaves at Dawn',
      category: 'Artisanal Bakes',
      image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1200&q=80',
      description: 'Blistered ears and caramelized crusts cooling on cedar bakery racks just as dawn breaks.',
    },
    {
      id: 3,
      title: 'Single-Origin V60 Pour-Over Ritual',
      category: 'Coffee Rituals',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
      description: 'Hand-pouring 93°C water in steady spirals over freshly ground Chikmagalur washed estate beans.',
    },
    {
      id: 4,
      title: '72-Layer Laminated Croissants',
      category: 'Artisanal Bakes',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80',
      description: 'Gossamer layers of French cultured butter dough rising in high-heat deck ovens.',
    },
    {
      id: 5,
      title: 'Latte Art in Ceramic Stoneware',
      category: 'Coffee Rituals',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80',
      description: 'Microfoam rosetta poured atop a rich ristretto blend in handcrafted local terracotta.',
    },
    {
      id: 6,
      title: 'The Sun-Drenched Courtyard',
      category: 'Golden Hours',
      image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
      description: 'Quiet afternoons under the blooming frangipani tree with an iced tonic espresso.',
    },
    {
      id: 7,
      title: 'Hand-Twisted Cardamom Brioche Knots',
      category: 'Artisanal Bakes',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
      description: 'Glazed with orange blossom syrup and sprinkled with crushed green cardamom seeds.',
    },
    {
      id: 8,
      title: 'The Cast-Iron Roasting Drum',
      category: 'Space & Vibe',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      description: 'Our restored 1984 drum roaster gently tumbling green coffee seeds to first crack.',
    },
    {
      id: 9,
      title: 'Burnt Basque Cheesecake Slice',
      category: 'Artisanal Bakes',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80',
      description: 'Molten cream center, charred caramelized top, served with espresso salted caramel.',
    },
    {
      id: 10,
      title: 'Evening Firelight & Warm Caramels',
      category: 'Golden Hours',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
      description: 'Dusk settling in as lanterns turn on across the brick garden patio.',
    },
    {
      id: 11,
      title: 'Stoneground Matcha Whisking',
      category: 'Coffee Rituals',
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1200&q=80',
      description: 'Kyoto ceremonial green tea whipped to a delicate jade froth with a bamboo chasen.',
    },
    {
      id: 12,
      title: 'The Bakery Hearth Flour Counter',
      category: 'Space & Vibe',
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1200&q=80',
      description: 'Wooden peel, sourdough bannetons, and flour clouds at 5:00 in the morning.',
    },
  ];

  const filteredPhotos = activeCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="editorial-badge bg-caramel-100 text-caramel-600 border border-caramel-300">
          The Visual Memoir
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-espresso-900 tracking-tight">
          Snapshots of Flour, Flame &amp; Foam
        </h1>
        <p className="text-sm sm:text-base text-espresso-600 max-w-xl mx-auto font-sans">
          A visual chronicle of our mornings: blooming coffee grinds, sourdough blisters, and the warm afternoon glow that fills our dining room.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeCategory === cat
                ? 'bg-espresso-800 text-cream-50 shadow-warm-sm'
                : 'bg-white text-espresso-700 border border-cream-300 hover:border-caramel-300 hover:bg-cream-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photos Masonry/Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-cream-200 cursor-pointer shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={photo.image}
              alt={photo.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(20,12,8,0.92) 0%, rgba(20,12,8,0.72) 48%, rgba(20,12,8,0.2) 80%, transparent 100%)'
              }}
            >
              <span className="text-[11px] uppercase tracking-widest text-caramel-300 font-bold mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                {photo.category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                {photo.title}
              </h3>
              <p className="text-xs text-[#FAF6F0] line-clamp-2 mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] font-normal">
                {photo.description}
              </p>
              <div className="pt-3 flex items-center gap-1.5 text-xs text-caramel-300 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                <Maximize2 className="w-3.5 h-3.5 text-caramel-300" />
                <span>Enlarge Photo</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
          style={{ backgroundColor: 'rgba(15, 9, 6, 0.96)' }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="fixed top-5 right-5 sm:top-6 sm:right-6 z-[110] w-12 h-12 rounded-full bg-[#1A0F0B] border border-cream-200/30 text-white hover:bg-caramel-500 hover:border-caramel-400 flex items-center justify-center transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-caramel-400"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white stroke-[2.2]" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-[#1A0F0B] border border-cream-200/30 text-white hover:bg-caramel-500 hover:border-caramel-400 flex items-center justify-center transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-caramel-400"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white stroke-[2.2]" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-[#1A0F0B] border border-cream-200/30 text-white hover:bg-caramel-500 hover:border-caramel-400 flex items-center justify-center transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-caramel-400"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white stroke-[2.2]" />
          </button>

          {/* Image & Caption Wrapper */}
          <div
            className="max-w-4xl w-full flex flex-col items-center justify-center gap-3 my-auto pt-14 pb-8 sm:py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[62vh] sm:max-h-[68vh] flex items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
                className="max-h-[62vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Caption sits below image with ample bottom padding */}
            <div className="text-center text-cream-100 max-w-2xl space-y-1.5 px-4 pt-2 pb-6">
              <span className="text-xs uppercase tracking-widest text-caramel-300 font-bold block">
                {filteredPhotos[lightboxIndex].category} • {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-sm">
                {filteredPhotos[lightboxIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed font-sans max-w-xl mx-auto">
                {filteredPhotos[lightboxIndex].description}
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default GalleryPage;

