import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/mockApi.js";
import { ArrowRight, ChevronL, ChevronR } from "./Icons.jsx";

export default function Hero() {
  const [slides, setSlides] = useState([]);
  const [i, setI] = useState(0);
  const [banner, setBanner] = useState("/images/hero.jpg");
  const timer = useRef();

  useEffect(() => {
    api.getHero().then(setSlides).catch(() => {});
    api.getBanner().then(setBanner).catch(() => {});
  }, []);

  const go = (n) => slides.length && setI((n + slides.length) % slides.length);

  useEffect(() => {
    if (!slides.length) return;
    timer.current = setInterval(() => setI((x) => (x + 1) % slides.length), 4500);
    return () => clearInterval(timer.current);
  }, [slides]);

  // show 4 cards starting from i (wrapping)
  const visible = slides.length ? [0, 1, 2, 3].map((k) => slides[(i + k) % slides.length]) : [];

  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="serif">Elegant Kurtis<br />for Every You</h1>
        <p>Discover the latest and trendy kurtis crafted for style and comfort.</p>
        <Link to="/shop" className="btn-primary pill">Shop Now <ArrowRight /></Link>
      </div>
      <div className="hero-model"><img src={banner} alt="Model in maroon embroidered kurti" /></div>
      <div className="hero-right">
        <button className="arrow l" onClick={() => go(i - 1)} aria-label="Previous"><ChevronL /></button>
        <div className="cards">
          {visible.map((s, k) => (
            <Link to={`/product/${s.id}`} key={s.id + "-" + k} className="slide-card">
              <img src={s.image} alt={s.title} />
            </Link>
          ))}
        </div>
        <button className="arrow r" onClick={() => go(i + 1)} aria-label="Next"><ChevronR /></button>
        <div className="dots">
          {slides.map((s, k) => (
            <button key={s.id} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
