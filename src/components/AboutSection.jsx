import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: 'center' }}>
              <Typography variant="h5">Fast Approvals</Typography>
              <Typography variant="body1" color="textSecondary">
                Get your loan approved quickly and without unnecessary paperwork.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: 'center' }}>
              <Typography variant="h5">Flexible Loan Amounts</Typography>
              <Typography variant="body1" color="textSecondary">
                Loan amounts tailored to your needs.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: 'center' }}>
              <Typography variant="h5">Easy Repayment Plans</Typography>
              <Typography variant="body1" color="textSecondary">
                Choose the repayment period that works best for you.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Make sure this is the default export
export default AboutSection;
