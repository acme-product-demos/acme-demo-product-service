const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4001;

app.use(cors());
app.use(express.json());

// In-memory product catalog
const products = [
  {
    id: "p1",
    name: "Wireless Noise-Cancelling Headphones",
    description: "Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life.",
    price: 149.99,
    category: "electronics",
    image: "🎧",
    stock: 42,
  },
  {
    id: "p2",
    name: "Smart Fitness Watch",
    description: "Tracks heart rate, sleep, and workouts with a 7-day battery and always-on display.",
    price: 199.0,
    category: "electronics",
    image: "⌚",
    stock: 30,
  },
  {
    id: "p3",
    name: "Ceramic Pour-Over Coffee Set",
    description: "Hand-glazed ceramic dripper and carafe for a smooth, rich cup of coffee.",
    price: 39.5,
    category: "home",
    image: "☕",
    stock: 65,
  },
  {
    id: "p4",
    name: "Memory Foam Throw Pillow",
    description: "Plush 18-inch decorative pillow with a removable, machine-washable cover.",
    price: 24.99,
    category: "home",
    image: "🛋️",
    stock: 120,
  },
  {
    id: "p5",
    name: "Men's Merino Wool Sweater",
    description: "Lightweight, breathable crewneck sweater made from 100% merino wool.",
    price: 79.0,
    category: "apparel",
    image: "🧥",
    stock: 55,
  },
  {
    id: "p6",
    name: "Women's Running Sneakers",
    description: "Cushioned lightweight sneakers designed for daily runs and long walks.",
    price: 89.99,
    category: "apparel",
    image: "👟",
    stock: 73,
  },
  {
    id: "p7",
    name: "The Midnight Orchard (Novel)",
    description: "A bestselling mystery novel set in a small coastal town with a dark secret.",
    price: 14.99,
    category: "books",
    image: "📖",
    stock: 200,
  },
  {
    id: "p8",
    name: "Learn Cooking: A Beginner's Guide",
    description: "Step-by-step recipes and techniques for building confidence in the kitchen.",
    price: 22.5,
    category: "books",
    image: "📚",
    stock: 88,
  },
  {
    id: "p9",
    name: "Stainless Steel Water Bottle",
    description: "Insulated 24oz bottle that keeps drinks cold for 24 hours or hot for 12.",
    price: 27.0,
    category: "home",
    image: "🍶",
    stock: 150,
  },
  {
    id: "p10",
    name: "Portable Bluetooth Speaker",
    description: "Compact waterproof speaker with rich bass and 12-hour playtime.",
    price: 59.99,
    category: "electronics",
    image: "🔊",
    stock: 47,
  },
];

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "product-service" });
});

app.get("/api/products", (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = products.filter(
      (p) => p.category.toLowerCase() === String(category).toLowerCase()
    );
    return res.status(200).json(filtered);
  }
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json(product);
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Product service listening on http://localhost:${PORT}`);
});
