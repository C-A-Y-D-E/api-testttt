const express = require('express');
const app = express();
const cors = require('cors')


app.use(express.json());
app.use(cors())

// In-memory storage
let storedData = [];

// POST endpoint that stores the request body
app.post('/echo', (req, res) => {
    try {
        // Store the request body along with a timestamp
        const dataWithTimestamp = {
            ...req.body,
            timestamp: new Date(),
        };
        storedData.push(dataWithTimestamp);
        
        // Send back confirmation
        res.json({ 
            message: 'Data stored successfully',
            data: dataWithTimestamp 
        });
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Failed to store data' });
    }
});

// GET endpoint that returns all stored data
app.get('/echo', (req, res) => {
    try {
        res.json(storedData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
