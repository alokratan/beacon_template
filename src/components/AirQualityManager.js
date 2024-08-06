import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
} from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';
import { SketchPicker } from 'react-color';
import axios from 'axios';

const AirQualityStatusManager = () => {
  const [statuses, setStatuses] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  useEffect(() => {
    fetchAirQualityStatuses();
  }, []);

  const fetchAirQualityStatuses = async () => {
    try {
      const response = await axios.get('/api/air-quality-statuses');
      setStatuses(response.data);
    } catch (error) {
      console.error('Failed to fetch air quality statuses:', error);
    }
  };

  const handleChange = (index, field, value) => {
    const updatedStatuses = [...statuses];
    updatedStatuses[index] = { ...updatedStatuses[index], [field]: value };
    setStatuses(updatedStatuses);
  };

  const handleSave = async (index) => {
    try {
      await axios.put(`/api/air-quality-statuses/${statuses[index].id}`, statuses[index]);
      setSnackbar({ open: true, message: 'Air quality status updated successfully!' });
    } catch (error) {
      console.error('Failed to update air quality status:', error);
      setSnackbar({ open: true, message: 'Failed to update air quality status.' });
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Air Quality Status Manager
      </Typography>
      <Grid container spacing={3}>
        {statuses.map((status, index) => (
          <Grid item xs={12} md={6} key={status.id}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Status {index + 1}
              </Typography>
              <TextField
                fullWidth
                label="Description"
                value={status.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                sx={{ mb: 2 }}
              />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Level</InputLabel>
                <Select
                  value={status.level}
                  onChange={(e) => handleChange(index, 'level', e.target.value)}
                >
                  <MenuItem value="Good">Good</MenuItem>
                  <MenuItem value="Moderate">Moderate</MenuItem>
                  <MenuItem value="Unhealthy">Unhealthy</MenuItem>
                  <MenuItem value="Very Unhealthy">Very Unhealthy</MenuItem>
                  <MenuItem value="Hazardous">Hazardous</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="subtitle1" gutterBottom>
                Color
              </Typography>
              <SketchPicker
                color={status.color}
                onChangeComplete={(color) => handleChange(index, 'color', color.hex)}
              />
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  startIcon={<SaveIcon />}
                  variant="contained"
                  onClick={() => handleSave(index)}
                >
                  Save
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Box>
  );
};

export default AirQualityStatusManager;