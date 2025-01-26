const express = require('express');
const Loan = require('../models/Loan');
const router = express.Router();

// Route to create a new loan application
router.post('/apply', async (req, res) => {
  const { category, subcategory, loanAmount, loanPeriod, userId } = req.body;

  // Validate loan amount and period for different categories
  if (category === 'Wedding Loans') {
    if (loanAmount > 500000) {
      return res.status(400).json({ message: 'Wedding loan amount exceeds the maximum limit of PKR 5 Lakh.' });
    }
    if (loanPeriod > 36) {
      return res.status(400).json({ message: 'Wedding loan period cannot exceed 3 years (36 months).' });
    }
  } else if (category === 'Home Construction Loans' || category === 'Business Startup Loans') {
    if (loanAmount > 1000000) {
      return res.status(400).json({ message: 'Loan amount exceeds the maximum limit of PKR 10 Lakh.' });
    }
    if (loanPeriod > 60) {
      return res.status(400).json({ message: 'Loan period cannot exceed 5 years (60 months).' });
    }
  } else if (category === 'Education Loans') {
    // Education loans do not have a fixed maximum loan amount or period
    if (loanPeriod > 48) {
      return res.status(400).json({ message: 'Education loan period cannot exceed 4 years (48 months).' });
    }
  }

  try {
    const newLoan = new Loan({
      category,
      subcategory,
      loanAmount,
      loanPeriod,
      userId,
    });

    await newLoan.save();
    res.status(201).json({ message: 'Loan application submitted successfully', loan: newLoan });
  } catch (error) {
    console.error('Error submitting loan application:', error);
    res.status(500).json({ message: 'Error submitting loan application.' });
  }
});

// Route to fetch all loan applications for a specific user
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const loans = await Loan.find({ userId });
    res.status(200).json({ loans });
  } catch (error) {
    console.error('Error fetching loan applications:', error);
    res.status(500).json({ message: 'Error fetching loan applications.' });
  }
});

module.exports = router;
