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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  IconButton,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import ArticleIcon from '@mui/icons-material/Article';
import ShopIcon from '@mui/icons-material/Shop';

const AssignTemplate = () => {
  const [assignTemplates, setAssignTemplates] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newAssignTemplate, setNewAssignTemplate] = useState({
    company: '',
    shop: '',
    beacon: '',
    template: '',
  });

  // useEffect(() => {
  //   // Initial dummy data
  //   setAssignTemplates([
  //     { id: 1, company: 'Reebok', shop: '001', beacon: 'BCN001', template: 'Template A' },
  //     { id: 2, company: 'Redtape', shop: '002', beacon: 'BCN002', template: 'Template B' },
  //   ]);
  // }, []);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewAssignTemplate({ company: '', shop: '', beacon: '', template: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAssignTemplate((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddAssignTemplate = () => {
    setAssignTemplates((prevTemplates) => [
      ...prevTemplates,
      { ...newAssignTemplate, id: prevTemplates.length + 1 },
    ]);
    handleCloseDialog();
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
        <PersonIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 36 }} />
        Assign Template
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpenDialog}
        sx={{ mb: 2, backgroundColor: '#2c3e50', '&:hover': { backgroundColor: 'black' } }}
      >
        Add New Assign Template
      </Button>

      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#34495e' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Company</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Shop</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Beacon Id</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Template</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignTemplates.map((template) => (
              <TableRow key={template.id}>
                <TableCell>{template.company}</TableCell>
                <TableCell>{template.shop}</TableCell>
                <TableCell>{template.beacon}</TableCell>
                <TableCell>{template.template}</TableCell>
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
          Add New Assign Template
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Company</InputLabel>
                <Select
                  name="company"
                  value={newAssignTemplate.company}
                  onChange={handleInputChange}
                  label="Company"
                  startAdornment={
                    <InputAdornment position="start">
                      <CorporateFareIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="Reebok">Reebok</MenuItem>
                  <MenuItem value="Redtape">Redtape</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Shop</InputLabel>
                <Select
                  name="shop"
                  value={newAssignTemplate.shop}
                  onChange={handleInputChange}
                  label="Shop"
                  startAdornment={
                    <InputAdornment position="start">
                      <ShopIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="001">001</MenuItem>
                  <MenuItem value="002">002</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Beacon Id</InputLabel>
                <Select
                  name="beacon"
                  value={newAssignTemplate.beacon}
                  onChange={handleInputChange}
                  label="Beacon Id"
                  startAdornment={
                    <InputAdornment position="start">
                      <BluetoothIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="BCN001">BCN001</MenuItem>
                  <MenuItem value="BCN002">BCN002</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Template</InputLabel>
                <Select
                  name="template"
                  value={newAssignTemplate.template}
                  onChange={handleInputChange}
                  label="Template"
                  startAdornment={
                    <InputAdornment position="start">
                      <ArticleIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="Template A">Template A</MenuItem>
                  <MenuItem value="Template B">Template B</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} style={{ color: '#2c3e50' }}>Cancel</Button>
          <Button onClick={handleAddAssignTemplate} variant="contained" style={{ background: '#2c3e50', color: 'white' }} startIcon={<AddIcon />}>
            Add Assign Template
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AssignTemplate;