import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  InputAdornment,
} from '@mui/material';
import {
  Add as AddIcon,
  Bluetooth as BluetoothIcon,
  Category as CategoryIcon,
  Store as StoreIcon,
  LocationOn as LocationIcon,
  Home as AddressIcon,
} from '@mui/icons-material';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import ShopIcon from '@mui/icons-material/Shop';
import ArticleIcon from '@mui/icons-material/Article';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const BeaconForm = ({ open, handleClose, addBeacon }) => {
  const [beaconData, setBeaconData] = useState({
    beaconId: '',
    category: '',
    location: '',
    name: '',
    address: '',
    offerFromDate: '',
    offerToDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeaconData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBeacon(beaconData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <BluetoothIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        Add New Beacon
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Company</InputLabel>
                <Select
                  name="shop"
                  value={beaconData.company}
                  onChange={handleChange}
                  label="Company"
                  startAdornment={
                    <InputAdornment position="start">
                      <ShopIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Shop</InputLabel>
                <Select
                  name="shop"
                  value={beaconData.shop}
                  onChange={handleChange}
                  label="Shop"
                  startAdornment={
                    <InputAdornment position="start">
                      <ShopIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="beaconId"
                label="Beacon ID"
                value={beaconData.beaconId}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BluetoothIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={beaconData.category}
                  onChange={handleChange}
                  label="Category"
                  startAdornment={
                    <InputAdornment position="start">
                      <CategoryIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Hospital">Hospital</MenuItem>
                  <MenuItem value="Hotel">Hotel</MenuItem>
                  <MenuItem value="Exhibition">Exhibition and Fairs</MenuItem>
                  <MenuItem value="Warehouse">Warehouse</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="name"
                label="Name"
                value={beaconData.name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <StoreIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="address"
                label="Address"
                value={beaconData.address}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddressIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="location"
                label="Specific Location (if applicable)"
                value={beaconData.location}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Template</InputLabel>
                <Select
                  name="template"
                  value={beaconData.template}
                  onChange={handleChange}
                  label="Template"
                  startAdornment={
                    <InputAdornment position="start">
                      <ArticleIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                  <MenuItem value="#">#</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="offer"
                label="Offer"
                value={beaconData.offer}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalOfferIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="offerFromDate"
                label="Offer From Date"
                type="date"
                value={beaconData.offerFromDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="offerToDate"
                label="Offer To Date"
                type="date"
                value={beaconData.offerToDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" startIcon={<AddIcon />}>
            Add Beacon
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BeaconForm;