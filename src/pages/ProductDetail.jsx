import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/mockApi.js";
import { useShop } from "../context/ShopContext.jsx";
import { inr, off } from "../utils.js";
import Stars from "../components/Stars.jsx";
import QtyControl from "../components/QtyControl.jsx";
import { HeartIcon } from "../components/Icons.jsx";

const SIZES = ["S", "M", "L", "XL", "XXL"];

export default function ProductDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const { addToCart, toggleWish, wishlist } = useShop();
  const [p, setP] = useState(null);
  const [err, setErr] = useState("");
  const [img, setImg] = useState("");
  const [size, setSize] = useState("M");
  const [color, setColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setP(null);
    api.getProduct(id).then((x) => { setP(x); setImg(x.gallery[0]); setColor(0); }).catch((e) => setErr(e.message));
  }, [id]);

  if (err) return <p className="section muted">{err}</p>;
  if (!p) return <p className="section muted">Loading…</p>;
  const liked = wishlist.includes(p.id);

  const add = () => {
    addToCart(p, qty, size, p.colors[color]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section className="section detail">
      <div className="gallery">
        <div className="thumbs">
          {p.gallery.map((g) => (
            <button key={g} className={g === img ? "on" : ""} onClick={() => setImg(g)}><img src={g} alt="" /></button>
          ))}
        </div>
        <div className="main-img"><img src={img} alt={p.name} /></div>
      </div>

      <div className="dinfo">
        <h1 className="serif">{p.name}</h1>
        <div className="row"><Stars value={p.rating} /><span>({p.rating})</span><span className="muted">{p.reviews.toLocaleString("en-IN")} reviews</span></div>
        <div className="row price big"><b>{inr(p.price)}</b><s>{inr(p.mrp)}</s><span className="off">{off(p.price, p.mrp)}% OFF</span></div>
        <p className="desc">{p.description}</p>

        <h4>Select Size:</h4>
        <div className="sizes">
          {SIZES.map((s) => <button key={s} className={s === size ? "on" : ""} onClick={() => setSize(s)}>{s}</button>)}
        </div>

        <h4>Color:</h4>
        <div className="colors">
          {p.colors.map((c, i) => (
            <button key={c} style={{ background: c }} className={i === color ? "on" : ""} onClick={() => setColor(i)} aria-label={`Color ${i + 1}`} />
          ))}
        </div>

        <div className="buy-row">
          <QtyControl value={qty} onChange={setQty} />
          <button className="btn-primary grow" onClick={add}>{added ? "Added ✓" : "Add to Cart"}</button>
        </div>
        <button className="btn-outline" onClick={() => toggleWish(p.id)}>
          <HeartIcon filled={liked} /> {liked ? "In Wishlist" : "Add to Wishlist"}
        </button>
        <button className="link-btn" onClick={() => { addToCart(p, qty, size, p.colors[color]); nav("/checkout"); }}>Buy now</button>
      </div>
    </section>
  );
}
