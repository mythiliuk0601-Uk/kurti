import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../api/mockApi.js";
import { useShop } from "../context/ShopContext.jsx";
import { inr } from "../utils.js";

const FIELDS = [
  ["name", "Full Name", "Enter your name", "text"],
  ["email", "Email Address", "Enter your email", "email"],
  ["phone", "Phone Number", "Enter your phone number", "tel"],
  ["address", "Address", "Enter your full address", "text"],
  ["city", "City", "Enter city", "text"],
  ["pincode", "Pincode", "Enter pincode", "text"],
];

export default function Checkout() {
  const { cart, subtotal, shipping, total, clearCart } = useShop();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", pincode: "" });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  if (cart.length === 0 && !busy) return <Navigate to="/cart" replace />;

  const validate = () => {
    const e = {};
    FIELDS.forEach(([k, label]) => { if (!form[k].trim()) e[k] = `${label} is required`; });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.phone && !/^\d{10}$/.test(form.phone)) e.phone = "Enter a 10-digit phone number";
    if (form.pincode && !/^\d{6}$/.test(form.pincode)) e.pincode = "Enter a 6-digit pincode";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setBusy(true);
    const res = await api.placeOrder({ customer: form, items: cart, total });
    clearCart();
    nav("/order-success", { state: { orderId: res.orderId, total }, replace: true });
  };

  return (
    <section className="section panel">
      <h2 className="serif">Checkout</h2>
      <form className="checkout" onSubmit={submit} noValidate>
        <div>
          <h3>Shipping Details</h3>
          {FIELDS.map(([k, label, ph, type]) => (
            <label key={k} className="field">
              <span>{label} <em>*</em></span>
              <input type={type} placeholder={ph} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
              {errors[k] && <small className="err">{errors[k]}</small>}
            </label>
          ))}
        </div>
        <aside className="summary">
          <h3>Order Summary</h3>
          {cart.map((i) => (
            <div key={i.key} className="sum-item">
              <img src={i.image} alt="" />
              <span>{i.name}{i.qty > 1 && ` × ${i.qty}`}</span>
              <b>{inr(i.price * i.qty)}</b>
            </div>
          ))}
          <div className="sum-line"><span>Subtotal</span><b>{inr(subtotal)}</b></div>
          <div className="sum-line"><span>Shipping</span><b className="free">{shipping === 0 ? "Free" : inr(shipping)}</b></div>
          <div className="sum-line grand"><span>Total</span><b>{inr(total)}</b></div>
          <button className="btn-primary full" disabled={busy}>{busy ? "Placing order…" : "Place Order"}</button>
        </aside>
      </form>
    </section>
  );
}
