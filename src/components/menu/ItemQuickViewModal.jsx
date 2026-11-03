import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Star, 
  Clock, 
  Sparkles, 
  Check, 
  ShieldCheck,
  Wheat
} from 'lucide-react';
import { useQuickView } from '../../context/QuickViewContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80";

export const ItemQuickViewModal = () => {
  const { selectedItem, isOpen, closeQuickView } = useQuickView();
  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState('');

  if (!isOpen || !selectedItem) return null;

  const isFavorited = isInWishlist(selectedItem.id);

  const handleAddToCart = () => {
    addToCart(selectedItem, quantity, customNote);
    closeQuickView();
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso-950/70 backdrop-blur-sm transition-opacity"
        onClick={closeQuickView}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-cream-50 rounded-3xl shadow-2xl border border-cream-200 overflow-hidden my-8 z-10 animate-fade-in">
        
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-40 w-10 h-10 rounded-full bg-espresso-900 text-white hover:bg-caramel-600 border border-cream-200/40 flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-caramel-400"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.2]" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image & Badges */}
          <div className="relative h-64 md:h-full min-h-[300px] bg-cream-200 overflow-hidden">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent pointer-events-none" />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="editorial-badge bg-espresso-900/90 text-cream-100 backdrop-blur-sm border border-cream-200/20 shadow-sm">
                {selectedItem.category}
              </span>
              {selectedItem.badge && (
                <span className="editorial-badge bg-caramel-500 text-white shadow-sm">
                  {selectedItem.badge}
                </span>
              )}
            </div>

            {/* Veg / Non-Veg Indicator on image */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-50/90 backdrop-blur-md text-xs font-semibold shadow-sm">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  selectedItem.isVeg ? 'bg-sage-600' : 'bg-red-600'
                }`}
              />
              <span className="text-espresso-800">
                {selectedItem.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
              </span>
            </div>
          </div>

          {/* Right Column: Info & Actions */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4 pr-8 sm:pr-10">
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-espresso-500 gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Star className="w-4 h-4 fill-caramel-400 text-caramel-400 shrink-0" />
                  <span className="font-bold text-espresso-800">{selectedItem.rating}</span>
                  <span className="truncate">({selectedItem.reviewCount} tasting reviews)</span>
                </div>
                {selectedItem.prepTime && (
                  <div className="flex items-center gap-1 text-espresso-700 font-semibold bg-cream-200/90 px-2.5 py-0.5 rounded-full shrink-0">
                    <Clock className="w-3.5 h-3.5 text-caramel-600" />
                    <span>{selectedItem.prepTime}</span>
                  </div>
                )}
              </div>

              {/* Title & Price */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-espresso-900 leading-tight">
                  {selectedItem.name}
                </h3>
                <p className="text-xl font-serif font-bold text-caramel-600 mt-1">
                  ₹{selectedItem.price}
                </p>
              </div>

              {/* Tasting Notes / Origin */}
              {selectedItem.notes && (
                <div className="p-2.5 rounded-xl bg-cream-100 border border-cream-200/80 text-xs text-espresso-700 font-medium">
                  {selectedItem.notes}
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-espresso-600 leading-relaxed">
                {selectedItem.description}
              </p>

              {/* Tags */}
              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-cream-200/80 text-espresso-700 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Optional Custom note */}
              <div>
                <label className="block text-[11px] font-medium text-espresso-600 mb-1">
                  Personalize (e.g. oat milk, less ice, warm up)
                </label>
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Your preference..."
                  className="w-full text-xs px-3 py-2 bg-white rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                />
              </div>
            </div>

            {/* Actions: Stepper, Wishlist & Add to Cart */}
            <div className="space-y-3 pt-4 border-t border-cream-200">
              <div className="flex items-center gap-3">
                {/* Stepper */}
                <div className="flex items-center border border-cream-300 rounded-xl bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-espresso-600 hover:bg-cream-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-bold text-espresso-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-espresso-600 hover:bg-cream-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(selectedItem)}
                  className={`p-3 rounded-xl border transition-all ${
                    isFavorited
                      ? 'border-sage-500 bg-sage-50 text-sage-600'
                      : 'border-cream-300 bg-white text-espresso-600 hover:bg-cream-100'
                  }`}
                  aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
                  title={isFavorited ? 'Saved in wishlist' : 'Add to wishlist'}
                >
                  <Heart
                    className={`w-5 h-5 ${isFavorited ? 'fill-sage-600 text-sage-600' : ''}`}
                  />
                </button>
              </div>

              {/* Add To Cart CTA */}
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-sm uppercase tracking-wider transition-all shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Basket • ₹{selectedItem.price * quantity}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ItemQuickViewModal;

