import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";
import { categories } from "../data/products.js";
import { Lotus, SearchIcon, HeartIcon, BagIcon, UserIcon } from "./Icons.jsx";

export default function Navbar() {
  const { cartCount, wishlist } = useShop();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    nav(`/shop?search=${encodeURIComponent(q)}`);
    setMenu(false);
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setMenu(false)}>
        <Lotus />
        <span>
          <b>KurtiAura</b>
          <small>Wear Your Elegance</small>
        </span>
      </Link>

      <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu">☰</button>

      <nav className={"links" + (menu ? " show" : "")}>
        <NavLink to="/" end onClick={() => setMenu(false)}>Home</NavLink>
        <NavLink to="/shop" end onClick={() => setMenu(false)}>Shop</NavLink>
        <div className="dropdown" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <button className="dd-btn" onClick={() => setOpen(!open)}>Categories ▾</button>
          {open && (
            <div className="dd-menu">
              {categories.map((c) => (
                <Link key={c.slug} to={`/shop?category=${c.slug}`} onClick={() => { setOpen(false); setMenu(false); }}>
                  {c.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <NavLink to="/about" onClick={() => setMenu(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setMenu(false)}>Contact</NavLink>
      </nav>

      <form className="search" onSubmit={submit}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search for kurtis..." />
        <button aria-label="Search"><SearchIcon /></button>
      </form>

      <div className="icons">
        <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
          <HeartIcon />
          {wishlist.length > 0 && <i className="badge">{wishlist.length}</i>}
        </Link>
        <Link to="/cart" className="icon-btn" aria-label="Cart">
          <BagIcon />
          {cartCount > 0 && <i className="badge">{cartCount}</i>}
        </Link>
        <Link to="/contact" className="icon-btn" aria-label="Account"><UserIcon /></Link>
      </div>
    </header>
  );
}
