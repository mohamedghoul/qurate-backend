import Instructor from "../models/Instructor.js";

// Get all instructors
export const getInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.find();
        res.status(200).json(instructors);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Get an instructor
export const getInstructor = async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id);
        res.status(200).json(instructor);
    } catch (err) {
        res.status(500).json(err);
    }
}