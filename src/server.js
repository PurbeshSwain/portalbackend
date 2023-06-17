const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Welcome to SAMS Backend");
});
app.use('/api/auth', authRoutes);
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
