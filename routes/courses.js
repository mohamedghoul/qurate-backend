import Router from 'express';
import { getCourses, getCourseByCode, getCourseById } from '../controllers/courses.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

// Get all courses
router.get('/', verifyToken, getCourses);

// Get a course by code
router.get('/:code', verifyToken, getCourseByCode);

// Get a course by id
router.get('/id/:id', verifyToken, getCourseById);

export default router;