import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import bannerImage from '../assets/images/weeklydeals.jpg';

const WeeklyDeals = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${bannerImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: 'yellow',
          padding: '40px',
          borderRadius: '10px',
          maxWidth: '600px',
          textAlign: 'left',
          opacity:0.9
        }}
      >
        <Typography variant="h4" display="block"  gutterBottom>
          Get upto 60% OFF in our 
        </Typography>
        <Typography variant="h2" component="div" gutterBottom>
          WEEKLY DEALS
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
         Across our all brands.
        </Typography>
        <Button variant="outlined" color="secondary" sx={{ marginTop: '20px' }}>
          READ MORE
        </Button>
      </Box>
    </Box>
  );
};

export default WeeklyDeals;
