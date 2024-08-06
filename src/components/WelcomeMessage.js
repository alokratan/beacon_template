import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  IconButton,
  Snackbar,
} from '@mui/material';
import { Save as SaveIcon, Edit as EditIcon } from '@mui/icons-material';
import axios from 'axios';

const WelcomeMessageEditor = () => {
  const [categories, setCategories] = useState([]);
  const [messages, setMessages] = useState({});
  const [editMode, setEditMode] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  useEffect(() => {
    fetchCategories();
    fetchMessages();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/welcome-messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Failed to fetch welcome messages:', error);
    }
  };

  const handleEdit = (categoryId) => {
    setEditMode({ ...editMode, [categoryId]: true });
  };

  const handleSave = async (categoryId) => {
    try {
      await axios.put(`/api/welcome-messages/${categoryId}`, {
        message: messages[categoryId],
      });
      setEditMode({ ...editMode, [categoryId]: false });
      setSnackbar({ open: true, message: 'Welcome message updated successfully!' });
    } catch (error) {
      console.error('Failed to update welcome message:', error);
      setSnackbar({ open: true, message: 'Failed to update welcome message.' });
    }
  };

  const handleChange = (categoryId, value) => {
    setMessages({ ...messages, [categoryId]: value });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome Message Editor
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} key={category.id}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {category.name}
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                value={messages[category.id] || ''}
                onChange={(e) => handleChange(category.id, e.target.value)}
                disabled={!editMode[category.id]}
              />
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                {editMode[category.id] ? (
                  <Button
                    startIcon={<SaveIcon />}
                    variant="contained"
                    onClick={() => handleSave(category.id)}
                  >
                    Save
                  </Button>
                ) : (
                  <IconButton onClick={() => handleEdit(category.id)}>
                    <EditIcon />
                  </IconButton>
                )}
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

export default WelcomeMessageEditor;