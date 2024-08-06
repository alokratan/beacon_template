import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { styled } from '@mui/system';
import kids from '../assets/images/kids.png';
import mens from '../assets/images/mens.png';
import womens from '../assets/images/women1.jpg';

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
}));

const categories = [
  { name: "Men's", image: mens, color: 'rgba(255, 107, 107, 0.6)' }, // 80% opacity
  { name: "Women's", image: womens, color: 'rgba(78, 205, 196, 0.6)' },
  { name: "Kids'", image: kids, color: 'rgba(69, 183, 209, 0.6)' },
  { name: "Men's", image: mens, color: 'rgba(255, 107, 107, 0.6)' }, // 80% opacity
  { name: "Women's", image: womens, color: 'rgba(78, 205, 196, 0.6)' },
  { name: "Kids'", image: kids, color: 'rgba(69, 183, 209, 0.6)' },
];

const ShopByCategories = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={{ }}>
      <VibrantTypography 
        variant={isMobile ? "h4" : "h2"} 
        align="center" 
        gutterBottom
        sx={{ color: '#333',paddingTop:'20px' }}
      >
        Shop by Categories
      </VibrantTypography>
      
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible
        indicators={false}
        interval={4000}
        sx={{ mt: 4 }}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              height: isMobile ? '300px' : isTablet ? '400px' : '500px',
              backgroundImage: `url(${category.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // backgroundColor: category.color, // RGBA color with opacity
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <VibrantTypography 
                variant={isMobile ? "h3" : "h1"} 
                align="center"
                sx={{ color: 'white', mb: 2 }}
              >
                {category.name}
              </VibrantTypography>
              <Button
                variant="contained"
                size={isMobile ? "medium" : "large"}
                sx={{
                  backgroundColor: 'white',
                  color: category.color,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,1)',
                  },
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

export default ShopByCategories;
