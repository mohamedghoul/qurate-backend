import Router from 'express';
import { getCourses, getCourse } from '../controllers/courses.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

// Get all courses
router.get('/', verifyToken, getCourses);

// Get a course by code
router.get('/:code', verifyToken, getCourse);

export default router;