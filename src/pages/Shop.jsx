import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { api } from "../api/mockApi.js";
import { categories } from "../data/products.js";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "";
  const search = params.get("search") || "";
  const [sort, setSort] = useState("");
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(null);
    api.getProducts({ category, search, sort }).then(setItems);
  }, [category, search, sort]);

  const setCat = (slug) => {
    const next = new URLSearchParams(params);
    slug ? next.set("category", slug) : next.delete("category");
    setParams(next);
  };

  return (
    <section className="section">
      <div className="section-head">
        <h2 className="serif">{search ? `Results for “${search}”` : "Shop All Kurtis"}</h2>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort: Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
      <div className="chips">
        <button className={!category ? "on" : ""} onClick={() => setCat("")}>All</button>
        {categories.map((c) => (
          <button key={c.slug} className={category === c.slug ? "on" : ""} onClick={() => setCat(c.slug)}>{c.name}</button>
        ))}
      </div>
      {!items && <p className="muted">Loading kurtis…</p>}
      {items && items.length === 0 && <p className="muted">No kurtis found. Try another category or search.</p>}
      <div className="grid">{items?.map((p) => <ProductCard key={p.id} p={p} />)}</div>
    </section>
  );
}
