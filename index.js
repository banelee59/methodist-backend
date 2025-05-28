// app.js
import express from 'express';
import connectDB from './db.js'; // Import the MongoDB connection
import authRoutes from './routes/authRoutes.js'; // Import the auth routes
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON
app.use('/api/auth', authRoutes); // Use the auth routes

// Connect to MongoDB
connectDB(); // Call the connection function

app.get('/', (req, res) => {
    res.send('Welcome to the Methodist Backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});