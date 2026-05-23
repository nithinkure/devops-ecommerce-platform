 const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4005;

// Notifications data
const notifications = [];

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Notification Service is running!' });
});

// Get all notifications
app.get('/notifications', (req, res) => {
  res.json(notifications);
});

// Get notifications by userId
app.get('/notifications/:userId', (req, res) => {
  const userNotifications = notifications.filter(
    n => n.userId === req.params.userId
  );
  res.json(userNotifications);
});

// Send notification
app.post('/notifications', (req, res) => {
  try {
    const { userId, type, message, email } = req.body;

    const notification = {
      id: notifications.length + 1,
      userId,
      type, // email, sms, push
      message,
      email,
      status: 'sent',
      createdAt: new Date(),
    };

    notifications.push(notification);

    // Simulate sending notification
    console.log(`📧 Notification sent to ${email}: ${message}`);

    res.status(201).json({
      message: 'Notification sent!',
      notification
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error!' });
  }
});

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
