import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu as MenuIcon, X, Calendar, Coffee } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { totalItems, subtotal, setIsCartOpen } = useCart();
  const { wishlistItems, setIsWishlistOpen } = useWishlist();

  // Handle sticky navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-warm-sm border-b border-cream-300/60 py-3.5'
            : isHome
            ? 'bg-gradient-to-b from-espresso-950/90 via-espresso-950/60 to-transparent py-5'
            : 'bg-cream-100/90 backdrop-blur-sm border-b border-cream-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo
              variant={!isScrolled && isHome ? 'light' : 'dark'}
              size="md"
              showTagline={!isScrolled}
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                      isActive
                        ? !isScrolled && isHome
                          ? 'text-caramel-300 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-caramel-300'
                          : 'text-espresso-950 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-caramel-600'
                        : !isScrolled && isHome
                        ? 'text-white font-medium hover:text-caramel-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'
                        : 'text-espresso-800 font-medium hover:text-caramel-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Actions: Wishlist, Cart & Booking Button */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                aria-label="View tasting wishlist"
                className={`relative p-2 rounded-full transition-colors ${
                  !isScrolled && isHome
                    ? 'text-white bg-espresso-900/40 border border-white/20 hover:bg-espresso-900/70'
                    : 'text-espresso-800 hover:bg-cream-200'
                }`}
              >
                <Heart className="w-5 h-5 transition-transform hover:scale-110" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-sage-500 text-white text-[11px] font-bold flex items-center justify-center animate-fade-in shadow-sm">
                    {wishlistItems.length}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Open basket"
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 ${
                  !isScrolled && isHome
                    ? 'bg-espresso-900/60 text-white hover:bg-espresso-900/85 border border-white/20 shadow-sm'
                    : 'bg-espresso-800 text-cream-50 hover:bg-espresso-900 shadow-warm-sm'
                }`}
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-white" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-caramel-500 text-white text-[10px] font-bold flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold tracking-wider hidden sm:inline">
                  {totalItems > 0 ? `₹${subtotal}` : 'Basket'}
                </span>
              </button>

              {/* Book Table Button (Desktop) */}
              <Link
                to="/reservations"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 bg-caramel-500 text-white hover:bg-caramel-600 shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  !isScrolled && isHome
                    ? 'text-cream-100 hover:bg-white/10'
                    : 'text-espresso-800 hover:bg-cream-200'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-espresso-900/70 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-cream-50 shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-cream-200">
                <Logo variant="dark" size="sm" showTagline={false} />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-espresso-600 hover:text-espresso-900 rounded-lg hover:bg-cream-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-caramel-100 text-espresso-900 font-semibold'
                          : 'text-espresso-700 hover:bg-cream-100 hover:text-espresso-900'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-caramel-500 font-serif italic">→</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom info in mobile drawer */}
            <div className="pt-6 border-t border-cream-200 space-y-4">
              <Link
                to="/reservations"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-caramel-500 text-white font-semibold text-sm tracking-wide shadow-warm-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </Link>
              <div className="text-center text-xs text-espresso-500 space-y-1">
                <p className="font-serif italic">Open Daily: 7:30 AM – 10:00 PM</p>
                <p>14 Heritage Lane, Indiranagar</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

