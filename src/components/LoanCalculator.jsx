import React, { useState } from 'react';
import { Box, Container, TextField, Typography, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const LoanCalculator = () => {
  const categories = [
    { name: 'Wedding Loans', subcategories: ['Valima', 'Furniture', 'Jahez', 'Valima Food'] },
    { name: 'Home Construction Loans', subcategories: ['Structure', 'Finishing', 'Loan'] },
    { name: 'Business Startup Loans', subcategories: ['Buy Stall', 'Shop Assets', 'Shop Machinery', 'Advance Rent'] },
    { name: 'Education Loans', subcategories: ['University Fees', 'Child Fees'] }
  ];

  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [deposit, setDeposit] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [estimatedLoan, setEstimatedLoan] = useState(null);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubcategory('');
  };

  const handleCalculate = () => {
    const loan = Number(deposit) * 0.8;  // Mock calculation logic
    setLoanAmount(loan.toFixed(2));
    const estimated = loan / loanPeriod; // Breaking down the loan amount
    setEstimatedLoan(estimated.toFixed(2));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Loan Calculator
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Category Selection */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Loan Category</InputLabel>
          <Select
            value={category}
            onChange={handleCategoryChange}
            label="Loan Category"
            fullWidth
          >
            {categories.map((cat, index) => (
              <MenuItem key={index} value={cat.name}>{cat.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Subcategory Selection */}
        {category && (
          <FormControl fullWidth margin="normal">
            <InputLabel>Loan Subcategory</InputLabel>
            <Select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              label="Loan Subcategory"
              fullWidth
            >
              {categories
                .find((cat) => cat.name === category)
                .subcategories.map((sub, index) => (
                  <MenuItem key={index} value={sub}>{sub}</MenuItem>
                ))}
            </Select>
          </FormControl>
        )}

        {/* Initial Deposit */}
        <TextField
          label="Initial Deposit (PKR)"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
        />

        {/* Loan Period */}
        <TextField
          label="Loan Period (Years)"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(e.target.value)}
        />

        {/* Calculate Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleCalculate}
          sx={{ mt: 2 }}
        >
          Calculate Loan
        </Button>

{/* Result */}
{loanAmount && (
  <Box
    sx={{
      mt: 3,
      textAlign: 'center',
      backgroundColor: '#f7f7f7',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '0 auto', // Center the result box
    }}
  >
    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
      Estimated Loan Breakdown
    </Typography>

    <Typography variant="h6" sx={{ fontWeight: '500', marginBottom: '10px' }}>
      Estimated Loan Amount: <span style={{ fontWeight: 'bold' }}>{loanAmount} PKR</span>
    </Typography>

    <Typography variant="body1" sx={{ fontWeight: '500', marginBottom: '20px' }}>
      Estimated Monthly Payment: <span style={{ fontWeight: 'bold' }}>{estimatedLoan} PKR/month</span>
    </Typography>

    <Typography variant="body2" sx={{ fontStyle: 'italic', marginBottom: '20px' }}>
      *The above calculation is based on your initial deposit and loan period.
    </Typography>
    <Box/>

            
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default LoanCalculator;
