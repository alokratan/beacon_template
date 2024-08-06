import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFAA33',
  color: 'black',
  [theme.breakpoints.down('md')]: {
    minHeight: '80px',
  },
}));

const BoldTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto, Arial, sans-serif',
  fontWeight: 700,
  letterSpacing: '0.02em',
}));

const Header = ({ beaconInfo }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { name: 'Menu 1', icon: <MenuIcon /> },
    { name: 'Menu 2', icon: <MenuIcon /> },
    { name: 'Menu 3', icon: <MenuIcon /> },
  ];

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar sx={{ minHeight: { xs: '80px', md: '80px' } }}>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'center' },
            }}
          >
            <BoldTypography variant="h5" component="div" sx={{ fontSize: '24px', marginBottom: '4px' }}>
              Beacon: {beaconInfo.location}
            </BoldTypography>
            <BoldTypography variant="subtitle2" component="div" sx={{ fontSize: '12px' }}>
              IMEI: {beaconInfo.imei} | Lat: {beaconInfo.lat}, Lng: {beaconInfo.lng}
            </BoldTypography>
          </Box>

          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </StyledAppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: '#003366',
            color: 'white',
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon sx={{color:'white'}}/>
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={handleDrawerClose}>
              <ListItemIcon sx={{color:'white'}}>{item.icon}</ListItemIcon>
              <ListItemText 
                primary={
                  <BoldTypography sx={{ fontSize: '16px' }}>
                    {item.name}
                  </BoldTypography>
                } 
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;