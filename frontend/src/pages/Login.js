import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (email && password) {
      setMessage('✅ Login Successful!');
    } else {
      setMessage('❌ Please fill all fields!');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>
        {message && (
          <div style={styles.message}>{message}</div>
        )}
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={styles.button}
          onClick={handleLogin}
        >
          Login
        </button>
        <p style={styles.register}>
          Don't have an account?{' '}
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: '400px',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    color: '#232f3e',
    marginBottom: '20px',
  },
  message: {
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
    backgroundColor: '#f5f5f5',
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
    padding: '12px',
    backgroundColor: '#ff9900',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  register: {
    marginTop: '20px',
    color: '#888',
  },
  link: {
    color: '#ff9900',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Login;