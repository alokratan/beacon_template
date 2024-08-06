// import React from 'react';
// import { Box } from '@mui/material';
// import Footer from './components/Footer';
// import AddBeacon from './components/AddBeacon';
// import Header from './components/Header';

// const App = () => {
//   const beaconInfo = {
//     location: 'Main Street',
//     imei: '123456789012345',
//     lat: '40.7128',
//     lng: '-74.0060',
//   };

//   const footerConfig = {
//     whatsapp: { enabled: true },
//     instagram: { enabled: false }, // This will hide the Instagram button
//     facebook: { enabled: true },
//     linkedin: { enabled: true },
//     copyLink: { enabled: true },
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header beaconInfo={beaconInfo} />
//       {/* <Box component="main" sx={{ flexGrow: 1 }}>
//         <AddBeacon />
//       </Box> */}
//       <Footer config={footerConfig} />
//     </Box>
//   );
// };

// export default App;

//------------------------------------------------------------------------------------------------------//

// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import SideBar from './components/SideBar';

// function App() {
//   return (
//     <Router>
//       <SideBar />
//     </Router>
//   );
// }

// export default App;

//------------------------------------------------------------------------------------------------------//

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import LandingPage from './components/LandingPage';
import RegisterPage from "./components/Patientregister";
import ReportsPage from "./components/ViewPatientReport";
// import HealthcareLanding from './components/LandingPage';
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import { Box } from "@mui/system";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ShoppingLandingPage from "./components/ShoppingSite";
import NewArrivalsBanner from "./components/NewArrivalsBanner";
import WeeklyDeals from "./components/WeeklyDeals";
import Buy2Get1FreeComponent from "./components/Buy2Get1";
import HotelLandingPage from "./components/HotelSite";


const theme = createTheme();

function App() {
  const beaconInfo = {
    location: "Hotel XYZ",
    imei: "123456789012345",
    lat: "40.7128",
    lng: "-74.0060",
  };

  const footerConfig = {
    whatsapp: { enabled: true },
    instagram: { enabled: false }, // This will hide the Instagram button
    facebook: { enabled: true },
    linkedin: { enabled: true },
    copyLink: { enabled: true },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header beaconInfo={beaconInfo} />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/shop-site" element={<ShoppingLandingPage />} />
            <Route path="/new-arrivals" element={<NewArrivalsBanner />} />
            <Route path="/weekly-deals" element={<WeeklyDeals />} />
            <Route path="/buy2get1" element={<Buy2Get1FreeComponent />} />
            <Route path="/hotel-site" element={<HotelLandingPage />} />
          </Routes>
        </Router>
        <Banner />
        <Footer config={footerConfig} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
