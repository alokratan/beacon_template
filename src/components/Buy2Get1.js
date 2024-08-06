import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import { useLocation } from 'react-router-dom';
import img1 from '../assets/images2/CV1.png';
// import img2 from '../assets/images2/CV2.png';
// import img3 from '../assets/images2/CV3.png';
// import img4 from '../assets/images2/CV4.png';
// import img5 from '../assets/images2/CV5.png';
// import img6 from '../assets/images2/CV6.png';

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
}));

const carouselItems = [
  { bgColor: '#FF6B6B', image: img1},
  // { bgColor: '#4ECDC4', image: img2, text: 'Pet Clothes' },
  // { bgColor: '#45B7D1', image: img3, text: 'Food Items' },
  // { bgColor: '#FF6B6B', image: img4, text: 'Buy 1 Get 1 Free' },
  // { bgColor: '#4ECDC4', image: img5, text: 'Clearance Sale' },
  // { bgColor: '#45B7D1', image: img6, text: 'Special Offer on Pet Accessories' },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Buy2Get1FreeComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const query = useQuery();
  const offerData = query.get('offerdata') || 'Offer data not available';
  const offerText = query.get('offertext') || 'Special Offer';

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarouselChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Carousel onChange={handleCarouselChange}>
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
            backgroundImage: url(`${item.image}`),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: isMobile ? theme.spacing(2) : theme.spacing(4),
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(231, 229, 197, 0.56)',
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
                //borderTop: '3px dotted rgba(0,0,0,0.2)',
                transform: 'translateY(-50%)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
               // borderLeft: '1px dotted rgba(0,0,0,0.2)',
                transform: 'translateX(-50%)',
              },
            }}
          >
            <VibrantTypography
              variant={isMobile ? "h4" : "h3"}
              color="red"
              gutterBottom
            >
              SPECIAL OFFER!
            </VibrantTypography>
            <VibrantTypography
              variant={isMobile ? "h3" : "h2"}
              color="black"
              gutterBottom
            >
              {offerText}
            </VibrantTypography>
            <VibrantTypography
              variant={isMobile ? "h5" : "h4"}
              color="black"
              gutterBottom
            >
              {item.text}  {offerData}
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