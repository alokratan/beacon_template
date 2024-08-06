import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BrandingCard = () => {
  return (
    <Card sx={{ backgroundColor: 'teal', color: 'white', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h4" component="div" align="center">
          Your Shop Name
        </Typography>
        <Typography variant="h6" component="div" align="center">
          Your Tagline or Slogan
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BrandingCard;
