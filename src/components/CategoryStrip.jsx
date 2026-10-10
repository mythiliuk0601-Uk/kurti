import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/mockApi.js";

export default function CategoryStrip() {
  const [cats, setCats] = useState([]);
  useEffect(() => { api.getCategories().then(setCats); }, []);
  return (
    <section className="cats">
      <h2 className="section-title serif"><span />Shop by Category<span /></h2>
      <div className="cat-grid">
        {cats.map((c) => (
          <Link key={c.slug} to={`/shop?category=${c.slug}`} className="cat">
            <img src={c.image} alt={c.name} />
            <em>{c.name}</em>
          </Link>
        ))}
      </div>
    </section>
  );
}
