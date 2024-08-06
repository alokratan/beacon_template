// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Typography, Container } from '@mui/material';

// function LandingPage() {
//   return (
//     <Container className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-center p-8">
//       <Typography variant="h2" component="h1" gutterBottom className="text-white font-bold mb-6">
//         Welcome to XYZ Hospital
//       </Typography>
//       <div className="flex gap-4 mt-8">
//         <Button
//           component={Link}
//           to="/register"
//           variant="contained"
//           color="primary"
//           size="large"
//           className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out shadow-lg"
//         >
//           Register
//         </Button>
//         <Button
//           component={Link}
//           to="/reports"
//           variant="contained"
//           color="secondary"
//           size="large"
//           className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out shadow-lg"
//         >
//           Reports
//         </Button>
//       </div>
//     </Container>
//   );
// }

// export default LandingPage;
import React from "react";
import "../assets/css/healthcarelanding.css";
import heropic from "../assets/images/hospitalheropic.jpg";
import { Link } from "react-router-dom";
import { Phone, AssignmentInd, Description } from "@mui/icons-material";

const HealthcareLanding = () => {
  return (
    <div className="healthcare-landing">
      <div className="background-pattern"></div>

      <main>
        <div className="image-section">
          <img src={heropic} alt="hero pic" className="hero-image" />
        </div>
        <div className="content-section">
          <h1>We prioritize your well-being</h1>
          <p>
            Our dedicated team of professionals is committed to providing you
            with the highest quality healthcare services.
          </p>
          <div className="button-group" style={{ marginTop: "20px" }}>
            <Link to="/contact">
              <button className="cta-button" style={{color:'black'}}>
                <Phone style={{ marginRight: "8px" ,color:'black'}} />
                Get in Touch
              </button>
            </Link>
            <Link to="/register">
              <button className="register-button" style={{color:'black'}}>
                <AssignmentInd style={{ marginRight: "8px" ,color:'black'}} />
                Register
              </button>
            </Link>
            <Link to="/reports">
              <button className="reports-button" style={{color:'black'}}>
                <Description style={{ marginRight: "8px",color:'black' }} />
                Reports
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HealthcareLanding;

// import React from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/system';
// import heropic from '../assets/images/hospitalheropic.jpg';

// const Root = styled('div')({
//   backgroundColor: '#00a3c4',
//   minHeight: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
// });

// const Navbar = styled('nav')({
//   width: '100%',
//   backgroundColor: '#005f73',
//   padding: '1rem 2rem',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// });

// const Logo = styled('div')({
//   color: '#fff',
//   fontSize: '1.5rem',
// });

// const NavLinks = styled('div')({
//   display: 'flex',
//   gap: '1rem',
// });

// const NavLink = styled('a')({
//   color: '#fff',
//   textDecoration: 'none',
//   fontSize: '1rem',
// });

// const Hero = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '2rem',
//   textAlign: 'center',
// });

// const HeroImage = styled('img')({
//   width: '100%',
//   maxWidth: '600px',
//   borderRadius: '8px',
// });

// const HeroText = styled('div')({
//   color: '#fff',
//   fontSize: '2rem',
//   margin: '1rem 0',
// });

// const HeroButton = styled(Button)({
//   marginTop: '1rem',
//   backgroundColor: '#007f91',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#005f73',
//   },
// });

// const LandingPage = () => {
//   return (
//     <Root>
//       <Navbar>
//         <Logo>Medical Company</Logo>
//         <NavLinks>
//           <NavLink href="#home">Home</NavLink>
//           <NavLink href="#services">Services</NavLink>
//           <NavLink href="#team">Our Team</NavLink>
//           <NavLink href="#contact">Contact Us</NavLink>
//         </NavLinks>
//       </Navbar>
//       <Hero>
//         <HeroImage
//           src={heropic} // replace with your image path
//           alt="Medical Team"
//         />
//         <HeroText>
//           We care about <br /> your health
//         </HeroText>
//         <HeroButton variant="contained">
//           Contact Us
//         </HeroButton>
//       </Hero>
//     </Root>
//   );
// };

// export default LandingPage;
