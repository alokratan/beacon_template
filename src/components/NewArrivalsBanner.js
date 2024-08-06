import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import slider1 from '../assets/images/newarrslider1.png'
import slider2 from '../assets/images/newarrsilder2.png'
import slider3 from '../assets/images/newarrslider3.png'
import slider4 from '../assets/images/newarrslider4.png'
import slider5 from '../assets/images/newarrslider5.png'

const NewArrivalsBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const images = [slider1, slider2, slider3, slider4, slider5];

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        // borderRadius: '10px',
        color: 'white',
      }}
    >
      <Carousel
        autoPlay
        interval={3000}
        indicators={false}
        navButtonsAlwaysVisible
        animation="fade"
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: isMobile ? '300px' : isTablet ? '400px' : '500px',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: isMobile ? '5%' : '10%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                textAlign: 'left',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: isMobile ? '10px' : '20px',
                borderRadius: '10px',
                width: isMobile ? '90%' : isTablet ? '70%' : '50%',
                maxWidth: '400px',
              }}
            >
              <Typography variant={isMobile ? "body1" : "h6"} component="div" gutterBottom>
                NEW ARRIVALS
              </Typography>
              <Typography variant={isMobile ? "h3" : isTablet ? "h2" : "h1"} component="div" sx={{ fontWeight: 'bold' }}>
                50% <br /> OFF
              </Typography>
              <Typography 
                variant={isMobile ? "body2" : "body1"} 
                component="div" 
                gutterBottom 
                sx={{ 
                  marginTop: '10px', 
                  display: isMobile ? 'none' : 'block' 
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum massa quis nulla aliquet, in euismod arcu porttitor.
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ 
                  marginTop: '20px', 
                  backgroundColor: 'white', 
                  color: 'black',
                  padding: isMobile ? '5px 10px' : '6px 16px',
                  fontSize: isMobile ? '0.8rem' : '0.875rem',
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default NewArrivalsBanner;