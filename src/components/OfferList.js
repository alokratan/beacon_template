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
  Chip,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';
import OfferForm from './OfferForm';

const OfferList = () => {
  const [offers, setOffers] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get('/api/offers');
      setOffers(response.data);
    } catch (error) {
      console.error('Failed to fetch offers:', error);
    }
  };

  const handleAddOffer = () => {
    setSelectedOffer(null);
    setOpenForm(true);
  };

  const handleEditOffer = (offer) => {
    setSelectedOffer(offer);
    setOpenForm(true);
  };

  const handleDeleteOffer = async (id) => {
    if (window.confirm('Are you sure you want to delete this offer?')) {
      try {
        await axios.delete(`/api/offers/${id}`);
        fetchOffers();
      } catch (error) {
        console.error('Failed to delete offer:', error);
      }
    }
  };

  const handleSaveOffer = async (offerData) => {
    try {
      if (selectedOffer) {
        await axios.put(`/api/offers/${selectedOffer.id}`, offerData);
      } else {
        await axios.post('/api/offers', offerData);
      }
      fetchOffers();
      setOpenForm(false);
    } catch (error) {
      console.error('Failed to save offer:', error);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Offer Management
      </Typography>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={handleAddOffer}
        sx={{ mb: 2 }}
      >
        Add New Offer
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Valid Until</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {offers.map((offer) => (
              <TableRow key={offer.id}>
                <TableCell>{offer.title}</TableCell>
                <TableCell>{offer.description}</TableCell>
                <TableCell>{offer.category}</TableCell>
                <TableCell>{new Date(offer.validUntil).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Chip
                    label={offer.status}
                    color={offer.status === 'Active' ? 'success' : 'default'}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditOffer(offer)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteOffer(offer.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <OfferForm
        open={openForm}
        handleClose={() => setOpenForm(false)}
        handleSave={handleSaveOffer}
        offer={selectedOffer}
      />
    </Box>
  );
};

export default OfferList;