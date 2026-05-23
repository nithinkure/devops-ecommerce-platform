const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4002;

// Products data
const products = [
  { id: 1, name: 'Laptop', price: 999, image: '💻', category: 'Electronics', stock: 50, description: 'High performance laptop' },
  { id: 2, name: 'Phone', price: 699, image: '📱', category: 'Electronics', stock: 100, description: 'Latest smartphone' },
  { id: 3, name: 'Headphones', price: 199, image: '🎧', category: 'Electronics', stock: 75, description: 'Wireless headphones' },
  { id: 4, name: 'Watch', price: 299, image: '⌚', category: 'Fashion', stock: 30, description: 'Smart watch' },
  { id: 5, name: 'Shoes', price: 149, image: '👟', category: 'Fashion', stock: 60, description: 'Running shoes' },
  { id: 6, name: 'Backpack', price: 89, image: '🎒', category: 'Fashion', stock: 45, description: 'Travel backpack' },
  { id: 7, name: 'Coffee Maker', price: 79, image: '☕', category: 'Home', stock: 25, description: 'Automatic coffee maker' },
  { id: 8, name: 'Desk Lamp', price: 49, image: '💡', category: 'Home', stock: 80, description: 'LED desk lamp' },
];

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Product Service is running!' });
});

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get product by id
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found!' });
  }
  res.json(product);
});

// Get products by category
app.get('/products/category/:category', (req, res) => {
  const filtered = products.filter(p => 
    p.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
}); 
