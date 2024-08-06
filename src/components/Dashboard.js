import React, { useState, useMemo } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  SignalCellularAlt,
  People,
  Store,
  LocalHospital,
  Hotel,
  Event,
  Warehouse,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import BeaconMap from "./BeaconMap";
import WorldMap from "./WorldMap";

// Custom theme

const Dashboard = () => {
  // Sample data - replace with your actual data

  const beaconData = [
    { name: "Retail", value: 400 },
    { name: "Hospital", value: 300 },
    { name: "Hotel", value: 200 },
    { name: "Exhibition", value: 100 },
    { name: "Warehouse", value: 50 },
  ];

  const userData = [
    { name: "Jan", users: 4000 },
    { name: "Feb", users: 3000 },
    { name: "Mar", users: 5000 },
    { name: "Apr", users: 4500 },
    { name: "May", users: 6000 },
  ];
  const beacons = [
    { name: 'Delhi Retail', type: 'Retail', lat: 28.6139, lng: 77.2090 },
    { name: 'Mumbai Hospital', type: 'Hospital', lat: 19.0760, lng: 72.8777 },
    { name: 'Bangalore Hotel', type: 'Hotel', lat: 12.9716, lng: 77.5946 },
    { name: 'Chennai Exhibition', type: 'Exhibition', lat: 13.0827, lng: 80.2707 },
    { name: 'Kolkata Warehouse', type: 'Warehouse', lat: 22.5726, lng: 88.3639 },
  ];
  const recentActivity = [
    { id: 1, user: "Ravi", action: "Entered Retail Zone", time: "2 mins ago" },
    {
      id: 2,
      user: "Priya",
      action: "Registered at Hospital",
      time: "5 mins ago",
    },
    { id: 3, user: "Amit", action: "Checked in at Hotel", time: "10 mins ago" },
    { id: 4, user: "Sneha", action: "Visited Exhibition", time: "15 mins ago" },
    { id: 5, user: "Rahul", action: "Accessed Warehouse", time: "20 mins ago" },
  ];
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // Light mode colors
                primary: { main: "#5e35b1" },
                secondary: { main: "#00897b" },
                background: { default: "#f0f4f8", paper: "#ffffff" },
                text: { primary: "#37474f" },
              }
            : {
                // Dark mode colors
                primary: { main: "#7c4dff" },
                secondary: { main: "#00bfa5" },
                background: { default: "#303030", paper: "#424242" },
                text: { primary: "#ffffff" },
              }),
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: 8,
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // ... (keep the same sample data as before)

  const chartColors = ["#5e35b1", "#00897b", "#ffa000", "#d81b60", "#43a047"];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "background.default",
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={3}>
          {/* Header */}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h1" color="primary">
              Connected World Dashboard
            </Typography>
            <IconButton onClick={toggleMode} color="inherit">
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Grid>
          {/* Beacon Overview */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom color="secondary">
                Beacon Overview
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie dataKey="value" data={beaconData} fill="#8884d8" label>
                    {beaconData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={chartColors[index % chartColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* User Statistics */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom color="secondary">
                User Statistics
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={userData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" fill="#5e35b1" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Quick Stats */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {[
                {
                  icon: <SignalCellularAlt />,
                  label: "Total Beacons",
                  value: "1,050",
                  color: "#5e35b1",
                },
                {
                  icon: <People />,
                  label: "Active Users",
                  value: "5,230",
                  color: "#00897b",
                },
                {
                  icon: <Store />,
                  label: "Retail Zones",
                  value: "400",
                  color: "#ffa000",
                },
                {
                  icon: <LocalHospital />,
                  label: "Hospitals",
                  value: "300",
                  color: "#d81b60",
                },
                {
                  icon: <Hotel />,
                  label: "Hotels",
                  value: "200",
                  color: "#43a047",
                },
                {
                  icon: <Event />,
                  label: "Exhibitions",
                  value: "100",
                  color: "#1e88e5",
                },
                {
                  icon: <Warehouse />,
                  label: "Warehouses",
                  value: "50",
                  color: "#8e24aa",
                },
              ].map((item, index) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ color: item.color, mb: 1 }}>{item.icon}</Box>
                    <Typography variant="h6" sx={{ color: item.color }}>
                      {item.value}
                    </Typography>
                    <Typography variant="body2">{item.label}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Recent Activity Table */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom color="secondary">
                Recent Activity
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>User</TableCell>
                      <TableCell>Action</TableCell>
                      <TableCell>Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentActivity.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.user}</TableCell>
                        <TableCell>{row.action}</TableCell>
                        <TableCell>{row.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom color="secondary">
                Beacon Locations
              </Typography>
              <BeaconMap beacons={beacons} />
            </Paper>
          </Grid>
        </Grid>
  
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
