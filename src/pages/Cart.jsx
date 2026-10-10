import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";
import { inr } from "../utils.js";
import QtyControl from "../components/QtyControl.jsx";
import { TrashIcon, ArrowRight } from "../components/Icons.jsx";

export default function Cart() {
  const { cart, updateQty, removeItem, subtotal, shipping, total } = useShop();
  const nav = useNavigate();

  return (
    <section className="section panel">
      <div className="section-head">
        <h2 className="serif">Your Cart</h2>
        <Link to="/shop" className="plink">Continue Shopping <ArrowRight /></Link>
      </div>

      {cart.length === 0 ? (
        <div className="empty">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="btn-primary pill">Browse kurtis</Link>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th /></tr></thead>
            <tbody>
              {cart.map((i) => (
                <tr key={i.key}>
                  <td>
                    <div className="cprod">
                      <img src={i.image} alt="" />
                      <div><Link to={`/product/${i.id}`}>{i.name}</Link><small>Size {i.size}</small></div>
                    </div>
                  </td>
                  <td>{inr(i.price)}</td>
                  <td><QtyControl value={i.qty} onChange={(q) => updateQty(i.key, q)} /></td>
                  <td>{inr(i.price * i.qty)}</td>
                  <td><button className="del" onClick={() => removeItem(i.key)} aria-label="Remove"><TrashIcon /></button></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="totals">
            <div><span>Subtotal</span><b>{inr(subtotal)}</b></div>
            <div><span>Shipping</span><b>{shipping === 0 ? "₹0" : inr(shipping)}</b></div>
            <div className="grand"><span>Total</span><b>{inr(total)}</b></div>
          </div>
          <div className="center">
            <button className="btn-primary wide" onClick={() => nav("/checkout")}>Proceed to Checkout <ArrowRight /></button>
          </div>
        </>
      )}
    </section>
  );
}
