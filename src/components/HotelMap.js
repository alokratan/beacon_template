// import React from "react";
// import { Button, Card, CardContent, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
// import { Box, Container, styled } from "@mui/system";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import DirectionsIcon from '@mui/icons-material/Directions';
// import NearMeIcon from '@mui/icons-material/NearMe';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for default marker icon
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// // ... (keep the styled components and other imports as they were)
// const VibrantTypography = styled(Typography)(({ theme }) => ({
//     fontFamily: 'Poppins, sans-serif',
//     color: theme.palette.primary.main,
//     fontWeight: 'bold',
//     textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
//   }));
  
//   const StyledCard = styled(Card)(({ theme }) => ({
//     transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//     '&:hover': {
//       transform: 'translateY(-5px)',
//       boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
//     },
//     borderRadius: '15px',
//     overflow: 'hidden',
//   }));
  
//   const StyledButton = styled(Button)(({ theme }) => ({
//     background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
//     borderRadius: '25px',
//     transition: 'all 0.3s ease-in-out',
//     '&:hover': {
//       transform: 'scale(1.05)',
//       boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
//     },
//   }));

// const InteractiveMap = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   // Coordinates for Delhi, India
//   const center = [28.6139, 77.2090];

//   return (
//     <Box sx={{ 
//       background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 100%)`,
//       padding: theme.spacing(4),
//       borderRadius: '20px',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//     }}>
//       <Container maxWidth="lg">
//         <VibrantTypography variant={isMobile ? "h4" : "h2"} gutterBottom align="center" sx={{ mb: 6 }}>
//           Find Us in Delhi
//         </VibrantTypography>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={8}>
//             <StyledCard>
//               <Box height="400px" width="100%">
//                 <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
//                   <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                   />
//                   <Marker position={center}>
//                     <Popup>
//                       Luxe Resort & Spa, Delhi
//                     </Popup>
//                   </Marker>
//                 </MapContainer>
//               </Box>
//             </StyledCard>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <StyledCard>
//               <CardContent>
//                 <VibrantTypography variant="h5" gutterBottom>
//                   Luxe Resort & Spa, Delhi
//                 </VibrantTypography>
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                   <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
//                   <Typography>123 Luxury Lane, New Delhi, 110001</Typography>
//                 </Box>
//                 <Typography variant="body2" paragraph>
//                   Located in the heart of New Delhi, our resort offers easy access to historical landmarks, vibrant markets, and exquisite cuisine.
//                 </Typography>
//                 <VibrantTypography variant="h6" gutterBottom>
//                   Nearby Attractions
//                 </VibrantTypography>
//                 <Typography variant="body2" paragraph>
//                   • India Gate (2 km)<br />
//                   • Connaught Place (1.5 km)<br />
//                   • Lodhi Gardens (3 km)<br />
//                   • Humayun's Tomb (5 km)
//                 </Typography>
//                 <StyledButton
//                   variant="contained"
//                   startIcon={<DirectionsIcon />}
//                   fullWidth
//                   sx={{ mb: 2 }}
//                   onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${center[0]},${center[1]}`, '_blank')}
//                 >
//                   Get Directions
//                 </StyledButton>
//                 <StyledButton
//                   variant="outlined"
//                   startIcon={<NearMeIcon />}
//                   fullWidth
//                   sx={{color:"white"}}
//                   onClick={() => window.open('https://www.tripadvisor.in/Attractions-g304551-Activities-New_Delhi_National_Capital_Territory_of_Delhi.html', '_blank')}
//                 >
//                   Explore Nearby
//                 </StyledButton>
//               </CardContent>
//             </StyledCard>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default InteractiveMap;


import React from "react";
import { Button, Card, CardContent, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';
import NearMeIcon from '@mui/icons-material/NearMe';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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

const InteractiveMap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Coordinates for Delhi, India
  const center = [28.6139, 77.2090];

  return (
    <Box sx={{ 
      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 100%)`,
      padding: theme.spacing(4),
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    }}>
      <Container maxWidth="lg">
        <VibrantTypography variant={isMobile ? "h4" : "h2"} gutterBottom align="center" sx={{ mb: 6 }}>
          Find Us in Delhi
        </VibrantTypography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <StyledCard>
              <Box height="400px" width="100%">
                <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={center}>
                    <Popup>
                      Luxe Resort & Spa, Delhi
                    </Popup>
                  </Marker>
                </MapContainer>
              </Box>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <VibrantTypography variant="h5" gutterBottom>
                  Luxe Resort & Spa, Delhi
                </VibrantTypography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography>123 Luxury Lane, New Delhi, 110001</Typography>
                </Box>
                <Typography variant="body2" paragraph>
                  Located in the heart of New Delhi, our resort offers easy access to historical landmarks, vibrant markets, and exquisite cuisine.
                </Typography>
                <VibrantTypography variant="h6" gutterBottom>
                  Nearby Attractions
                </VibrantTypography>
                <Typography variant="body2" paragraph>
                  • India Gate (2 km)<br />
                  • Connaught Place (1.5 km)<br />
                  • Lodhi Gardens (3 km)<br />
                  • Humayun's Tomb (5 km)
                </Typography>
                <StyledButton
                  variant="contained"
                  startIcon={<DirectionsIcon />}
                  fullWidth
                  sx={{ mb: 2 }}
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${center[0]},${center[1]}`, '_blank')}
                >
                  Get Directions
                </StyledButton>
                <StyledButton
                  variant="outlined"
                  startIcon={<NearMeIcon />}
                  fullWidth
                  sx={{ color: theme.palette.primary.main }}
                  onClick={() => window.open('https://www.tripadvisor.in/Attractions-g304551-Activities-New_Delhi_National_Capital_Territory_of_Delhi.html', '_blank')}
                >
                  Explore Nearby
                </StyledButton>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InteractiveMap;
