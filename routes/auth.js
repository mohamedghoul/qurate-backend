import Router from 'express';
import { register, login } from '../controllers/auth.js';

const router = Router();

// Register a user
router.post('/register', register);

// Login a user
router.post('/login', login);

export default router;