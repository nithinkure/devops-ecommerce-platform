 const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4003;

// Orders data
const orders = [];

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Order Service is running!' });
});

// Get all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Get order by id
app.get('/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ message: 'Order not found!' });
  }
  res.json(order);
});

// Create order
app.post('/orders', (req, res) => {
  try {
    const { userId, products, totalAmount, address } = req.body;
    const order = {
      id: orders.length + 1,
      userId,
      products,
      totalAmount,
      address,
      status: 'pending',
      createdAt: new Date(),
    };
    orders.push(order);
    res.status(201).json({ message: 'Order created!', order });
  } catch (error) {
    res.status(500).json({ message: 'Server error!' });
  }
});

// Update order status
app.put('/orders/:id/status', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ message: 'Order not found!' });
  }
  order.status = req.body.status;
  res.json({ message: 'Order updated!', order });
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
