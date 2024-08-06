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
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(3),
  '& .MuiTableHead-root': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiTableCell-head': {
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
  },
  '& .MuiTableBody-root .MuiTableRow-root:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    ]);
  }, []);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewUser({ name: '', email: '', role: '' });
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

      User Management
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
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Role</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
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
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                value={newUser.name}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <PersonIcon color="action" />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="email"
                label="Email Address"
                type="email"
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
                name="role"
                label="Role"
                type="text"
                fullWidth
                variant="outlined"
                value={newUser.role}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <WorkIcon color="action" />,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} style={{color:'#2c3e50'}}>Cancel</Button>
          <Button onClick={handleAddUser} variant="contained" style={{background:'#2c3e50',color:'white'}} startIcon={<AddIcon />}>
            Add User
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement;