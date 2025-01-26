// // src/components/LandingPage.jsx
// import React, { useState } from 'react';
// import { Button, Container, Grid, Typography, Paper, Box, Select, MenuItem, InputLabel, FormControl, TextField } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import FAQs from './FAQs';

// const LandingPage = () => {
//   const [loanData, setLoanData] = useState({
//     category: 'Wedding Loans',
//     subcategory: 'Valima',
//     depositAmount: '',
//     loanPeriod: 36,
//   });

//   const navigate = useNavigate();

//   // Categories and subcategories
//   const loanCategories = {
//     'Wedding Loans': ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
//     'Home Construction Loans': ['Structure', 'Finishing', 'Loan'],
//     'Business Startup Loans': ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
//     'Education Loans': ['University Fees', 'Child Fees Loan'],
//   };

//   const handleChange = (e) => {
//     setLoanData({
//       ...loanData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const calculateLoan = (e) => {
//     e.preventDefault();
//     // Simulate loan calculation
//     const loanAmount = loanData.loanPeriod * 10000 - loanData.depositAmount; // Sample calculation
//     alert(`Loan Amount: PKR ${loanAmount}`);
//   };

//   return (
//     <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
//       {/* Hero Section */}
//       <Container maxWidth="lg" style={{ paddingTop: '50px', textAlign: 'center' }}>
//         <Typography variant="h2" component="h1" gutterBottom>
//           Welcome to Loan Tracker
//         </Typography>
//         <Typography variant="h5" color="textSecondary" paragraph>
//           Get the right loan for your needs in just a few clicks. Explore various categories and apply instantly.
//         </Typography>
//         <Button variant="contained" color="primary" size="large" onClick={() => navigate('/loan-application')}>
//           Apply Now
//         </Button>
//       </Container>

//       {/* Loan Categories Section */}
//       <Container maxWidth="lg" style={{ paddingTop: '50px' }}>
//         <Typography variant="h4" component="h2" align="center" gutterBottom>
//           Choose Your Loan Category
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} sm={4}>
//             <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
//               <Typography variant="h6">Wedding Loans</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Subcategories: Valima, Furniture, Jahez
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
//               <Typography variant="h6">Home Construction Loans</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Subcategories: Structure, Finishing
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
//               <Typography variant="h6">Business Startup Loans</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Subcategories: Buy Stall, Shop Assets
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
//               <Typography variant="h6">Education Loans</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Subcategories: University Fees, Child Fees
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Loan Calculator Section */}
//       <Container maxWidth="lg" style={{ paddingTop: '50px' }}>
//         <Typography variant="h4" component="h2" align="center" gutterBottom>
//           Loan Calculator
//         </Typography>
//         <Paper elevation={3} style={{ padding: '40px', backgroundColor: '#fff' }}>
//           <form onSubmit={calculateLoan}>
//             <Grid container spacing={3}>
//               {/* Loan Category Selection */}
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth>
//                   <InputLabel>Loan Category</InputLabel>
//                   <Select
//                     name="category"
//                     value={loanData.category}
//                     onChange={handleChange}
//                   >
//                     <MenuItem value="Wedding Loans">Wedding Loans</MenuItem>
//                     <MenuItem value="Home Construction Loans">Home Construction Loans</MenuItem>
//                     <MenuItem value="Business Startup Loans">Business Startup Loans</MenuItem>
//                     <MenuItem value="Education Loans">Education Loans</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>

//               {/* Loan Subcategory Selection */}
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth>
//                   <InputLabel>Loan Subcategory</InputLabel>
//                   <Select
//                     name="subcategory"
//                     value={loanData.subcategory}
//                     onChange={handleChange}
//                   >
//                     {loanCategories[loanData.category]?.map((sub, index) => (
//                       <MenuItem key={index} value={sub}>{sub}</MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>

//               {/* Loan Period (Months) */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Loan Period (Months)"
//                   name="loanPeriod"
//                   value={loanData.loanPeriod}
//                   onChange={handleChange}
//                   type="number"
//                   fullWidth
//                   inputProps={{ max: 60 }}
//                 />
//               </Grid>

//               {/* Initial Deposit */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Initial Deposit"
//                   name="depositAmount"
//                   value={loanData.depositAmount}
//                   onChange={handleChange}
//                   type="number"
//                   fullWidth
//                   required
//                 />
//               </Grid>

//               {/* Calculate Button */}
//               <Grid item xs={12} style={{ textAlign: 'center' }}>
//                 <Button type="submit" variant="contained" color="primary" size="large">
//                   Calculate Loan
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>
//       </Container>
//       < FAQs />
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
// import AboutSection from './AboutSection';
import AboutSection from './AboutSection';  // Correct import for default export

import CTASection from './CTASection';
import FAQs from './FAQs'; // Optionally add FAQ section here
import LoanCalculator from './LoanCalculator'; // Import LoanCalculator

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <LoanCalculator />
      <AboutSection />
      <CTASection />
      <FAQs />  {/* You can add the FAQ section here */}
    </div>
  );
};

export default LandingPage;
