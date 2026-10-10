const img = (n) => `/images/${n}.jpg`;

export const categories = [
  { slug: "straight", name: "Straight Kurtis", image: img("cat-straight") },
  { slug: "anarkali", name: "Anarkalis", image: img("cat-anarkali") },
  { slug: "printed", name: "Printed Kurtis", image: img("cat-printed") },
  { slug: "party", name: "Party Wear", image: img("cat-party") },
  { slug: "rayon", name: "Rayon Kurtis", image: img("cat-rayon") },
  { slug: "cotton", name: "Cotton Kurtis", image: img("cat-cotton") },
];

export const heroSlides = [
  { id: 1, image: img("kurti1"), title: "Floral Embroidered Kurti" },
  { id: 2, image: img("kurti2"), title: "Printed Straight Kurti" },
  { id: 3, image: img("kurti3"), title: "Navy Striped Kurti" },
  { id: 4, image: img("kurti4"), title: "Pink Notch-neck Kurti" },
];

const desc =
  "Made with soft, breathable fabric. Perfect for casual and festive wear.";

export const products = [
  {
    id: 1, name: "Floral Embroidered Kurti", category: "cotton",
    price: 1499, mrp: 1999, rating: 4.8, reviews: 1250,
    image: img("product-main"),
    gallery: [img("product-main"), img("thumb1"), img("thumb2"), img("thumb3"), img("thumb4")],
    colors: ["#f2d4d4", "#a3195b", "#7fb08f"],
    description: "Beautiful floral embroidered kurti made with premium cotton fabric. Perfect for casual and festive wear.",
  },
  {
    id: 2, name: "Printed Straight Kurti", category: "printed",
    price: 1299, mrp: 1799, rating: 4.6, reviews: 842,
    image: img("kurti2"), gallery: [img("kurti2"), img("cat-printed")],
    colors: ["#2f7a4f", "#2c3e7a", "#d64f8c"],
    description: "Elegant green straight kurti with delicate neckline embroidery. " + desc,
  },
  {
    id: 3, name: "Navy Striped Anarkali", category: "anarkali",
    price: 1899, mrp: 2599, rating: 4.7, reviews: 530,
    image: img("kurti3"), gallery: [img("kurti3")],
    colors: ["#1f2f6b", "#a3195b"],
    description: "Flowing navy Anarkali with fine pin stripes and a keyhole neck. " + desc,
  },
  {
    id: 4, name: "Rose Pink Notch Kurti", category: "rayon",
    price: 999, mrp: 1399, rating: 4.5, reviews: 391,
    image: img("kurti4"), gallery: [img("kurti4")],
    colors: ["#f08fb0", "#f2d4d4"],
    description: "Soft rayon kurti in rose pink with a notch neck. " + desc,
  },
  {
    id: 5, name: "Mustard Embroidered Anarkali", category: "anarkali",
    price: 1699, mrp: 2299, rating: 4.7, reviews: 674,
    image: img("cat-anarkali"), gallery: [img("cat-anarkali")],
    colors: ["#e4a91b", "#a3195b"],
    description: "Sunny mustard Anarkali with a rich embroidered yoke. " + desc,
  },
  {
    id: 6, name: "Teal Block Print Kurti", category: "printed",
    price: 1199, mrp: 1599, rating: 4.4, reviews: 288,
    image: img("cat-printed"), gallery: [img("cat-printed")],
    colors: ["#4c8f87", "#2c3e7a"],
    description: "Teal printed kurti with a comfortable straight fit. " + desc,
  },
  {
    id: 7, name: "Maroon Party Wear Kurti", category: "party",
    price: 2199, mrp: 2999, rating: 4.9, reviews: 912,
    image: img("cat-party"), gallery: [img("cat-party"), img("hero")],
    colors: ["#7b1148", "#1f2f6b"],
    description: "Rich maroon kurti with silver thread work for festive evenings. " + desc,
  },
  {
    id: 8, name: "Sky Blue Rayon Kurti", category: "rayon",
    price: 899, mrp: 1299, rating: 4.3, reviews: 205,
    image: img("cat-rayon"), gallery: [img("cat-rayon")],
    colors: ["#8bbbe0", "#f2d4d4"],
    description: "Breathable sky blue rayon kurti for everyday comfort. " + desc,
  },
  {
    id: 9, name: "Pastel Cotton Floral Kurti", category: "cotton",
    price: 1099, mrp: 1499, rating: 4.6, reviews: 467,
    image: img("cat-cotton"), gallery: [img("cat-cotton")],
    colors: ["#f2d4d4", "#e9e0d2"],
    description: "Light pastel cotton kurti with a soft floral pattern. " + desc,
  },
  {
    id: 10, name: "Classic Straight Pink Kurti", category: "straight",
    price: 1049, mrp: 1449, rating: 4.5, reviews: 356,
    image: img("cat-straight"), gallery: [img("cat-straight")],
    colors: ["#e8559b", "#a3195b"],
    description: "Classic pink straight kurti with embroidered neckline. " + desc,
  },
  {
    id: 11, name: "Festive Wine Embroidered Kurti", category: "party",
    price: 2399, mrp: 3199, rating: 4.8, reviews: 603,
    image: img("hero"), gallery: [img("hero")],
    colors: ["#7b1148"],
    description: "Statement wine-coloured kurti with detailed embroidery. " + desc,
  },
  {
    id: 12, name: "Everyday Green Straight Kurti", category: "straight",
    price: 949, mrp: 1349, rating: 4.4, reviews: 244,
    image: img("kurti2"), gallery: [img("kurti2")],
    colors: ["#2f7a4f"],
    description: "Easy everyday green straight kurti. " + desc,
  },
];
