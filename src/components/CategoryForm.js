import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import {
  Close as CloseIcon,
  Category as CategoryIcon,
  Description as DescriptionIcon,
  ToggleOn as ToggleOnIcon,
  ToggleOff as ToggleOffIcon,
} from '@mui/icons-material';

const CategoryForm = ({ open, handleClose, handleSave, category }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'Active',
  });

  useEffect(() => {
    if (category) {
      setFormData(category);
    } else {
      setFormData({
        name: '',
        description: '',
        status: 'Active',
      });
    }
  }, [category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#2c3e50', color: 'white' }}>
        <Box display="flex" alignItems="center">
          <CategoryIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {category ? 'Edit Category' : 'Add New Category'}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField
            fullWidth
            margin="normal"
            name="name"
            label="Category Name"
            value={formData.name}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: <CategoryIcon color="action" sx={{ mr: 1 }} />,
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={3}
            InputProps={{
              startAdornment: <DescriptionIcon color="action" sx={{ mr: 1 }} />,
            }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              startAdornment={
                formData.status === 'Active' ? 
                <ToggleOnIcon color="success" sx={{ mr: 1 }} /> : 
                <ToggleOffIcon color="error" sx={{ mr: 1 }} />
              }
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2, backgroundColor: 'background.default' }}>
          <Button onClick={handleClose} style={{color:'#2c3e50'}} startIcon={<CloseIcon />}>
            Cancel
          </Button>
          <Button type="submit" variant="contained"style={{background:'#2c3e50',color:'white'}} startIcon={<CategoryIcon />}>
            {category ? 'Update' : 'Add'} Category
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CategoryForm;