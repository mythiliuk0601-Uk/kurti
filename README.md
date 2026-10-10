# KurtiAura – React E-commerce (frontend only)

## Run
    npm install
    npm run dev
Open http://localhost:5173

## HD images
1. Get a free Access Key: https://unsplash.com/developers  (Your apps -> New Application)
2. Paste it in `.env`:  VITE_UNSPLASH_KEY=your_key
3. Stop the server (Ctrl+C) and run `npm run dev` again.

Or put your own high-resolution photos in `public/images/` using the same file names.

## Structure
- src/api/        mockApi.js (fake store API) + imageApi.js (Unsplash images)
- src/data/       products and categories
- src/context/    cart + wishlist
- src/components/ Navbar, Hero, CategoryStrip, ProductCard, ...
- src/pages/      Home, Shop, ProductDetail, Cart, Checkout, Wishlist, ...
