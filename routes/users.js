import Router from 'express';
import { getUser } from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

// Get a user
router.get('/:id', verifyToken, getUser);

export default router;