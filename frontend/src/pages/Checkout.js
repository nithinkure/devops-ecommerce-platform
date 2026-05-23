import React, { useState } from 'react';

function Checkout() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    card: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (Object.values(form).every(v => v !== '')) {
      setMessage('✅ Order Placed Successfully!');
    } else {
      setMessage('❌ Please fill all fields!');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>
      {message && (
        <div style={styles.message}>{message}</div>
      )}
      <div style={styles.card}>
        <h2 style={styles.section}>📦 Shipping Details</h2>
        <input
          style={styles.input}
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="zip"
          placeholder="ZIP Code"
          onChange={handleChange}
        />
        <h2 style={styles.section}>💳 Payment Details</h2>
        <input
          style={styles.input}
          name="card"
          placeholder="Card Number"
          onChange={handleChange}
        />
        <button
          style={styles.button}
          onClick={handleOrder}
        >
          Place Order 🛒
        </button>
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
  message: {
    textAlign: 'center',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  section: {
    color: '#232f3e',
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#ff9900',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default Checkout;