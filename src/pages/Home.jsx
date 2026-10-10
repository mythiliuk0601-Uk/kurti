import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import CategoryStrip from "../components/CategoryStrip.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { api } from "../api/mockApi.js";
import { hasKey } from "../api/imageApi.js";

export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => { api.getProducts({ sort: "rating" }).then((l) => setItems(l.slice(0, 8))); }, []);
  return (
    <>
      {import.meta.env.DEV && !hasKey && (
        <div className="key-note">
          Using low-resolution demo images. Add your free Unsplash key in <code>.env</code> (VITE_UNSPLASH_KEY) for HD photos, then restart <code>npm run dev</code>.
        </div>
      )}
      <Hero />
      <CategoryStrip />
      <section className="section">
        <div className="section-head">
          <h2 className="serif">Best Sellers</h2>
          <Link to="/shop">View all</Link>
        </div>
        <div className="grid">{items.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </section>
    </>
  );
}
