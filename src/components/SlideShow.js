import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';

const Slideshow = ({ title, items }) => {
  return (
    <div className="py-4">
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white' }}>
        {title}
      </Typography>
      <Carousel
        indicators={true}
        navButtonsAlwaysVisible={true}
        sx={{
          backgroundColor: 'teal',
          color: 'white',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        {items.map((item, index) => (
          <Paper key={index} sx={{ backgroundColor: 'teal', color: 'white' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            <Typography variant="h6" align="center">
              {item.name}
            </Typography>
            <Button variant="contained" color="secondary" sx={{ marginTop: '10px' }}>
              Learn More
            </Button>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
