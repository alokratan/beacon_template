import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import LogoutIcon from "@mui/icons-material/Logout";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { styled } from "@mui/material/styles";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AddBeacon from "./AddBeacon";
import CategoryList from "./CategoryList";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import AssignTemplate from "./AssignTemplate";
import { Person } from "@mui/icons-material";
import ContactDetail from "./ContactDetail";
import ShopManagement from "./ShopManagement";
import CompanyManagement from "./CompanyManagement";
import TemplateSearch from "./TemplateSearch";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  minHeight: 64,
}));

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    {
      text: "Beacon Management",
      icon: <AddIcon />,
      path: "#",
      subMenu: [
        { text: "Add Beacon", icon: <AddIcon />, path: "/add-beacon" },
      ],
    },
    {
      text: "Masters",
      icon: <CategoryIcon />,
      path: "#",
      subMenu: [
        { text: "Contact Detail", path: "/contact-detail" },
        { text: "Shop Management", path: "/shop-management" },
        { text: "Company Management", path: "/company-management" },
        { text: "Assign Template", path: "/assign-template" },
        { text: "Template Search", path: "/template-search" },
      ],
    },
    { text: "View Beacons", icon: <ViewListIcon />, path: "/view-beacons" },
    { text: "User Management", icon: <Person />, path: "/user-management" },
    { text: "Manage Categories", icon: <CategoryIcon />, path: "/categories" },
    { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#2c3e50' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Beacon Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#2c3e50',
            color: 'white',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            item.subMenu ? (
              <React.Fragment key={item.text}>
                <ListItem button onClick={() => handleSubMenuToggle(index)}>
                  <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
                {openSubMenu === index && item.subMenu.map((subItem) => (
                  <ListItem key={subItem.text} disablePadding sx={{ pl: 4 }}>
                    <ListItemButton
                      component={Link}
                      to={subItem.path}
                      selected={location.pathname === subItem.path}
                      onClick={() => setOpen(false)}
                    >
                      <ListItemText primary={subItem.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </React.Fragment>
            ) : (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            )
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-beacon" element={<AddBeacon />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view-beacons" element={<h1>View Beacons (to be implemented)</h1>} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/logout" element={<h1>Logout functionality to be implemented</h1>} />
          <Route path="/contact-detail" element={<ContactDetail />} />
          <Route path="/shop-management" element={<ShopManagement />} />
          <Route path="/company-management" element={<CompanyManagement />} />
          <Route path="/assign-template" element={<AssignTemplate />} />
          <Route path="/template-search" element={<TemplateSearch />} />
        </Routes>
      </Main>
    </Box>
  );
};

export default SideBar;
