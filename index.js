import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import instructorRoutes from './routes/instructors.js';
import courseRoutes from './routes/courses.js';
import ratingRoutes from './routes/ratings.js';

// CONFIGURATION

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(cors());
app.use(morgan('common'));

// ROUTES

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/ratings', ratingRoutes);

// DATABASE

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server running on port ' + process.env.PORT);
    });
}).catch((err) => {
    console.log('Error: ' + err);
});