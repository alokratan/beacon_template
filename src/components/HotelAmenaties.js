// import React from "react";
// import { Button, Card, CardContent, CardMedia, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
// import { Box, Container, styled } from "@mui/system";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import SpaIcon from '@mui/icons-material/Spa';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import PoolIcon from '@mui/icons-material/Pool';

// const VibrantTypography = styled(Typography)(({ theme }) => ({
//   fontFamily: 'Poppins, sans-serif',
//   color: theme.palette.primary.main,
//   fontWeight: 'bold',
//   textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
// }));

// const StyledCard = styled(Card)(({ theme }) => ({
//   transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'translateY(-10px)',
//     boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
//   },
//   borderRadius: '20px',
//   overflow: 'hidden',
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
// }));

// const StyledCardMedia = styled(CardMedia)({
//   height: 200,
//   objectFit: 'cover',
// });

// const StyledButton = styled(Button)(({ theme }) => ({
//   background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
//   borderRadius: '25px',
//   transition: 'all 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
//   },
// }));

// const HotelAmenities = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const amenities = [
//     { title: "Fine Dining", icon: <RestaurantIcon />, image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D", description: "Experience culinary excellence at our award-winning restaurants." },
//     { title: "Luxury Spa", icon: <SpaIcon />, image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBzcGF8ZW58MHx8MHx8fDA%3D", description: "Relax and rejuvenate with our premium spa treatments." },
//     { title: "Modern Gym", icon: <FitnessCenterIcon />, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwZ3ltfGVufDB8fDB8fHww", description: "Stay fit with state-of-the-art equipment and personal trainers." },
//     { title: "Infinity Pool", icon: <PoolIcon />, image: "https://images.unsplash.com/photo-1521750465-672a0f580901?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwaW5maW5pdHklMjBwb29sfGVufDB8fDB8fHww", description: "Enjoy breathtaking views from our rooftop infinity pool." },
//   ];

//   const specialOffers = [
//     { title: "Weekend Getaway", image: "https://images.unsplash.com/photo-1697040093902-60514a6da449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdlZWtlbmQlMjBmdW58ZW58MHx8MHx8fDA%3D", description: "Escape for a luxurious weekend with our all-inclusive package." },
//     { title: "Romantic Retreat", image: "https://images.unsplash.com/photo-1711168906832-5a2ffe3ec62a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJvbWFudGljJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D", description: "Surprise your loved one with our special romantic package." },
//     { title: "Family Fun", image: "https://images.unsplash.com/photo-1630979683703-562982cccb17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhbWlseSUyMHRyaXB8ZW58MHx8MHx8fDA%3D" },
//   ];

//   return (
//     <Box sx={{ 
//       background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 100%)`,
//       padding: theme.spacing(4),
//       borderRadius: '20px',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//     }}>
//       <Container maxWidth="lg">
//         <VibrantTypography variant={isMobile ? "h4" : "h2"} gutterBottom align="center" sx={{ mb: 6 }}>
//           Luxurious Amenities & Services
//         </VibrantTypography>
//         <Grid container spacing={4}>
//           {amenities.map((amenity, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <StyledCard>
//                 <StyledCardMedia
//                   image={amenity.image}
//                   title={amenity.title}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                     {amenity.icon}
//                     <VibrantTypography variant="h6" sx={{ ml: 1 }}>
//                       {amenity.title}
//                     </VibrantTypography>
//                   </Box>
//                   <Typography variant="body2" color="text.secondary">
//                     {amenity.description}
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>
//           ))}
//         </Grid>
//         <Box mt={8}>
//           <VibrantTypography variant={isMobile ? "h5" : "h3"} gutterBottom align="center" sx={{ mb: 4 }}>
//             Exclusive Special Offers
//           </VibrantTypography>
//           <Carousel
//             showArrows={true}
//             showStatus={false}
//             showThumbs={false}
//             infiniteLoop={true}
//             autoPlay={true}
//             interval={5000}
//           >
//             {specialOffers.map((offer, index) => (
//               <Box key={index} sx={{ padding: 2 }}>
//                 <StyledCard>
//                   <StyledCardMedia
//                     image={offer.image}
//                     title={offer.title}
//                     sx={{ height: 300 }}
//                   />
//                   <CardContent>
//                     <VibrantTypography variant="h5" gutterBottom>
//                       {offer.title}
//                     </VibrantTypography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                       {offer.description}
//                     </Typography>
//                     <StyledButton variant="contained" fullWidth>
//                       Learn More
//                     </StyledButton>
//                   </CardContent>
//                 </StyledCard>
//               </Box>
//             ))}
//           </Carousel>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default HotelAmenities;



import React from "react";
import { Button, Card, CardContent, CardMedia, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
  },
  borderRadius: '20px',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  objectFit: 'cover',
});

const StyledButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  borderRadius: '25px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  },
}));

const HotelAmenities = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const amenities = [
    { title: "Fine Dining", icon: <RestaurantIcon />, image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D", description: "Experience culinary excellence at our award-winning restaurants." },
    { title: "Luxury Spa", icon: <SpaIcon />, image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBzcGF8ZW58MHx8MHx8fDA%3D", description: "Relax and rejuvenate with our premium spa treatments." },
    { title: "Modern Gym", icon: <FitnessCenterIcon />, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwZ3ltfGVufDB8fDB8fHww", description: "Stay fit with state-of-the-art equipment and personal trainers." },
    { title: "Infinity Pool", icon: <PoolIcon />, image: "https://images.unsplash.com/photo-1521750465-672a0f580901?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwaW5maW5pdHklMjBwb29sfGVufDB8fDB8fHww", description: "Enjoy breathtaking views from our rooftop infinity pool." },
  ];

  const specialOffers = [
    { title: "Weekend Getaway", image: "https://images.unsplash.com/photo-1697040093902-60514a6da449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdlZWtlbmQlMjBmdW58ZW58MHx8MHx8fDA%3D", description: "Escape for a luxurious weekend with our all-inclusive package." },
    { title: "Romantic Retreat", image: "https://images.unsplash.com/photo-1711168906832-5a2ffe3ec62a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJvbWFudGljJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D", description: "Surprise your loved one with our special romantic package." },
    { title: "Family Fun", image: "https://images.unsplash.com/photo-1630979683703-562982cccb17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhbWlseSUyMHRyaXB8ZW58MHx8MHx8fDA%3D", description: "Enjoy a fun-filled family vacation with activities for all ages." },
  ];

  return (
    <Box sx={{ 
      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 100%)`,
      padding: theme.spacing(4),
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    }}>
      <Container maxWidth="lg">
        <VibrantTypography variant={isMobile ? "h4" : "h2"} gutterBottom align="center" sx={{ mb: 6 }}>
          Luxurious Amenities & Services
        </VibrantTypography>
        <Grid container spacing={4}>
          {amenities.map((amenity, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledCard>
                <StyledCardMedia
                  image={amenity.image}
                  title={amenity.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {amenity.icon}
                    <VibrantTypography variant="h6" sx={{ ml: 1 }}>
                      {amenity.title}
                    </VibrantTypography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {amenity.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        <Box mt={8}>
          <VibrantTypography variant={isMobile ? "h5" : "h3"} gutterBottom align="center" sx={{ mb: 4 }}>
            Exclusive Special Offers
          </VibrantTypography>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
          >
            {specialOffers.map((offer, index) => (
              <Box key={index} sx={{ padding: 2 }}>
                <StyledCard>
                  <StyledCardMedia
                    image={offer.image}
                    title={offer.title}
                    sx={{ height: 300 }}
                  />
                  <CardContent>
                    <VibrantTypography variant="h5" gutterBottom>
                      {offer.title}
                    </VibrantTypography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {offer.description}
                    </Typography>
                    <StyledButton variant="contained" fullWidth>
                      Learn More
                    </StyledButton>
                  </CardContent>
                </StyledCard>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

export default HotelAmenities;
