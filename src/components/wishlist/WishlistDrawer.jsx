import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80";

export const WishlistDrawer = () => {
  const { wishlistItems, isWishlistOpen, setIsWishlistOpen, removeFromWishlist } = useWishlist();
  const { addToCart, setIsCartOpen } = useCart();

  if (!isWishlistOpen) return null;

  const handleMoveToCart = (item) => {
    addToCart(item, 1);
    removeFromWishlist(item.id);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso-950/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-50 shadow-2xl flex flex-col justify-between border-l border-cream-200">
          
          {/* Header */}
          <div className="p-6 border-b border-cream-200 flex items-center justify-between bg-cream-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center">
                <Heart className="w-5 h-5 fill-sage-500 text-sage-500" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-espresso-900">Tasting Wishlist</h3>
                <p className="text-xs text-espresso-500 font-sans">
                  {wishlistItems.length === 0
                    ? 'No saved favorites yet'
                    : `${wishlistItems.length} saved ${wishlistItems.length === 1 ? 'item' : 'items'}`}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-espresso-500 hover:text-espresso-900 rounded-full hover:bg-cream-200 transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 text-espresso-600">
                <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center text-sage-600">
                  <Heart className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso-800">
                    Your Wishlist is Empty
                  </h4>
                  <p className="text-sm text-espresso-500 mt-1 max-w-xs">
                    Bookmark your dream pastries and signature pour-overs for your next cafe visit.
                  </p>
                </div>
                <Link
                  to="/menu"
                  onClick={() => setIsWishlistOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sage-500 hover:bg-sage-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-warm-sm"
                >
                  <span>Discover Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3.5 rounded-2xl bg-white border border-cream-200/80 shadow-warm-sm transition-all hover:border-caramel-300"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                      className="w-20 h-20 rounded-xl object-cover shrink-0 bg-cream-200"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h5 className="font-serif text-sm font-semibold text-espresso-900 truncate">
                            {item.name}
                          </h5>
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="text-espresso-400 hover:text-red-500 transition-colors p-1"
                            title="Remove from wishlist"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-espresso-500 line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="font-serif font-bold text-sm text-espresso-900">
                          ₹{item.price}
                        </span>
                        <button
                          onClick={() => handleMoveToCart(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-caramel-500 hover:bg-caramel-600 text-white text-xs font-medium transition-colors shadow-sm"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Add to Basket</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {wishlistItems.length > 0 && (
            <div className="p-6 bg-cream-100 border-t border-cream-200">
              <button
                onClick={() => {
                  wishlistItems.forEach((i) => addToCart(i, 1));
                  setIsWishlistOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-espresso-800 hover:bg-espresso-900 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-all shadow-warm-sm"
              >
                <span>Add All to Basket</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default WishlistDrawer;

