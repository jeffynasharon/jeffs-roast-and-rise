import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import { ToastProvider } from './context/ToastContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { QuickViewProvider } from './context/QuickViewContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ToastProvider>
        <CartProvider>
          <WishlistProvider>
            <QuickViewProvider>
              <App />
            </QuickViewProvider>
          </WishlistProvider>
        </CartProvider>
      </ToastProvider>
    </HashRouter>
  </React.StrictMode>
);

