import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import axios from 'axios';

const MyLoansPage = () => {
  const [loanDetails, setLoanDetails] = useState({
    loanAmount: 0,
    loanPeriod: 36,
    guarantors: [
      { name: '', email: '', location: '', cnic: '' },
      { name: '', email: '', location: '', cnic: '' },
    ],
    personalDetails: { address: '', phoneNumber: '' },
    documents: { salarySheet: '', statement: '' }
  });

  const handleLoanDetailsChange = (e) => {
    setLoanDetails({
      ...loanDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuarantorChange = (index, e) => {
    const updatedGuarantors = [...loanDetails.guarantors];
    updatedGuarantors[index][e.target.name] = e.target.value;
    setLoanDetails({ ...loanDetails, guarantors: updatedGuarantors });
  };

  const handlePersonalDetailsChange = (e) => {
    setLoanDetails({
      ...loanDetails,
      personalDetails: {
        ...loanDetails.personalDetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleDocumentChange = (e) => {
    setLoanDetails({
      ...loanDetails,
      documents: {
        ...loanDetails.documents,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/loan/request-details', loanDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Loan details submitted successfully');
    } catch (error) {
      console.error('Error submitting loan details:', error);
      alert('Error submitting loan details.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        My Loan Request
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {/* Guarantor 1 */}
        <Typography variant="h6" gutterBottom>Guarantor 1</Typography>
        <TextField
          label="Guarantor Name"
          name="name"
          fullWidth
          value={loanDetails.guarantors[0].name}
          onChange={(e) => handleGuarantorChange(0, e)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Guarantor Email"
          name="email"
          fullWidth
          value={loanDetails.guarantors[0].email}
          onChange={(e) => handleGuarantorChange(0, e)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Guarantor Location"
          name="location"
          fullWidth
          value={loanDetails.guarantors[0].location}
          onChange={(e) => handleGuarantorChange(0, e)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Guarantor CNIC"
          name="cnic"
          fullWidth
          value={loanDetails.guarantors[0].cnic}
          onChange={(e) => handleGuarantorChange(0, e)}
          sx={{ mb: 2 }}
        />

        {/* Guarantor 2 */}
        <Typography variant="h6" gutterBottom>Guarantor 2</Typography>
        <TextField
          label="Guarantor Name"
          name="name"
          fullWidth
          value={loanDetails.guarantors[1].name}
          onChange={(e) => handleGuarantorChange(1, e)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Guarantor Email"
          name="email"
          fullWidth
          value={loanDetails.guarantors[1].email}
          onChange={(e) => handleGuarantorChange(1, e)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Guarantor Location"
          name="location"
          fullWidth
          value={loanDetails.guarantors[1].location}
          onChange={(e) => handleGuarantorChange(1, e)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Guarantor CNIC"
          name="cnic"
          fullWidth
          value={loanDetails.guarantors[1].cnic}
          onChange={(e) => handleGuarantorChange(1, e)}
          sx={{ mb: 2 }}
        />

        {/* Personal Details */}
        <Typography variant="h6" gutterBottom>Personal Information</Typography>
        <TextField
          label="Address"
          name="address"
          fullWidth
          value={loanDetails.personalDetails.address}
          onChange={handlePersonalDetailsChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          fullWidth
          value={loanDetails.personalDetails.phoneNumber}
          onChange={handlePersonalDetailsChange}
          sx={{ mb: 2 }}
        />

        {/* Documents (Optional) */}
        <Typography variant="h6" gutterBottom>Upload Documents</Typography>
        <TextField
          label="Salary Sheet (Optional)"
          name="salarySheet"
          fullWidth
          value={loanDetails.documents.salarySheet}
          onChange={handleDocumentChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Statement (Optional)"
          name="statement"
          fullWidth
          value={loanDetails.documents.statement}
          onChange={handleDocumentChange}
          sx={{ mb: 2 }}
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit Loan Details
        </Button>
      </Box>
    </Container>
  );
};

export default MyLoansPage;




