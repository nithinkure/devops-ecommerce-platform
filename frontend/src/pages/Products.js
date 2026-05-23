import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 999, image: '💻', category: 'Electronics' },
  { id: 2, name: 'Phone', price: 699, image: '📱', category: 'Electronics' },
  { id: 3, name: 'Headphones', price: 199, image: '🎧', category: 'Electronics' },
  { id: 4, name: 'Watch', price: 299, image: '⌚', category: 'Fashion' },
  { id: 5, name: 'Shoes', price: 149, image: '👟', category: 'Fashion' },
  { id: 6, name: 'Backpack', price: 89, image: '🎒', category: 'Fashion' },
  { id: 7, name: 'Coffee Maker', price: 79, image: '☕', category: 'Home' },
  { id: 8, name: 'Desk Lamp', price: 49, image: '💡', category: 'Home' },
];

function Products() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage(`✅ ${product.name} added to cart!`);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Products</h1>
      {message && <div style={styles.message}>{message}</div>}
      <div style={styles.grid}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <div style={styles.image}>{product.image}</div>
            <h3 style={styles.name}>{product.name}</h3>
            <p style={styles.category}>{product.category}</p>
            <p style={styles.price}>${product.price}</p>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
    color: '#232f3e',
    marginBottom: '30px',
  },
  message: {
    textAlign: 'center',
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  image: {
    fontSize: '60px',
    marginBottom: '10px',
  },
  name: {
    fontSize: '18px',
    color: '#232f3e',
  },
  category: {
    color: '#888',
    fontSize: '14px',
  },
  price: {
    fontSize: '24px',
    color: '#ff9900',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff9900',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  }
};

export default Products;