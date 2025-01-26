import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {/* Content on top of the video */}
      <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 1 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: 'black', fontWeight: 'bold' , margin: '50px 0px' }}
        >
          We make high impact investments that transform lives
        </Typography>
        <Typography variant="h6" paragraph sx={{ color: 'black', fontSize: '1.1rem' }}>
          Making a difference by providing easy loans for home construction,
          education, weddings, and business startups.
        </Typography>


      </Container>

      {/* Video Background (without absolute positioning) */}
      <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'relative',
          }}
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/914819496/rendition/1440p/file.mp4?loc=external&log_user=0&signature=3b2548fa05dbf4045d07dd4f9b4edcbc2f90e9c04cc5adc8ba28b612ca27f222"
            type="video/mp4"
          />
        </video>
      </Box>
      <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/loan-application')}
          sx={{
            backgroundColor: '#2196f3',
            padding: '12px 25px',
            margin: '15px',
            fontSize: '16px',
            borderRadius: '25px',
            '&:hover': {
              backgroundColor: '#0b7bbf',
            }
          }}
        >
          Apply Now
        </Button>
    </Box>
  );
};

export default HeroSection;
