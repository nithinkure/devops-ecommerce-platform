import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome to ShopDevOps</h1>
        <p style={styles.subtitle}>
          Best products at best prices!
        </p>
        <Link to="/products" style={styles.button}>
          Shop Now 🛒
        </Link>
      </div>

      <div style={styles.features}>
        <div style={styles.card}>
          <h3>🚀 Fast Delivery</h3>
          <p>Get your products delivered in 24 hours</p>
        </div>
        <div style={styles.card}>
          <h3>🔒 Secure Payment</h3>
          <p>100% secure payment gateway</p>
        </div>
        <div style={styles.card}>
          <h3>↩️ Easy Returns</h3>
          <p>30 day hassle free returns</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  hero: {
    backgroundColor: '#232f3e',
    color: 'white',
    padding: '100px 30px',
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#ff9900',
  },
  subtitle: {
    fontSize: '20px',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#ff9900',
    color: 'white',
    padding: '15px 40px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '60px 30px',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '250px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  }
};

export default Home;