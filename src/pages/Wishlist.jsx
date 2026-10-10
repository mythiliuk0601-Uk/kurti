import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/mockApi.js";
import { useShop } from "../context/ShopContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Wishlist() {
  const { wishlist } = useShop();
  const [all, setAll] = useState([]);
  useEffect(() => { api.getProducts().then(setAll); }, []);
  const items = all.filter((p) => wishlist.includes(p.id));
  return (
    <section className="section">
      <h2 className="serif">Your Wishlist</h2>
      {items.length === 0 ? (
        <div className="empty">
          <p>No saved kurtis yet. Tap the heart on any kurti to save it.</p>
          <Link to="/shop" className="btn-primary pill">Browse kurtis</Link>
        </div>
      ) : (
        <div className="grid">{items.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      )}
    </section>
  );
}
