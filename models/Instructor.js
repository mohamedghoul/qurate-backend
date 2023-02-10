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
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    title: {
        type: String,
        required: true,
    },
    office: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        match: [
            /^\(\+974\) \d{4} \d{4}$/,
            "Please enter a valid phone number",
        ],
    },
    image: {
        type: String,
        required: true,
    },
});

const Instructor = mongoose.model("Instructor", instructorSchema);
export default Instructor;