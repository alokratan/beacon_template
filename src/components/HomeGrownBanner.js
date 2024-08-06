import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 800,
  textTransform: 'uppercase',
  textShadow: '3px 3px 0px rgba(0,0,0,0.1)',
  lineHeight: 1.2,
}));

const HomegrownBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        backgroundColor: '#FF6B6B',
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
        Home Grown
      </VibrantTypography>
      <VibrantTypography
        variant={isMobile ? 'h3' : isTablet ? 'h2' : 'h1'}
        sx={{
          color: '#FFD93D',
          fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '3rem',
          marginTop: isMobile ? theme.spacing(1) : theme.spacing(2),
        }}
      >
        Indian Brand
      </VibrantTypography>
    </Box>
  );
};

export default HomegrownBanner;