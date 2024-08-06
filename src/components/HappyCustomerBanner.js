import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  textTransform: 'uppercase',
  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  lineHeight: 1.3,
}));

const HappyCustomersBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        backgroundColor: '#4ECDC4',
        padding: isMobile ? theme.spacing(2) : isTablet ? theme.spacing(3) : theme.spacing(4),
        textAlign: 'center',
        // borderRadius: '10px',
        // margin: isMobile ? theme.spacing(1) : theme.spacing(2),
      }}
    >
      <VibrantTypography
        variant={isMobile ? 'h4' : isTablet ? 'h3' : 'h2'}
        sx={{
          color: 'white',
          fontSize: isMobile ? '1.2rem' : isTablet ? '1.5rem' : '2rem',
        }}
      >
        Over a Million
      </VibrantTypography>
      <VibrantTypography
        variant={isMobile ? 'h3' : isTablet ? 'h2' : 'h1'}
        sx={{
          color: '#FFD93D',
          fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '3rem',
          marginTop: isMobile ? theme.spacing(1) : theme.spacing(2),
        }}
      >
        Happy Customers
      </VibrantTypography>
    </Box>
  );
};

export default HappyCustomersBanner;