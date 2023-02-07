import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        match: [/^(CMPS|CMPE|ELEC)\d{3}$/, "Please enter a valid course code"],
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
        enum: ["Lecture", "Lab", "Tutorial"],
    },
    offered: {
        type: String,
        required: true,
        enum: ["Fall", "Spring", "Summer"],
    }
});

const Course = mongoose.model("Course", courseSchema);
export default Course;