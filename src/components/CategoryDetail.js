import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Chip,
  Box,
  IconButton,
} from '@mui/material';
import {
  Close as CloseIcon,
  Category as CategoryIcon,
  Description as DescriptionIcon,
  ToggleOn as ToggleOnIcon,
  ToggleOff as ToggleOffIcon,
} from '@mui/icons-material';

const CategoryDetail = ({ open, handleClose, category }) => {
  if (!category) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2, backgroundColor: 'primary.main', color: 'white' }}>
        <Box display="flex" alignItems="center">
          <CategoryIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Category Details: {category.name}
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
      <DialogContent dividers>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <CategoryIcon sx={{ mr: 1 }} /> Name:
          </Typography>
          <Typography variant="body1">{category.name}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <DescriptionIcon sx={{ mr: 1 }} /> Description:
          </Typography>
          <Typography variant="body1">{category.description}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            {category.status === 'Active' ? <ToggleOnIcon sx={{ mr: 1 }} color="success" /> : <ToggleOffIcon sx={{ mr: 1 }} color="error" />} Status:
          </Typography>
          <Chip
            label={category.status}
            color={category.status === 'Active' ? 'success' : 'default'}
            variant="outlined"
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2, backgroundColor: 'background.default' }}>
        <Button onClick={handleClose} variant="contained" startIcon={<CloseIcon />}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryDetail;