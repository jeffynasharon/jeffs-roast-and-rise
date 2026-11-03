import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  X, 
  SlidersHorizontal, 
  Coffee, 
  Sparkles, 
  Check, 
  ArrowUpDown 
} from 'lucide-react';
import menuData from '../data/menuData.json';
import ItemCard from '../components/menu/ItemCard';
import SkeletonCard from '../components/common/SkeletonCard';

export const MenuPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'nonveg'
  const [onlyChefSpecial, setOnlyChefSpecial] = useState(false);
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended' | 'price-asc' | 'price-desc' | 'rating'
  const [isLoading, setIsLoading] = useState(false);

  // Sync category state if URL parameter changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const categories = ['All', 'Coffee', 'Tea', 'Bakery', 'Breakfast', 'Desserts'];

  // Filter & sort logic
  const filteredItems = useMemo(() => {
    return menuData
      .filter((item) => {
        // Category filter
        if (activeCategory !== 'All' && item.category !== activeCategory) {
          return false;
        }

        // Dietary filter
        if (dietaryFilter === 'veg' && !item.isVeg) return false;
        if (dietaryFilter === 'nonveg' && item.isVeg) return false;

        // Chef special filter
        if (onlyChefSpecial && !item.isChefSpecial) return false;

        // Search query filter
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(query);
          const matchDesc = item.description.toLowerCase().includes(query);
          const matchNotes = item.notes?.toLowerCase().includes(query);
          const matchTags = item.tags?.some((t) => t.toLowerCase().includes(query));
          if (!matchName && !matchDesc && !matchNotes && !matchTags) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default: recommended (Chef's specials first, then reviews)
        return (b.isChefSpecial ? 1 : 0) - (a.isChefSpecial ? 1 : 0) || b.reviewCount - a.reviewCount;
      });
  }, [activeCategory, searchQuery, dietaryFilter, onlyChefSpecial, sortBy]);

  const clearAllFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setDietaryFilter('all');
    setOnlyChefSpecial(false);
    setSortBy('recommended');
    setSearchParams({});
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="editorial-badge bg-caramel-100 text-caramel-600 border border-caramel-300">
          The Living Hearth Menu
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-espresso-900 tracking-tight">
          Handcrafted Daily. Sourced Mindfully.
        </h1>
        <p className="text-sm sm:text-base text-espresso-600 max-w-xl mx-auto font-sans">
          Every cup and bake is prepared in small batches using whole-estate Arabica, wild starter sourdough, and honest ingredients.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-cream-50 p-6 rounded-3xl border border-cream-200/90 shadow-warm-sm space-y-6">
        
        {/* Top Row: Search Bar & Sort Dropdown */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-espresso-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pour-overs, sourdough loaves, croissants, tarts..."
              className="w-full bg-white text-sm pl-11 pr-10 py-3 rounded-2xl border border-cream-300 text-espresso-900 placeholder:text-espresso-400 focus:outline-none focus:border-caramel-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-espresso-400 hover:text-espresso-700"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
            <ArrowUpDown className="w-4 h-4 text-espresso-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-cream-300 text-espresso-800 text-xs font-semibold rounded-2xl px-4 py-3 focus:outline-none focus:border-caramel-500 shadow-sm"
            >
              <option value="recommended">Curator's Recommendation</option>
              <option value="rating">Highest Rated (★)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-espresso-800 text-cream-50 shadow-warm-sm'
                  : 'bg-white text-espresso-800 border border-cream-300 hover:border-caramel-400 hover:bg-cream-100 hover:text-espresso-950 shadow-sm'
              }`}
            >
              {cat}
              {cat === 'All' && ` (${menuData.length})`}
            </button>
          ))}
        </div>

        {/* Dietary & Special Tag Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-cream-200 text-xs">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="font-semibold text-espresso-700 uppercase tracking-wider text-[11px]">
              Dietary:
            </span>

            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                dietaryFilter === 'all'
                  ? 'bg-espresso-800 text-white border-espresso-800 shadow-sm'
                  : 'bg-white text-espresso-800 border-cream-300 hover:bg-cream-100 hover:text-espresso-950'
              }`}
            >
              All Items
            </button>

            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                dietaryFilter === 'veg'
                  ? 'bg-sage-600 text-white border-sage-600 shadow-sm'
                  : 'bg-white text-espresso-800 border-cream-300 hover:bg-cream-100 hover:text-espresso-950'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-sage-500"></span>
              <span>Pure Veg Only</span>
            </button>

            <button
              onClick={() => setDietaryFilter('nonveg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                dietaryFilter === 'nonveg'
                  ? 'bg-red-700 text-white border-red-700 shadow-sm'
                  : 'bg-white text-espresso-800 border-cream-300 hover:bg-cream-100 hover:text-espresso-950'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>Non-Vegetarian</span>
            </button>

            <button
              onClick={() => setOnlyChefSpecial(!onlyChefSpecial)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                onlyChefSpecial
                  ? 'bg-caramel-500 text-white border-caramel-500 shadow-sm'
                  : 'bg-white text-espresso-800 border-cream-300 hover:bg-cream-100 hover:text-espresso-950'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-caramel-500" />
              <span>Chef's Specials Only</span>
            </button>
          </div>

          <div className="text-espresso-500 font-medium">
            Showing <strong>{filteredItems.length}</strong> items
          </div>
        </div>

      </div>

      {/* Menu Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : filteredItems.length === 0 ? (
        /* Empty State */
        <div className="text-center py-20 bg-cream-50 rounded-3xl border border-cream-200 p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-cream-200 text-caramel-600 flex items-center justify-center mx-auto">
            <Coffee className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-espresso-900">
            No culinary matches found
          </h3>
          <p className="text-sm text-espresso-600 max-w-sm mx-auto">
            We couldn't find items matching your current filters. Try resetting or searching for another flavor.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2.5 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-warm-sm"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Bottom Hospitality Note */}
      <div className="p-8 rounded-3xl bg-cream-100 border border-cream-300/80 text-center space-y-2 max-w-3xl mx-auto">
        <h4 className="font-serif text-xl font-bold text-espresso-900">
          Have Dietary Inquiries or Custom Roast Preferences?
        </h4>
        <p className="text-xs sm:text-sm text-espresso-600">
          Our baristas gladly calibrate oat, almond, or soy milks. Our bakers can also reserve whole loaves of 36-hour sourdough with 24 hours advance notice.
        </p>
      </div>

    </div>
  );
};

export default MenuPage;

