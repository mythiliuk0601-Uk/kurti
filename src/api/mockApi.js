// Built-in mock API (no backend needed). Every call is async and checks the API key.
// Product photos come from the Unsplash image API when VITE_UNSPLASH_KEY is set.
import { products, categories, heroSlides } from "../data/products.js";
import { getImagePool, pick } from "./imageApi.js";

const API_KEY = import.meta.env.VITE_API_KEY || "kurtiaura-demo-key-123";
const wait = (ms = 350) => new Promise((r) => setTimeout(r, ms));
const guard = (key) => { if (key !== API_KEY) throw new Error("Invalid API key"); };

const withImages = async (list) => {
  const urls = await getImagePool();
  return list.map((p) => {
    const main = pick(urls, p.id - 1, p.image);
    const extra = [1, 2, 3].map((k) => pick(urls, p.id - 1 + k * 10, null)).filter(Boolean);
    return { ...p, image: main, gallery: urls.length ? [main, ...extra] : p.gallery };
  });
};

export const api = {
  async getBanner() {
    const urls = await getImagePool();
    return pick(urls, 20, "/images/hero.jpg");
  },
  async getHero() {
    await wait(150);
    guard(API_KEY);
    const urls = await getImagePool();
    return heroSlides.map((s, i) => ({ ...s, image: pick(urls, 16 + i, s.image) }));
  },
  async getCategories() {
    await wait(150);
    guard(API_KEY);
    const urls = await getImagePool();
    return categories.map((c, i) => ({ ...c, image: pick(urls, 22 + i, c.image) }));
  },
  async getProducts({ category, search, sort } = {}) {
    await wait();
    guard(API_KEY);
    let list = await withImages(products);
    if (category) list = list.filter((p) => p.category === category);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  },
  async getProduct(id) {
    await wait();
    guard(API_KEY);
    const p = (await withImages(products)).find((x) => x.id === Number(id));
    if (!p) throw new Error("Product not found");
    return p;
  },
  async placeOrder(order) {
    await wait(800);
    guard(API_KEY);
    return { orderId: "KA" + Date.now().toString().slice(-8), ...order };
  },
};
