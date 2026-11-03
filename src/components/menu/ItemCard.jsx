import React from 'react';
import { Heart, Plus, Eye, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useQuickView } from '../../context/QuickViewContext';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80";

export const ItemCard = ({ item }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { openQuickView } = useQuickView();

  const isFavorited = isInWishlist(item.id);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-cream-200/90 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between pointer-events-none">
          <div className="flex flex-col gap-1.5">
            {item.badge && (
              <span className="editorial-badge bg-espresso-900/90 text-cream-50 backdrop-blur-sm border border-cream-200/20 shadow-sm pointer-events-auto">
                {item.badge}
              </span>
            )}
            {item.isChefSpecial && !item.badge && (
              <span className="editorial-badge bg-caramel-500 text-white shadow-sm pointer-events-auto">
                Chef's Special
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(item);
            }}
            aria-label={isFavorited ? 'Remove from tasting wishlist' : 'Save to tasting wishlist'}
            className={`pointer-events-auto w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
              isFavorited
                ? 'bg-sage-600 text-white'
                : 'bg-white/85 text-espresso-700 hover:bg-white hover:text-caramel-600 backdrop-blur-sm'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Veg / Non-Veg Dot Badge & Quick View overlay on hover */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream-50/90 backdrop-blur-md text-[11px] font-semibold shadow-sm text-espresso-800">
            <span
              className={`w-2 h-2 rounded-full ${
                item.isVeg ? 'bg-sage-600 ring-2 ring-sage-200' : 'bg-red-600 ring-2 ring-red-200'
              }`}
            />
            <span>{item.isVeg ? 'Veg' : 'Non-Veg'}</span>
          </div>

          <button
            onClick={() => openQuickView(item)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-espresso-900/90 text-cream-50 hover:bg-espresso-950 backdrop-blur-md shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-espresso-500">
            <span className="uppercase tracking-wider font-semibold text-[10px] text-caramel-600">
              {item.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-caramel-400 text-caramel-400" />
              <span className="font-bold text-espresso-800">{item.rating}</span>
            </div>
          </div>

          <h4 
            onClick={() => openQuickView(item)}
            className="font-serif text-lg font-bold text-espresso-900 hover:text-caramel-600 transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {item.name}
          </h4>

          <p className="text-xs text-espresso-600/90 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {item.notes && (
            <p className="text-[11px] text-espresso-500/80 font-medium italic truncate pt-0.5">
              {item.notes}
            </p>
          )}
        </div>

        {/* Price & Add to Cart button */}
        <div className="pt-3 border-t border-cream-200/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-espresso-400 block font-semibold">
              Price
            </span>
            <span className="font-serif text-lg font-bold text-espresso-900">
              ₹{item.price}
            </span>
          </div>

          <button
            onClick={() => addToCart(item, 1)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-caramel-500 hover:bg-caramel-600 active:bg-caramel-700 text-white text-xs font-semibold tracking-wider transition-all shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5"
            aria-label={`Add ${item.name} to basket`}
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

