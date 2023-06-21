const express = require('express');
const connectDB = require('./db');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const professorRoutes = require('./routes/professorRoutes')

const app = express();
const port = 5000;

app.use(cors());
app.use(fileUpload());

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Welcome to SAMS Backend");
});
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/professor', professorRoutes);
app.use('/uploads', express.static('uploads'));

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
