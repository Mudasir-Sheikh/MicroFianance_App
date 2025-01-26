import React from 'react';
import { Button, Box, Container, Typography } from '@mui/material';

const CTASection = () => {
  return (
    <Box sx={{ background: '#2196f3', color: 'white', py: 6, textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography variant="h6" paragraph>
          Apply for your loan today and take the first step towards achieving your goals.
        </Typography>
        <Button variant="contained" color="primary" size="large" href="/loan-application">
          Apply Now
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;
