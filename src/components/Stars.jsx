export default function Stars({ value = 5 }) {
  const full = Math.round(value);
  return (
    <span className="stars" aria-label={`${value} out of 5`}>
      {"★★★★★".split("").map((s, i) => (
        <span key={i} className={i < full ? "on" : ""}>{s}</span>
      ))}
    </span>
  );
}
