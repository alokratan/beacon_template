const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 3000;

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'offersdb' // Ensure this matches your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Endpoint to fetch offer text
app.get('/api/offer', (req, res) => {
  const query = 'SELECT offer_text FROM offers LIMIT 1'; // Adjust if needed

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    if (results.length > 0) {
      res.json(results[0]); // Send the first result
    } else {
      res.status(404).send('No offer found');
    }
  });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
