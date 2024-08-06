import React from "react";
import { Avatar, Button, Card, CardContent, Grid, Rating, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

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
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
  borderRadius: '15px',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  borderRadius: '25px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  },
}));

const reviews = [
  {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    comment: "Absolutely amazing stay! The staff was incredibly friendly and the amenities were top-notch. I'll definitely be coming back!",
    date: "May 15, 2023"
  },
  {
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    comment: "Beautiful hotel with stunning views. The spa experience was particularly memorable. Just a minor hiccup with room service, otherwise perfect.",
    date: "June 3, 2023"
  },
  {
    name: "Michael Chen",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    comment: "Exceptional service from start to finish. The concierge went above and beyond to make our anniversary special. Highly recommended!",
    date: "April 22, 2023"
  },
  {
    name: "Emily Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 4,
    comment: "Lovely atmosphere and great location. The rooms were spacious and well-appointed. Breakfast buffet was extensive and delicious.",
    date: "July 1, 2023"
  }
];

const CustomerReviews = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 100%)`,
      padding: theme.spacing(4),
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    }}>
      <Container maxWidth="lg">
        <VibrantTypography variant={isMobile ? "h4" : "h2"} gutterBottom align="center" sx={{ mb: 6 }}>
          What Our Guests Say
        </VibrantTypography>
        <Grid container spacing={4}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={6} key={index}>
              <StyledCard>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar src={review.avatar} sx={{ width: 60, height: 60, mr: 2 }} />
                    <Box>
                      <Typography variant="h6">{review.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{review.date}</Typography>
                    </Box>
                  </Box>
                  <Rating value={review.rating} readOnly sx={{ mb: 2 }} />
                  <Box sx={{ position: 'relative', pl: 4, pr: 2 }}>
                    <FormatQuoteIcon sx={{ position: 'absolute', left: 0, top: 0, color: theme.palette.primary.light, fontSize: 30 }} />
                    <Typography variant="body1" paragraph>
                      {review.comment}
                    </Typography>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        <Box mt={6} textAlign="center">
          <StyledButton variant="contained" size="large">
            Write a Review
          </StyledButton>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerReviews;