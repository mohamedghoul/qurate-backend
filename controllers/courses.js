import Course from "../models/Course.js";

// Get all courses
export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Get a course by code
export const getCourseByCode = async (req, res) => {
    try {
        const course = await Course.find({ code: req.params.code });
        res.status(200).json(course);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Get a course by id
export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.status(200).json(course);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}