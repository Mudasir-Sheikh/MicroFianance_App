// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const loanRoutes = require('./routes/loan'); // Import the loan routes
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());  // Allow cross-origin requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define schema for user transactions
const transactionSchema = new mongoose.Schema({
  userId: String,
  loanAmount: Number,
  loanDate: Date,
  status: String,
});

// Create model based on schema
const Transaction = mongoose.model('Transaction', transactionSchema);

// API endpoint to create a new transaction
app.post('/transactions', (req, res) => {
  const { userId, loanAmount, loanDate, status } = req.body;

  // Create new transaction
  const newTransaction = new Transaction({
    userId,
    loanAmount,
    loanDate,
    status,
  });

  // Save the transaction to the database
  newTransaction.save()
    .then(() => res.status(201).send('Transaction inserted successfully'))
    .catch(err => {
      console.error('Error inserting transaction:', err);
      res.status(500).send('Error inserting transaction');
    });
});

// Use the authentication routes
app.use('/api/auth', authRoutes);  // Authentication routes (signup, login)

// Use the loan routes
app.use('/api/loan', loanRoutes);  // Loan-related routes (apply for loans, get loans)

// Create a basic route to test if the server is running
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
