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
import WorkIcon from '@mui/icons-material/Work';

const ContactDetail = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newUser, setNewUser] = useState({ fullname: '', gender: '', email: '', contactnumber: '', address: '' });

  useEffect(() => {
    setUsers([
      { id: 1, fullname: 'John Doe', gender: 'Male', email: 'john@example.com', contactnumber: '1234567890', address: '123 Main St' },
      { id: 2, fullname: 'Jane Doe', gender: 'Female', email: 'jane@example.com', contactnumber: '0987654321', address: '456 Elm St' },
    ]);
  }, []);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewUser({ fullname: '', gender: '', email: '', contactnumber: '', address: '' });
  };

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    handleCloseDialog();
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
        <PersonIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 36 }} />
        Contact Detail
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpenDialog}
        sx={{ mb: 2, backgroundColor: '#2c3e50', '&:hover': { backgroundColor: 'black' } }}
      >
        Add New User
      </Button>

      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#34495e' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Full Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Gender</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Contact Number</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Address</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.fullname}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.contactnumber}</TableCell>
                <TableCell>{user.address}</TableCell>
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
          Add New User
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
                value={newUser.fullname}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <PersonIcon color="action" />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="gender"
                label="Gender"
                type="text"
                fullWidth
                variant="outlined"
                value={newUser.gender}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="email"
                label="Email"
                type="text"
                fullWidth
                variant="outlined"
                value={newUser.email}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <EmailIcon color="action" />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="contactnumber"
                label="Contact Number"
                type="text"
                fullWidth
                variant="outlined"
                value={newUser.contactnumber}
                onChange={handleInputChange}
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
                value={newUser.address}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} style={{ color: '#2c3e50' }}>Cancel</Button>
          <Button onClick={handleAddUser} variant="contained" style={{ background: '#2c3e50', color: 'white' }} startIcon={<AddIcon />}>
            Add User
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactDetail;
