import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

// CONFIGURATION

// Dotenv for environment variables
dotenv.config();
// Express for API
const app = express();
app.use(express.json());
// Helmet for API security
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
// CORS to allow cross-origin requests
app.use(cors());
// Morgan for logging
app.use(morgan('common'));

// DATABASE

// Database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    // Start server
    app.listen(process.env.PORT, () => {
        console.log('Server running on port ' + process.env.PORT);
    });
}).catch((err) => {
    console.log('Error: ' + err);
});