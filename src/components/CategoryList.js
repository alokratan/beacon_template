import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Chip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Category as CategoryIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import CategoryForm from './CategoryForm';
import CategoryDetail from './CategoryDetail';

// Dummy data
const dummyCategories = [
  { id: 1, name: 'Electronics', description: 'Electronic devices and accessories', status: 'Active' },
  { id: 2, name: 'Clothing', description: 'Apparel and fashion items', status: 'Active' },
  { id: 3, name: 'Books', description: 'Print and digital books', status: 'Inactive' },
  { id: 4, name: 'Home & Garden', description: 'Home decor and gardening supplies', status: 'Active' },
  { id: 5, name: 'Sports', description: 'Sporting goods and equipment', status: 'Active' },
];

const CategoryList = () => {
  const [categories, setCategories] = useState(dummyCategories);
  const [openForm, setOpenForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);

  const handleAddCategory = () => {
    setSelectedCategory(null);
    setOpenForm(true);
  };

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setOpenForm(true);
  };

  const handleViewCategory = (category) => {
    setSelectedCategory(category);
    setOpenDetail(true);
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(category => category.id !== id));
    }
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setSelectedCategory(null);
  };

  const handleSaveCategory = (categoryData) => {
    if (selectedCategory) {
      setCategories(categories.map(cat => cat.id === selectedCategory.id ? {...cat, ...categoryData} : cat));
    } else {
      setCategories([...categories, {...categoryData, id: categories.length + 1}]);
    }
    handleCloseForm();
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
      <CategoryIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 36 }} />

        Category Management
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddCategory}
        sx={{ mb: 2, backgroundColor: '#2c3e50', '&:hover': { backgroundColor: 'black' } }}
      >
        Add New Category
      </Button>

      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#34495e' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Description</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id} hover>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>
                  <Chip 
                    label={category.status} 
                    color={category.status === 'Active' ? 'success' : 'default'}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="View">
                    <IconButton onClick={() => handleViewCategory(category)} color="info">
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEditCategory(category)} color="primary">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDeleteCategory(category.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CategoryForm
        open={openForm}
        handleClose={handleCloseForm}
        handleSave={handleSaveCategory}
        category={selectedCategory}
      />
      <CategoryDetail
        open={openDetail}
        handleClose={() => setOpenDetail(false)}
        category={selectedCategory}
      />
    </Box>
  );
};

export default CategoryList;