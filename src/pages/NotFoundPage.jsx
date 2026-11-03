import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ArrowRight, Home, Compass } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 sm:py-32">
      <div className="max-w-xl mx-auto text-center space-y-6">
        
        {/* Decorative Motif */}
        <div className="w-24 h-24 rounded-full bg-cream-200 border-2 border-caramel-300 flex items-center justify-center mx-auto text-caramel-600 shadow-inner">
          <Coffee className="w-12 h-12 stroke-[1.5]" />
        </div>

        <span className="editorial-badge bg-caramel-100 text-caramel-600 border border-caramel-300">
          Error 404 • Missing Hearth
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-espresso-900 leading-tight">
          Spilled Coffee &amp; Scattered Crumbs
        </h1>

        <p className="text-base text-espresso-600 font-sans leading-relaxed">
          The quiet corner or culinary recipe you are looking for seems to have wandered away with the morning mist. Let us guide you back to warmth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-warm-sm hover:shadow-warm-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Hearth (Home)</span>
          </Link>

          <Link
            to="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-cream-100 border border-cream-300 text-espresso-800 font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <Compass className="w-4 h-4 text-caramel-500" />
            <span>Browse Artisanal Menu</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;

