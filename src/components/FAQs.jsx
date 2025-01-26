import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';  // Corrected import

const FAQs = () => {
  return (
    <Container maxWidth="lg" style={{ paddingTop: '50px' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Frequently Asked Questions (FAQs)
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">What is the maximum loan amount?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The maximum loan amount depends on the loan category. For Wedding Loans and Home Construction Loans, the maximum loan is up to PKR 5 Lakh. For Business Startup Loans and Education Loans, the amount varies.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">How long does it take to approve a loan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The loan approval process typically takes between 2-5 business days, depending on the loan type and required documentation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">Can I apply for a loan online?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can apply for a loan directly on our website through the Loan Application Form. Simply fill out the form with your details.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant="h6">What are the interest rates for loans?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The interest rates vary depending on the loan category. For detailed information, please check the loan category section or consult our customer support.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography variant="h6">Can I pay off the loan early?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can pay off your loan early. Early repayment options vary, and some may come with prepayment penalties. Please consult with our team for further details.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>

  
  );
};

export default FAQs;
