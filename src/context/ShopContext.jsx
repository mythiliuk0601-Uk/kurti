import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ShopContext = createContext(null);
export const useShop = () => useContext(ShopContext);

const load = (key, fallback) => {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return Array.isArray(v) ? v : fallback;
  } catch {
    return fallback;
  }
};

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => load("ka_cart", []));
  const [wishlist, setWishlist] = useState(() => load("ka_wish", []));

  useEffect(() => { try { localStorage.setItem("ka_cart", JSON.stringify(cart)); } catch {} }, [cart]);
  useEffect(() => { try { localStorage.setItem("ka_wish", JSON.stringify(wishlist)); } catch {} }, [wishlist]);

  const addToCart = (product, qty = 1, size = "M", color) =>
    setCart((c) => {
      const key = `${product.id}-${size}`;
      const found = c.find((i) => i.key === key);
      if (found) return c.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i));
      return [...c, { key, id: product.id, name: product.name, price: product.price, image: product.image, size, color, qty }];
    });

  const updateQty = (key, qty) =>
    setCart((c) => c.map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i)));
  const removeItem = (key) => setCart((c) => c.filter((i) => i.key !== key));
  const clearCart = () => setCart([]);

  const toggleWish = (id) =>
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));

  const cartCount = cart.reduce((n, i) => n + (Number(i.qty) || 1), 0);
  const subtotal = useMemo(() => cart.reduce((n, i) => n + i.price * i.qty, 0), [cart]);
  const shipping = 0; // free shipping

  return (
    <ShopContext.Provider
      value={{ cart, wishlist, addToCart, updateQty, removeItem, clearCart, toggleWish, cartCount, subtotal, shipping, total: subtotal + shipping }}
    >
      {children}
    </ShopContext.Provider>
  );
}
