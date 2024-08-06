import React from 'react';
import {
  Container, Typography, Box, Paper
} from '@mui/material';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/hotelsite.css';
import img1 from '../assets/images/hotelimg1.jpg';
import img2 from '../assets/images/hotelimg2.jpg';
import img3 from '../assets/images/hotelimg3.jpg';
import img4 from '../assets/images/hotelimg4.jpg';
import img5 from '../assets/images/hotelimg5.jpg';
import { amber, teal } from '@mui/material/colors';
import RoomBookingSystem from './RoomBooking';
import HotelAmenities from './HotelAmenaties';
import CustomerReviews from './CustomerReviews';
import InteractiveMap from './HotelMap';
import ContactInformation from './ContactInformation';

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  color: theme.palette.common.white,
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
}));

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      light: teal[300],
      dark: teal[700],
    },
    secondary: {
      main: amber[500],
      light: amber[300],
      dark: amber[700],
    },
    background: {
      default: "#f0f4f8",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const StyledCarousel = styled(Carousel)`
  .carousel .slide img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }
  .legend {
    background: rgba(0, 0, 0, 0.6);
    font-family: 'Poppins, sans-serif';
    font-size: 1.2rem;
  }
`;

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: teal[50],
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const HotelLandingPage = () => (
  <ThemeProvider theme={theme}>
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingTop: 4, paddingBottom: 8 }}>
      <Container maxWidth="lg">
        <StyledPaper elevation={3}>
          <VibrantTypography variant="h2" align="center" gutterBottom sx={{ 
            bgcolor: teal[700],
            padding: 2,
            borderRadius: 2,
            marginBottom: 4
          }}>
            Welcome to Luxe Resort & Spa
          </VibrantTypography>
          <Typography variant="h5" align="center" paragraph sx={{ 
            color: teal[800],
            marginBottom: 4,
            fontFamily: 'Poppins, sans-serif'
          }}>
            Experience luxury, comfort, and unforgettable moments at our award-winning resort.
          </Typography>
          <StyledCarousel showThumbs={false} autoPlay infiniteLoop interval={5000} transitionTime={1000}>
            <div>
              <img src={img1} alt="Hotel Exterior" />
              <p className="legend">Hotel Exterior</p>
            </div>
            <div>
              <img src={img2} alt="Hotel Lobby" />
              <p className="legend">Hotel Lobby</p>
            </div>
            <div>
              <img src={img3} alt="Hotel Room" />
              <p className="legend">Deluxe Suite</p>
            </div>
            <div>
              <img src={img4} alt="Hotel Pool" />
              <p className="legend">Infinity Pool</p>
            </div>
            <div>
              <img src={img5} alt="Hotel Spa" />
              <p className="legend">Luxurious Spa</p>
            </div>
          </StyledCarousel>
        </StyledPaper>
        <RoomBookingSystem />
        <HotelAmenities />
        <CustomerReviews />
        <ContactInformation />
        <InteractiveMap />
      </Container>
    </Box>
  </ThemeProvider>
);

export default HotelLandingPage;
