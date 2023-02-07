import Router from 'express';
import { getInstructors, getInstructor } from '../controllers/instructors.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

// Get all instructors
router.get('/', verifyToken, getInstructors);

// Get an instructor
router.get('/:id', verifyToken, getInstructor);

export default router;