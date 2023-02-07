import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[\w-\.]+@qu\.edu\.qa$/,
            "Please enter a valid QU email address",
        ],
    },
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    title: {
        type: String,
        required: true,
        enum: ["Professor", "Assistant Professor", "Associate Professor", "Lecturer", "Teaching Assistant"],
    },
    department: {
        type: String,
        required: true,
        enum: ["Computer Science", "Computer Engineering"],
    },
    phone: {
        type: String,
        required: true,
        match: [
            /^(\+974)?(3|5|6|7|9)\d{7}$/,
            "Please enter a valid Qatari phone number",
        ],
    },
    office: {
        type: String,
        required: true,
    },
});

const Instructor = mongoose.model("Instructor", instructorSchema);
export default Instructor;