import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, Typography } from '@mui/material';

const LoanApplicationForm = () => {
  const [loanData, setLoanData] = useState({
    category: 'Wedding Loans',
    subcategory: 'Valima',  // Default to Valima
    loanAmount: '',
    loanPeriod: 36,  // Default to 36 months (3 years)
  });
  const [popupOpen, setPopupOpen] = useState(false); // State for popup form visibility
  const [userDetails, setUserDetails] = useState({ cnic: '', email: '', name: '' });

  const navigate = useNavigate(); // For redirection after successful submission

  const handleChange = (e) => {
    setLoanData({
      ...loanData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePopupChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // First, apply for the loan
      const loanResponse = await axios.post('http://localhost:5000/api/loan/apply', loanData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming user is logged in and token is stored in localStorage
        },
      });

      // Then, submit the user details
      const userResponse = await axios.post('http://localhost:5000/api/loan/user-details', userDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming user is logged in and token is stored in localStorage
        },
      });

      alert('Loan application submitted successfully!');
      navigate('/loan-application-status');  // Redirect to a status page or home
    } catch (error) {
      console.error('Error applying for loan:', error);
      alert('Error submitting loan application.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h3 className="text-2xl font-semibold mb-6 text-center">Loan Application</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Category Selection */}
        <div className="mb-4">
          <label className="block mb-2">Category:</label>
          <select
            name="category"
            value={loanData.category}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
          >
            <option value="Wedding Loans">Wedding Loans</option>
            <option value="Home Construction Loans">Home Construction Loans</option>
            <option value="Business Startup Loans">Business Startup Loans</option>
            <option value="Education Loans">Education Loans</option>
          </select>
        </div>

        {/* Subcategory Selection */}
        <div className="mb-4">
          <label className="block mb-2">Subcategory:</label>
          <select
            name="subcategory"
            value={loanData.subcategory}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
          >
            {loanData.category === 'Wedding Loans' && (
              <>
                <option value="Valima">Valima</option>
                <option value="Furniture">Furniture</option>
                <option value="Valima Food">Valima Food</option>
                <option value="Jahez">Jahez</option>
              </>
            )}
            {loanData.category === 'Home Construction Loans' && (
              <>
                <option value="Structure">Structure</option>
                <option value="Finishing">Finishing</option>
                <option value="Loan">Loan</option>
              </>
            )}
            {loanData.category === 'Business Startup Loans' && (
              <>
                <option value="Buy Stall">Buy Stall</option>
                <option value="Advance Rent for Shop">Advance Rent for Shop</option>
                <option value="Shop Assets">Shop Assets</option>
                <option value="Shop Machinery">Shop Machinery</option>
              </>
            )}
            {loanData.category === 'Education Loans' && (
              <>
                <option value="University Fees">University Fees</option>
                <option value="Child Fees Loan">Child Fees Loan</option>
              </>
            )}
          </select>
        </div>

        {/* Loan Amount */}
        <div className="mb-4">
          <label className="block mb-2">Loan Amount:</label>
          <input
            type="number"
            name="loanAmount"
            value={loanData.loanAmount}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
            required
          />
        </div>

        {/* Loan Period (Months) */}
        <div className="mb-4">
          <label className="block mb-2">Loan Period (Months):</label>
          <input
            type="number"
            name="loanPeriod"
            value={loanData.loanPeriod}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
            max="60" // Max of 60 months (5 years)
          />
        </div>

        {/* Proceed Button to open popup */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPopupOpen(true)} // Open popup
        >
          Proceed
        </Button>
      </form>

      {/* Popup for CNIC, Email, and Name */}
      <Dialog open={popupOpen} onClose={() => setPopupOpen(false)}>
        <DialogTitle>Loan Application Process</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Please enter your details to proceed with the loan application.
          </Typography>

          {/* Form fields for CNIC, Email, and Name */}
          <TextField
            label="CNIC"
            variant="outlined"
            fullWidth
            margin="normal"
            name="cnic"
            value={userDetails.cnic}
            onChange={handlePopupChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            type="email"
            value={userDetails.email}
            onChange={handlePopupChange}
          />
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={userDetails.name}
            onChange={handlePopupChange}
          />
        </DialogContent>

        {/* Popup Actions */}
        <DialogActions>
          <Button onClick={() => setPopupOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
};

export default LoanApplicationForm;
