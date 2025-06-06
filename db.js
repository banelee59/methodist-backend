import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { // Use the environment variable
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;