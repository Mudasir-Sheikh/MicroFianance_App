import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const ProceedPopup = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    cnic: '',
    email: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API request to create the user account
      const response = await axios.post('http://localhost:5000/api/user/proceed', formData);
      console.log(response.data);
      alert('Account created. Check your email for the password.');
      onClose(); // Close the popup
    } catch (error) {
      console.error('Error during account creation:', error);
      alert('Error during account creation');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, margin: 'auto', padding: 4, backgroundColor: 'white', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Proceed with Application</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="CNIC"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>Proceed</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ProceedPopup;
