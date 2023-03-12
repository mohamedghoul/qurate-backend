import Router from 'express';
import { verifyToken } from '../middleware/auth.js';
import { register, login, logout } from '../controllers/auth.js';

const router = Router();

// Register a user
router.post('/register', register);

// Login a user
router.post('/login', login);

// Log a user out
router.post('/logout', verifyToken, logout);

export default router;