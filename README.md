# Jeff's Roast & Rise — Boutique Cafe, Roastery & Sourdough Hearth

An artisanal, magazine-style website crafted for **Jeff's Roast & Rise**, an independent boutique coffee roastery and 36-hour wild sourdough hearth. Hand-designed with editorial layouts, generous whitespace, asymmetric image cards, and authentic culinary photography.

---

## ☕ Brand Identity & Palette

- **Typography**:
  - Headings: `Playfair Display` (Google Fonts)
  - Body & Accents: `DM Sans` (Google Fonts)
- **Color Harmony**:
  - Espresso Brown: `#1A0F0B`, `#231713`, `#3D2821`
  - Cream & Alabaster: `#FAF6F0`, `#FDFBF7`, `#F4ECE4`
  - Warm Caramel: `#C68B59`, `#B97135`
  - Muted Sage Accent: `#5B6B52`, `#738569`, `#E4ECE0`
  - *(Zero generic blue or purple gradients)*
- **Original Logo Motif**:
  - Handcrafted inline vector SVG featuring a steaming ceramic cup embraced by botanical wheat sheaves, accompanied by an elegant serif wordmark. Used consistently in the navbar, footer, and browser favicon.

---

## 🌾 Features & Architecture

1. **Editorial Home Page**:
   - Immersive hero section with warm ambient photography, tagline, and live opening status ticker
   - Floating stats bar highlighting 36-hour wild fermentation, 1,450m estate altitude, and 4.9★ rating
   - Asymmetric "Our Story" teaser with overlapping image cards and quote callouts
   - Curated Signature Hearth items with instant Quick-View and Add-to-Basket triggers
   - Chapter highlights for all five food & beverage categories
   - Patron memoirs & editorial press testimonials
   - Visual gallery marquee strip
   - Visit Us banner with operating hours and embedded Google Maps

2. **Artisanal Menu (30+ Curated Items in INR)**:
   - Category tabs: *All, Coffee, Tea, Bakery, Breakfast, Desserts*
   - Live search input matching names, descriptions, tasting notes, and tags
   - Dietary filters (*Pure Veg Only*, *Non-Vegetarian*, *Chef's Specials*)
   - Sorting options (Curator's recommendation, rating, price low-to-high, price high-to-low)
   - Veg / Non-Veg status indicator badges on all items

3. **Interactive Overlays & State Management**:
   - **Item Quick View Modal**: High-res photography, origin and roast notes, star ratings, personalized notes, quantity selector, and instant basket addition.
   - **Cart Drawer**: Slide-over drawer with quantity increments/decrements, removal, custom notes for the kitchen, and grand total calculations. Persisted in `localStorage`.
   - **Checkout via WhatsApp**: Clean modal collecting guest name, phone, order type (*Takeaway, Dine-In, Delivery*), address/table number, and special instructions. Formats an itemized order message and opens WhatsApp (`https://wa.me/...`) directly for immediate barista dispatch.
   - **Tasting Wishlist**: Persistent favorites saved in `localStorage`, accessible from the header with one-click "Move to Basket".
   - **Lightweight Toast Notifications**: Custom feedback alerts for cart additions, wishlist bookmarks, and newsletter dispatches.

4. **Story & Craft (About)**:
   - Grain-to-cup heritage timeline (2021 to Present)
   - The four core pillars of slow craft
   - Meet the Artisans: JEFFYNA SHARON (Head & Founder), Sourdough Baker Kabir Sen, and Pastry Chef Chloe Martin with portraits and culinary backgrounds.

5. **Visual Lightbox Gallery**:
   - Filterable photo mosaic (*Space & Vibe, Artisanal Bakes, Coffee Rituals, Golden Hours*)
   - Lightbox modal with next/previous keyboard & click navigation and editorial captions.

6. **Table Reservations**:
   - Booking form with guest count, date, time slot, and seating area preference (*Sunlit Courtyard, Library & Hearth, Roaster Bar, Quiet Loft*).
   - Generates and dispatches a pre-filled booking inquiry via WhatsApp / Email.

7. **Contact & Location**:
   - Complete contact directory, opening schedules, valet details, direct note transmission form, and embedded interactive Google Map.

8. **Editorial 404 & Loading Skeletons**:
   - Bespoke "Spilled Coffee & Scattered Crumbs" 404 page
   - Shimmer skeleton loaders for smooth content transitions.

---

## 🛠️ Technology Stack

- **React 18** (Modern hooks and context architecture)
- **Vite 5** (Ultra-fast build tool configured with `base: './'` for universal path hosting)
- **React Router 6** (`HashRouter` for zero-configuration compatibility across GitHub Pages, Netlify, Vercel, or file-system hosting)
- **Tailwind CSS 3** with custom theme tokens, typography, and bespoke shadows
- **Lucide React** (Consistent icons throughout)
- **Zero backend dependencies** (All state maintained client-side in `localStorage`)

---

## 🚀 Setup & Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The app will run locally at `http://localhost:3000` (or the port specified by Vite).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory with relative asset paths (`./`), ready to deploy to any static host.

### 4. Preview Production Build
```bash
npm run preview
```

