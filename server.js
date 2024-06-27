// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectDB();

// Initialize the Express application
const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define a route to welcome users to the API
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

// Define routes for task operations
app.use("/api/v1", taskRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
