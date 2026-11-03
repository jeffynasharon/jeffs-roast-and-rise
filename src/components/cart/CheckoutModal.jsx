import React, { useState } from 'react';
import { X, Send, CheckCircle2, MapPin, Phone, User, FileText, Utensils, Home, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

export const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cartItems,
    subtotal,
    clearCart,
    orderNotes,
  } = useCart();

  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: 'takeaway', // 'takeaway' | 'dinein' | 'delivery'
    tableNumber: '',
    address: '',
    additionalNotes: orderNotes || '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      showToast('Please enter your name', 'error');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      showToast('Please enter a valid 10-digit phone number', 'error');
      return;
    }

    if (formData.orderType === 'delivery' && !formData.address.trim()) {
      showToast('Please provide your delivery address', 'error');
      return;
    }

    // Build the formatted WhatsApp message
    let message = `☕ *NEW ORDER — Jeff's Roast & Rise* 🍞\n`;
    message += `-------------------------------------------\n`;
    message += `*Customer:* ${formData.name}\n`;
    message += `*Phone:* ${formData.phone}\n`;
    message += `*Order Type:* ${
      formData.orderType === 'dinein'
        ? `Dine-In (Table: ${formData.tableNumber || 'To Be Assigned'})`
        : formData.orderType === 'delivery'
        ? 'Local Delivery'
        : 'Takeaway / Counter Pickup'
    }\n`;

    if (formData.orderType === 'delivery' && formData.address) {
      message += `*Delivery Address:* ${formData.address}\n`;
    }

    if (formData.additionalNotes) {
      message += `*Kitchen Notes:* ${formData.additionalNotes}\n`;
    }

    message += `-------------------------------------------\n`;
    message += `*ITEMS ORDERED:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.quantity}x ${item.name} — ₹${item.price * item.quantity}\n`;
      if (item.customNote) {
        message += `   ↳ Note: ${item.customNote}\n`;
      }
    });

    message += `-------------------------------------------\n`;
    message += `*TOTAL AMOUNT:* ₹${subtotal}\n`;
    message += `*Time:* ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\n`;
    message += `-------------------------------------------\n`;
    message += `_Thank you for supporting mindful craft & wild sourdough!_`;

    const cafePhoneNumber = '919845082910';
    const whatsappUrl = `https://wa.me/${cafePhoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSuccess(true);
    showToast('Your order details have been generated for WhatsApp!', 'success');
  };

  const handleFinish = () => {
    clearCart();
    setIsCheckoutOpen(false);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso-950/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCheckoutOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-cream-50 rounded-3xl shadow-2xl border border-cream-200 overflow-hidden my-8 z-10">
        
        {/* Header */}
        <div className="bg-espresso-900 text-cream-50 p-6 flex items-center justify-between border-b border-espresso-800">
          <div>
            <span className="editorial-badge bg-caramel-500/20 text-caramel-300 border border-caramel-400/30 mb-1">
              Direct Hearth Dispatch
            </span>
            <h3 className="font-serif text-2xl font-bold">Checkout &amp; Order</h3>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="text-cream-400 hover:text-white p-2 rounded-full hover:bg-espresso-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Confirmation View */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h4 className="font-serif text-2xl font-bold text-espresso-900">
                Order Sent to Barista!
              </h4>
              <p className="text-sm text-espresso-600 mt-2 max-w-sm mx-auto leading-relaxed">
                WhatsApp was opened with your order summary. Our team will verify and prepare your artisanal items right away.
              </p>
            </div>

            <div className="bg-cream-100 rounded-2xl p-4 text-left border border-cream-200 text-xs space-y-1.5 text-espresso-700">
              <p><strong>Customer:</strong> {formData.name}</p>
              <p><strong>Items:</strong> {cartItems.length} items (Total: ₹{subtotal})</p>
              <p><strong>Hearth Helpline:</strong> +91 98450 82910</p>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 px-6 rounded-xl bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-sm uppercase tracking-wider transition-colors shadow-warm-sm"
            >
              Done &amp; Clear Basket
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Order Type Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-2">
                Select Order Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'takeaway', label: 'Takeaway', icon: ShoppingBag },
                  { id: 'dinein', label: 'Dine-In', icon: Utensils },
                  { id: 'delivery', label: 'Delivery', icon: Home },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setFormData({ ...formData, orderType: id })}
                    className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl border text-xs font-medium transition-all ${
                      formData.orderType === id
                        ? 'border-caramel-500 bg-caramel-100 text-espresso-900 font-semibold shadow-sm'
                        : 'border-cream-300 bg-white text-espresso-600 hover:bg-cream-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-caramel-600" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-espresso-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-espresso-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Meera Iyer"
                    className="w-full bg-white text-xs pl-9 pr-3 py-3 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-espresso-700 mb-1">
                  WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-espresso-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit number"
                    className="w-full bg-white text-xs pl-9 pr-3 py-3 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>
              </div>
            </div>

            {/* Dynamic Field: Table Number (Dine-in) or Delivery Address (Delivery) */}
            {formData.orderType === 'dinein' && (
              <div>
                <label className="block text-xs font-medium text-espresso-700 mb-1">
                  Table Number (Optional if already seated)
                </label>
                <input
                  type="text"
                  value={formData.tableNumber}
                  onChange={(e) => setFormData({ ...formData, tableNumber: e.target.value })}
                  placeholder="e.g. Table 04 or Patio 02"
                  className="w-full bg-white text-xs px-3.5 py-3 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                />
              </div>
            )}

            {formData.orderType === 'delivery' && (
              <div>
                <label className="block text-xs font-medium text-espresso-700 mb-1">
                  Delivery Address *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-espresso-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Flat / House No, Street, Landmark"
                    className="w-full bg-white text-xs pl-9 pr-3 py-3 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
                  />
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-medium text-espresso-700 mb-1">
                Special Instructions or Allergies
              </label>
              <textarea
                rows={2}
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                placeholder="Cut loaf in half, extra ice, etc."
                className="w-full bg-white text-xs p-3 rounded-xl border border-cream-300 text-espresso-900 focus:outline-none focus:border-caramel-500"
              />
            </div>

            {/* Order Summary Pill */}
            <div className="bg-cream-100 rounded-2xl p-4 border border-cream-200 flex items-center justify-between text-xs">
              <span className="text-espresso-600">
                {cartItems.length} items in your order
              </span>
              <span className="font-serif font-bold text-base text-caramel-600">
                ₹{subtotal}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-sm uppercase tracking-wider transition-all shadow-warm-md hover:shadow-warm-lg"
            >
              <Send className="w-4 h-4" />
              <span>Send Order to WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;

