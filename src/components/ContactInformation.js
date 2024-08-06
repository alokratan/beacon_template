import React from "react";
import { Button, Card, CardContent, Grid, TextField, Typography, useTheme, useMediaQuery, IconButton, Divider } from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// import { Divider, Grid } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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

const ContactInformation = () => {
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
          Get in Touch
        </VibrantTypography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <StyledCard>
  <CardContent>
    <VibrantTypography variant="h5" gutterBottom>
      Contact Information
    </VibrantTypography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LocationOnIcon sx={{ fontSize: 40, mr: 2, color: theme.palette.primary.main }} />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">Our Address</Typography>
          <Typography>123 Luxury Lane, Paradise City, 12345</Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Located in the heart of Paradise City, just 5 minutes from the beach.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PhoneIcon sx={{ fontSize: 40, mr: 2, color: theme.palette.primary.main }} />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">Phone Numbers</Typography>
          <Typography>Reservations: +1 (123) 456-7890</Typography>
          <Typography>Customer Service: +1 (123) 456-7891</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <EmailIcon sx={{ fontSize: 40, mr: 2, color: theme.palette.primary.main }} />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">Email Us</Typography>
          <Typography>Reservations: reservations@luxeresort.com</Typography>
          <Typography>General Inquiries: info@luxeresort.com</Typography>
        </Box>
      </Box>
    </Box>
    <Divider sx={{ my: 3 }} />
    <VibrantTypography variant="h6" gutterBottom>
      Follow Us
    </VibrantTypography>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <IconButton color="primary" aria-label="facebook" size="large">
          <FacebookIcon fontSize="inherit" />
        </IconButton>
        <IconButton color="primary" aria-label="twitter" size="large">
          <TwitterIcon fontSize="inherit" />
        </IconButton>
        <IconButton color="primary" aria-label="instagram" size="large">
          <InstagramIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<WhatsAppIcon />}
        sx={{ borderRadius: 20 }}
      >
        Chat on WhatsApp
      </Button>
    </Box>
  
  </CardContent>
</StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <VibrantTypography variant="h5" gutterBottom>
                  Send Us a Message
                </VibrantTypography>
                <TextField fullWidth label="Name" margin="normal" variant="outlined" />
                <TextField fullWidth label="Email" margin="normal" variant="outlined" />
                <TextField fullWidth label="Message" multiline rows={4} margin="normal" variant="outlined" />
                <StyledButton variant="contained" fullWidth sx={{ mt: 2 }}>
                  Send Message
                </StyledButton>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactInformation;