import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import img1 from '../assets/images/buy2get1.jpg';
import img2 from '../assets/images/buy2get2.jpg';
import img3 from '../assets/images/buy2get3.jpg';
import axios from 'axios';

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
}));

const carouselItems = [
  { bgColor: '#FF6B6B', image: img1 },
  { bgColor: '#4ECDC4', image: img2 },
  { bgColor: '#45B7D1', image: img3 },
];

const Buy2Get1FreeComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [offerText, setOfferText] = useState('Loading offer...');

  useEffect(() => {
    axios.get('/api/offer')
      .then((response) => {
        setOfferText(response.data.offer_text || 'Offer not available');
      })
      .catch((error) => {
        console.error('Error fetching offer data:', error);
        setOfferText('90%off');
      });
  }, []);

  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            height: isMobile ? '300px' : '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: item.bgColor,
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: isMobile ? theme.spacing(2) : theme.spacing(4),
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              padding: theme.spacing(2),
              borderRadius: '10px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                borderTop: '1px dotted rgba(0,0,0,0.2)',
                transform: 'translateY(-50%)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                borderLeft: '1px dotted rgba(0,0,0,0.2)',
                transform: 'translateX(-50%)',
              },
            }}
          >
            <VibrantTypography 
              variant={isMobile ? "h4" : "h2"} 
              color="black" 
              gutterBottom
            >
              SPECIAL OFFER!
            </VibrantTypography>
            <VibrantTypography 
              variant={isMobile ? "h3" : "h1"} 
              color="black" 
              gutterBottom
            >
              {offerText}
            </VibrantTypography>
            <Button
              variant="contained"
              size={isMobile ? "medium" : "large"}
              sx={{
                mt: 2,
                backgroundColor: 'black',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.8)',
                },
              }}
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default Buy2Get1FreeComponent;
