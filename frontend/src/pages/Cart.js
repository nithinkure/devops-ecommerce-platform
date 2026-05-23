import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping Cart 🛒</h1>
      <div style={styles.empty}>
        <p style={styles.emptyText}>Your cart is empty!</p>
        <Link to="/products" style={styles.button}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
    color: '#232f3e',
    marginBottom: '30px',
  },
  empty: {
    textAlign: 'center',
    padding: '60px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  emptyText: {
    fontSize: '20px',
    color: '#888',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#ff9900',
    color: 'white',
    padding: '15px 40px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  }
};

export default Cart;