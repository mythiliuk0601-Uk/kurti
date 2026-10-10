export const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
export const off = (price, mrp) => Math.round(((mrp - price) / mrp) * 100);
