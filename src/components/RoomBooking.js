import React from "react";
import { Button, Card, CardContent, CardMedia, Grid, MenuItem, Select, TextField, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Box, Container, styled } from "@mui/system";

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
  },
  border: `2px solid ${theme.palette.primary.light}`,
  borderRadius: '15px',
  overflow: 'hidden',
}));

const StyledCardMedia = styled(CardMedia)({
  height: 250,
  objectFit: 'cover',
});

const StyledButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
  borderRadius: '25px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const RoomBookingSystem = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
      padding: theme.spacing(4),
      borderRadius: '20px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    }}>
      <Container maxWidth="lg">
        <VibrantTypography variant={isMobile ? "h4" : "h3"} gutterBottom align="center">
          Book Your Dream Stay
        </VibrantTypography>
        <Grid container spacing={4}>
            
  <Grid item xs={12} md={4}>
    <StyledCard>
      <StyledCardMedia
        image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        title="Standard Room"
      />
      <CardContent>
        <VibrantTypography variant="h5" gutterBottom>
          Standard Room
        </VibrantTypography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Comfortable room with all essential amenities for a relaxing stay.
        </Typography>
        <Typography color="white !important">a</Typography>

        <StyledButton variant="contained" fullWidth>
          Book Now
        </StyledButton>
      </CardContent>
    </StyledCard>
  </Grid>
  
  <Grid item xs={12} md={4}>
    <StyledCard>
      <StyledCardMedia
        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        title="Deluxe Room"
      />
      <CardContent>
        <VibrantTypography variant="h5" gutterBottom>
          Deluxe Room
        </VibrantTypography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Spacious room with premium amenities and a stunning view.
         <Typography color="white !important">a</Typography>
        </Typography>
        <StyledButton variant="contained" fullWidth>
          Book Now
        </StyledButton>
      </CardContent>
    </StyledCard>
  </Grid>
  
  <Grid item xs={12} md={4}>
    <StyledCard>
      <StyledCardMedia
        image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        title="Suite"
      />
      <CardContent>
        <VibrantTypography variant="h5" gutterBottom>
          Luxury Suite
        </VibrantTypography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Our finest accommodation with separate living area and exclusive services.
        </Typography>
        <StyledButton variant="contained" fullWidth>
          Book Now
        </StyledButton>
      </CardContent>
    </StyledCard>
  </Grid>
</Grid>
      </Container>
    </Box>
  );
};

export default RoomBookingSystem;