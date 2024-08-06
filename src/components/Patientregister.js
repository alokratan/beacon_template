import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box, InputAdornment } from '@mui/material';
import { AccountCircle, Email, Phone, CalendarToday } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FFAA33', // Default border color
            },
            '&:hover fieldset': {
              borderColor: '#005050', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFAA33', // Border color when focused
              borderWidth: '2px', // Thicker border when focused
            },
          },
          marginBottom: '1rem', // Margin between input fields
        },
      },
    },
  },
});

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" className="mt-8">
        <Typography variant="h4" component="h2" gutterBottom style={{ color: '#FFAA33', textAlign: 'center',margin:'20px auto 20px auto' }}>
          Patient Registration
        </Typography>
      <hr style={{ border: '3px solid #FFAA33', margin: '20px 0' }} />

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            padding: '2rem',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem', // Gap between form elements
          }}
        >
          <TextField
            name="name"
            label="Full Name"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle style={{ color: '#FFAA33' }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email style={{ color: '#FFAA33' }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="phone"
            label="Phone Number"
            type="tel"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone style={{ color: '#FFAA33' }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="dob"
            label="Date of Birth"
            type="date"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarToday style={{ color: '#FFAA33' }} />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" size="large" style={{ backgroundColor: '#FFAA33', color: 'black' }}>
            Register
          </Button>
        </Box>
        <Button component={Link} to="/" variant="text" className="mt-4" style={{ color: 'black', display: 'block', margin: 'auto' }}>
          Back to Home
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default RegisterPage;
