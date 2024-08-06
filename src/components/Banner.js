import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';

const Banner = () => {
  return (
    <Box
      sx={{
        // marginTop:'100px',
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 0',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item>
            <IconButton color="inherit" href="mailto:contact@example.com">
              <Email />
            </IconButton>
            <Typography variant="body1" component="span" sx={{fontSize:'16px'}}>
              contact@example.com
            </Typography>
          </Grid>
          <Grid item>
            <IconButton color="inherit" href="tel:+1234567890">
              <Phone />
            </IconButton>
            <Typography variant="body1" component="span">
              +1234567890
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
