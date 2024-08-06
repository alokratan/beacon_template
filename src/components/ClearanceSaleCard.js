import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ClearanceSaleCard = () => {
  return (
    <Card sx={{ backgroundColor: 'teal', color: 'white', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h4" component="div" align="center">
          Clearance Sale
        </Typography>
        <Typography variant="body1" component="div" align="center" sx={{ marginTop: '10px' }}>
          Huge discounts on select items!
        </Typography>
        <div className="flex justify-center mt-4">
          <Button variant="contained" color="secondary">
            Shop Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClearanceSaleCard;
