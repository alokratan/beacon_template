import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Typography,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from '@mui/material';
import { Visibility, GetApp, Sort } from '@mui/icons-material';

function ReportsPage() {
  const [reports, setReports] = useState([
    { id: 1, date: '2024-07-01', title: 'Blood Test' },
    { id: 2, date: '2024-06-15', title: 'X-Ray' },
    { id: 3, date: '2024-05-30', title: 'MRI Scan' },
    // ... add more reports
  ]);

  const sortReports = () => {
    const sortedReports = [...reports].sort((a, b) => new Date(b.date) - new Date(a.date));
    setReports(sortedReports);
  };

  return (
    <Container maxWidth="md" className="mt-8" style={{margin:'20px auto 160px auto'}}>
      <Typography variant="h4" component="h2" gutterBottom style={{ color: '#FFAA33', textAlign: 'center' }}>
        Patient Reports
      </Typography>
      <hr style={{ border: '3px solid #FFAA33', margin: '20px 0' }} />
      <Button
        startIcon={<Sort />}
        onClick={sortReports}
        variant="outlined"
        className="mb-4"
        style={{ borderColor: '#FFAA33', color: 'black',marginBottom:'10px' }}
      >
        Sort by Date
      </Button>
      <TableContainer component={Paper} style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: '8px 16px 8px 16px', borderRight: '1px solid #ddd', color: 'black', fontWeight: 'bold' }}>Title</TableCell>
              <TableCell sx={{ padding: '8px 16px 8px 16px', borderRight: '1px solid #ddd', color: 'black', fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ padding: '8px 16px 8px 16px', color: 'black', fontWeight: 'bold' }} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report, index) => (
              <TableRow
                key={report.id}
                sx={{ backgroundColor: index % 2 === 0 ? '#f1f1f1' : '#ffffff' }} // Alternate row shading
              >
                <TableCell sx={{ padding: '8px 16px 8px 16px', borderRight: '1px solid #ddd' }}>{report.title}</TableCell>
                <TableCell sx={{ padding: '8px 16px 8px 16px', borderRight: '1px solid #ddd' }}>{report.date}</TableCell>
                <TableCell sx={{ padding: '8px 16px 8px 16px' }} align="right">
                  <IconButton edge="end" aria-label="view">
                    <Visibility style={{ color: '#FFAA33' }} />
                  </IconButton>
                  <IconButton edge="end" aria-label="download">
                    <GetApp style={{ color: '#FFAA33' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box textAlign="center" mt={4}>
        <Button component={Link} to="/" variant="text" style={{ color: 'black' }}>
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}

export default ReportsPage;
