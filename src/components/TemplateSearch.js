import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EditableTemplate = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [openPreviewDialog, setOpenPreviewDialog] = useState(false);
  const [assignedTemplate, setAssignedTemplate] = useState(null);

  const templates = [
    { name: 'Marketing Template', category: 'Business', url: 'https://demo.templatesjungle.com/foodfarm/?_gl=1*omzfmz*_ga*ODY4MTg5MzIwLjE3MjEzMDI2MzE.*_ga_LNL7938ZLV*MTcyMjQxODI2Mi43LjEuMTcyMjQxODk4NC4wLjAuMA..' },
    { name: 'Portfolio Template', category: 'Personal', url: 'https://templatesjungle.com/demo/?url=https://demo.templatesjungle.com/julia/&purl=https://templatesjungle.gumroad.com/l/julia-onepage-portfolio' },
    { name: 'E-commerce Template', category: 'Business', url: 'https://demo.templatesjungle.com/supple/?_gl=1*11t44l3*_ga*ODY4MTg5MzIwLjE3MjEzMDI2MzE.*_ga_LNL7938ZLV*MTcyMjQxODI2Mi43LjEuMTcyMjQyMDE3Ny4wLjAuMA..' },
    { name: 'Blog Template', category: 'Personal', url: 'https://templatesjungle.com/demo/?url=https://demo.templatesjungle.com/jessica/&purl=https://templatesjungle.gumroad.com/l/jessica-portfolio-html-template' },
    { name: 'Event Template', category: 'Event', url: 'https://templatesjungle.com/demo/?url=https://demo.templatesjungle.com/fitphysique/&purl=https://templatesjungle.gumroad.com/l/fitphysique-free-responsive-html-template' },
    { name: 'Resume Template', category: 'Personal', url: 'https://templatesjungle.com/demo/?url=https://templatesjungle.com/demo/?url=https://demo.templatesjungle.com/modish/&purl=https://templatesjungle.gumroad.com/l/modish-clothing-ecommerce-website-template&purl=https://templatesjungle.gumroad.com/l/modish-clothing-ecommerce-website-template' },
    { name: 'Landing Page Template', category: 'Business', url: 'https://templatesjungle.com/demo/?url=https://demo.templatesjungle.com/floorer/&purl=https://templatesjungle.gumroad.com/l/floorer-flooring-carpeting-bootstrap-html-website-template' },
  ];

  const categories = [
    'Business',
    'Personal',
    'Event',
    'Technology',
    'Education',
    'Healthcare',
    'Travel',
    'Food',
    'Health',
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
    setOpenPreviewDialog(true);
  };

  const handleClosePreviewDialog = () => {
    setOpenPreviewDialog(false);
    setSelectedTemplate(null);
  };

  const handleAssignTemplate = (template) => {
    setAssignedTemplate(template);
    alert(`Template "${template.name}" has been assigned.`);
  };

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory ? template.category === selectedCategory : true;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
        Template Search
      </Typography>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          variant="outlined"
          placeholder="Search templates..."
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ mr: 2, flex: 1 }}
        />
        <TextField
          select
          variant="outlined"
          value={selectedCategory}
          onChange={handleCategoryChange}
          sx={{ flex: 1 }}
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#34495e' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Template Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTemplates.map((template, index) => (
              <TableRow key={index}>
                <TableCell>{template.name}</TableCell>
                <TableCell>{template.category}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleTemplateClick(template)}>
                    View
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleAssignTemplate(template)} sx={{ ml: 2 }}>
                    Assign
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={openPreviewDialog}
        onClose={handleClosePreviewDialog}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle>
          {selectedTemplate?.name}
          <IconButton
            aria-label="close"
            onClick={handleClosePreviewDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <iframe
            src={selectedTemplate?.url}
            title={selectedTemplate?.name}
            width="100%"
            height="500px"
            style={{ border: 'none' }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default EditableTemplate;
