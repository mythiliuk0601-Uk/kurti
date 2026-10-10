import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";
import { inr, off } from "../utils.js";
import Stars from "./Stars.jsx";
import { HeartIcon } from "./Icons.jsx";

export default function ProductCard({ p }) {
  const { toggleWish, wishlist, addToCart } = useShop();
  const liked = wishlist.includes(p.id);
  return (
    <article className="pcard">
      <Link to={`/product/${p.id}`} className="pimg">
        <img src={p.image} alt={p.name} loading="lazy" />
        <span className="tag">{off(p.price, p.mrp)}% OFF</span>
      </Link>
      <button className={"wish" + (liked ? " liked" : "")} onClick={() => toggleWish(p.id)} aria-label="Toggle wishlist">
        <HeartIcon filled={liked} />
      </button>
      <div className="pinfo">
        <Link to={`/product/${p.id}`}><h3>{p.name}</h3></Link>
        <div className="row"><Stars value={p.rating} /><small>({p.reviews})</small></div>
        <div className="row price"><b>{inr(p.price)}</b><s>{inr(p.mrp)}</s></div>
        <button className="btn-primary sm" onClick={() => addToCart(p, 1, "M", p.colors[0])}>Add to Cart</button>
      </div>
    </article>
  );
}
