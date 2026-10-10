import { useState } from "react";

export default function Contact({ about }) {
  const [sent, setSent] = useState(false);
  if (about)
    return (
      <section className="section narrow">
        <h2 className="serif">About KurtiAura</h2>
        <p className="desc">KurtiAura brings you kurtis designed for everyday elegance — from cotton straight cuts to festive party wear. Every piece is chosen for fabric comfort, fit and finish.</p>
      </section>
    );
  return (
    <section className="section narrow">
      <h2 className="serif">Contact us</h2>
      {sent ? (
        <p className="desc">Thanks! We’ll reply within one working day.</p>
      ) : (
        <form className="contact" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label className="field"><span>Your name</span><input required placeholder="Enter your name" /></label>
          <label className="field"><span>Email</span><input required type="email" placeholder="Enter your email" /></label>
          <label className="field"><span>Message</span><textarea required rows="4" placeholder="How can we help?" /></label>
          <button className="btn-primary">Send message</button>
        </form>
      )}
    </section>
  );
}
