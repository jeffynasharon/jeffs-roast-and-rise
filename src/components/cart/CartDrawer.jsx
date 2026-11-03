import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Coffee,
  Sparkles 
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80";

export const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItems,
    setIsCheckoutOpen,
    orderNotes,
    setOrderNotes,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso-950/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-50 shadow-2xl flex flex-col justify-between border-l border-cream-200">
          
          {/* Header */}
          <div className="p-6 border-b border-cream-200 flex items-center justify-between bg-cream-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-caramel-100 text-caramel-600 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-espresso-900">Your Basket</h3>
                <p className="text-xs text-espresso-500 font-sans">
                  {totalItems === 0
                    ? 'Your basket is currently empty'
                    : `${totalItems} ${totalItems === 1 ? 'item' : 'items'} selected`}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-espresso-500 hover:text-espresso-900 rounded-full hover:bg-cream-200 transition-colors"
              aria-label="Close basket"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body / Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 text-espresso-600">
                <div className="w-20 h-20 rounded-full bg-cream-200/80 flex items-center justify-center text-caramel-500">
                  <Coffee className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso-800">
                    The Basket Is Silent
                  </h4>
                  <p className="text-sm text-espresso-500 mt-1 max-w-xs">
                    No warm loaves or fresh extractions added yet. Let something aromatic tempt you.
                  </p>
                </div>
                <Link
                  to="/menu"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-warm-sm"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3.5 rounded-2xl bg-white border border-cream-200/80 shadow-warm-sm transition-all hover:border-caramel-300"
                  >
                    {/* Item Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                      className="w-20 h-20 rounded-xl object-cover shrink-0 bg-cream-200"
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h5 className="font-serif text-sm font-semibold text-espresso-900 truncate">
                            {item.name}
                          </h5>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-espresso-400 hover:text-red-500 transition-colors p-1"
                            title="Remove"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-caramel-600 font-medium mt-0.5">
                          ₹{item.price} each
                        </p>
                      </div>

                      {/* Quantity Stepper & Line Total */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-cream-300 rounded-lg bg-cream-50 overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-espresso-600 hover:bg-cream-200 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-semibold text-espresso-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-espresso-600 hover:bg-cream-200 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif font-bold text-sm text-espresso-900">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Optional Note for Barista/Baker */}
                <div className="pt-2">
                  <label className="block text-xs font-medium text-espresso-600 mb-1">
                    Special notes for the barista / kitchen:
                  </label>
                  <textarea
                    rows={2}
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="e.g. Extra hot, oat milk preferred, bread sliced..."
                    className="w-full text-xs bg-white border border-cream-300 rounded-xl p-3 text-espresso-800 placeholder:text-espresso-400 focus:outline-none focus:border-caramel-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer with Subtotal & Proceed to Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-cream-100 border-t border-cream-200 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-espresso-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-espresso-600">
                  <span>Taxes &amp; Packaging</span>
                  <span className="text-sage-600 font-medium">Included</span>
                </div>
                <div className="border-t border-cream-200 pt-2 flex items-center justify-between">
                  <span className="font-serif font-bold text-base text-espresso-900">
                    Grand Total
                  </span>
                  <span className="font-serif font-bold text-xl text-caramel-600">
                    ₹{subtotal}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-sm uppercase tracking-wider transition-all shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5"
              >
                <span>Checkout via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-espresso-500 font-sans">
                Direct WhatsApp dispatch for instant confirmation &amp; live kitchen updates.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

