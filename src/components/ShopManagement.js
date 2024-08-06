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

const ShopManagement = () => {
  const [shops, setShops] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newShop, setNewShop] = useState({ companyname: '', shopname: '', shopcode: '' });

  useEffect(() => {
    setShops([
      { id: 1, companyname: 'Redtape', shopname: 'ShoeShopee', shopcode: '05' },
      { id: 2, companyname: 'Reebok', shopname: 'Reebok_Retail', shopcode: '06' },
    ]);
  }, []);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewShop({ companyname: '', shopname: '', shopcode: '' });
  };

  const handleInputChange = (e) => {
    setNewShop({ ...newShop, [e.target.name]: e.target.value });
  };

  const handleAddShop = () => {
    setShops([...shops, { ...newShop, id: shops.length + 1 }]);
    handleCloseDialog();
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
        <PersonIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 36 }} />
        Shop Management
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpenDialog}
        sx={{ mb: 2, backgroundColor: '#2c3e50', '&:hover': { backgroundColor: 'black' } }}
      >
        Add New Shop
      </Button>

      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#34495e' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Company Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Shop Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Shop Code</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shops.map((shop) => (
              <TableRow key={shop.id}>
                <TableCell>{shop.companyname}</TableCell>
                <TableCell>{shop.shopname}</TableCell>
                <TableCell>{shop.shopcode}</TableCell>
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
          Add New Shop
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                name="companyname"
                label="Company Name"
                type="text"
                fullWidth
                variant="outlined"
                value={newShop.companyname}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <PersonIcon color="action" />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="shopname"
                label="Shop Name"
                type="text"
                fullWidth
                variant="outlined"
                value={newShop.shopname}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <EmailIcon color="action" />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="shopcode"
                label="Shop Code"
                type="text"
                fullWidth
                variant="outlined"
                value={newShop.shopcode}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <WorkIcon color="action" />,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} style={{ color: '#2c3e50' }}>Cancel</Button>
          <Button onClick={handleAddShop} variant="contained" style={{ background: '#2c3e50', color: 'white' }} startIcon={<AddIcon />}>
            Add Shop
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ShopManagement;
