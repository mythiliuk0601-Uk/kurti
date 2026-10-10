export default function QtyControl({ value, onChange }) {
  return (
    <div className="qty">
      <button onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease">−</button>
      <span>{value}</span>
      <button onClick={() => onChange(value + 1)} aria-label="Increase">+</button>
    </div>
  );
}
