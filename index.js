const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

// POST endpoint that echoes back the request body
app.post('/echo', (req, res) => {
  try {
    // Send back the request body as JSON
    res.json(req.body);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: 'Failed to process request body' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
