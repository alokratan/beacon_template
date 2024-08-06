import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  IconButton,
  Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newCompany, setNewCompany] = useState({ fullname: '', address: '', location: '', email: '', mobileNumber: '', contactPerson: '' });

  useEffect(() => {
    setCompanies([
      { id: 1, fullname: 'Redtape', address: '123 Street', location: 'CityA', email: 'contact@redtape.com', mobileNumber: '1234567890', contactPerson: 'John Doe' },
      { id: 2, fullname: 'Reebok', address: '456 Avenue', location: 'CityB', email: 'info@reebok.com', mobileNumber: '0987654321', contactPerson: 'Jane Smith' },
    ]);
  }, []);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewCompany({ fullname: '', address: '', location: '', email: '', mobileNumber: '', contactPerson: '' });
  };

  const handleInputChange = (e) => {
    setNewCompany({ ...newCompany, [e.target.name]: e.target.value });
  };

  const handleAddCompany = () => {
    setCompanies([...companies, { ...newCompany, id: companies.length + 1 }]);
    handleCloseDialog();
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
        <PersonIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 36 }} />
        Company Management
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpenDialog}
        sx={{ mb: 2, backgroundColor: '#2c3e50', '&:hover': { backgroundColor: 'black' } }}
      >
        Add New Company
      </Button>

      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#34495e' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Full Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Address</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Location</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Mobile Number</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Contact Person</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.fullname}</TableCell>
                <TableCell>{company.address}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>{company.email}</TableCell>
                <TableCell>{company.mobileNumber}</TableCell>
                <TableCell>{company.contactPerson}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit">
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#2c3e50', color: 'white' }}>
          <AddIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Add New Company
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                name="fullname"
                label="Full Name"
                type="text"
                fullWidth
                variant="outlined"
                value={newCompany.fullname}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <PersonIcon color="action" />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="address"
                label="Address"
                type="text"
                fullWidth
                variant="outlined"
                value={newCompany.address}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <LocationOnIcon color="action" />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="location"
                label="Location"
                type="text"
                fullWidth
                variant="outlined"
                value={newCompany.location}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <LocationOnIcon color="action" />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={newCompany.email}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <EmailIcon color="action" />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="mobileNumber"
                label="Mobile Number"
                type="text"
                fullWidth
                variant="outlined"
                value={newCompany.mobileNumber}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <PhoneIcon color="action" />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="contactPerson"
                label="Contact Person"
                type="text"
                fullWidth
                variant="outlined"
                value={newCompany.contactPerson}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <PersonIcon color="action" />,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} style={{ color: '#2c3e50' }}>Cancel</Button>
          <Button onClick={handleAddCompany} variant="contained" style={{ background: '#2c3e50', color: 'white' }} startIcon={<AddIcon />}>
            Add Company
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CompanyManagement;
