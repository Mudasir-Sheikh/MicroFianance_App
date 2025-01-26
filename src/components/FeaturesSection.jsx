import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import LoanCategoryIcon from '@mui/icons-material/Category';  // Example icon
import ConstructionIcon from '@mui/icons-material/House'; // Example icon
import BusinessIcon from '@mui/icons-material/Business'; // Corrected icon
import EducationIcon from '@mui/icons-material/School';  // Example icon
const FeaturesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Loan Categories We Offer
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <LoanCategoryIcon sx={{ fontSize: 60 }} />
            <Typography variant="h6">Wedding Loans</Typography>
            <Typography variant="body2">
              Valima, Jahez, and more.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <ConstructionIcon sx={{ fontSize: 60 }} />
            <Typography variant="h6">Home Construction Loans</Typography>
            <Typography variant="body2">
              Structure, Finishing, Loan.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <BusinessIcon sx={{ fontSize: 60 }} />
            <Typography variant="h6">Business Startup Loans</Typography>
            <Typography variant="body2">
              Buy Stall, Shop Assets, and more.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <EducationIcon sx={{ fontSize: 60 }} />
            <Typography variant="h6">Education Loans</Typography>
            <Typography variant="body2">
              University Fees, Child Fees.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturesSection;
