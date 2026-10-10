import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <b className="serif">KurtiAura</b>
        <p>Wear Your Elegance. Kurtis crafted for style and comfort.</p>
      </div>
      <div className="flinks">
        <Link to="/shop">Shop</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <small>© {new Date().getFullYear()} KurtiAura. All rights reserved.</small>
    </footer>
  );
}
