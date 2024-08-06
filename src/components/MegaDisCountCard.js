import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const MegaDiscountsCard = () => {
  return (
    <Card sx={{ backgroundColor: 'teal', color: 'white', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h4" component="div" align="center">
          Mega Discounts
        </Typography>
        <Typography variant="body1" component="div" align="center" sx={{ marginTop: '10px' }}>
          Don't miss out on our mega discounts!
        </Typography>
        <div className="flex justify-center mt-4">
          <Button variant="contained" color="secondary">
            Check Deals
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MegaDiscountsCard;
