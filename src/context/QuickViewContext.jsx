import React, { createContext, useContext, useState } from 'react';

const QuickViewContext = createContext();

export const QuickViewProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openQuickView = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeQuickView = () => {
    setIsOpen(false);
    // keep selectedItem momentarily for smooth exit animation
    setTimeout(() => {
      setSelectedItem(null);
    }, 200);
  };

  return (
    <QuickViewContext.Provider
      value={{
        selectedItem,
        isOpen,
        openQuickView,
        closeQuickView,
      }}
    >
      {children}
    </QuickViewContext.Provider>
  );
};

export const useQuickView = () => {
  const context = useContext(QuickViewContext);
  if (!context) {
    throw new Error('useQuickView must be used within a QuickViewProvider');
  }
  return context;
};

