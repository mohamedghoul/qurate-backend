import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        match: [/^(CMPS|CMPE)\d{3}$/, "Please enter a valid course code"],
    },
    name: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    type: {
        type: String,
        required: true,
        enum: ["Lecture", "Lab", "Senior Project", "Internship"],
    }
});

const Course = mongoose.model("Course", courseSchema);
export default Course;