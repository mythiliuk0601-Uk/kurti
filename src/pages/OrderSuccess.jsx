import { Link, useLocation } from "react-router-dom";
import { inr } from "../utils.js";

export default function OrderSuccess() {
  const { state } = useLocation();
  return (
    <section className="section empty big">
      <div className="check">✓</div>
      <h2 className="serif">Order placed!</h2>
      {state ? (
        <p>Your order <b>{state.orderId}</b> for {inr(state.total)} is confirmed. We’ll email you the details.</p>
      ) : (
        <p>Thank you for shopping with KurtiAura.</p>
      )}
      <Link to="/shop" className="btn-primary pill">Continue shopping</Link>
    </section>
  );
}
