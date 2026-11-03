import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const WishlistContext = createContext();

const STORAGE_KEY = 'brew_crumb_wishlist_v1';

export const WishlistProvider = ({ children }) => {
  const { showToast } = useToast();
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load wishlist from localStorage', e);
      return [];
    }
  });

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistItems));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlistItems]);

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  const toggleWishlist = (item) => {
    if (isInWishlist(item.id)) {
      setWishlistItems((prev) => prev.filter((i) => i.id !== item.id));
      showToast(`Removed ${item.name} from your wishlist`, 'info');
    } else {
      setWishlistItems((prev) => [...prev, item]);
      showToast(`Saved ${item.name} to your favorites!`, 'success');
    }
  };

  const removeFromWishlist = (id) => {
    const item = wishlistItems.find((i) => i.id === id);
    setWishlistItems((prev) => prev.filter((i) => i.id !== id));
    if (item) {
      showToast(`Removed ${item.name} from favorites`, 'info');
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

