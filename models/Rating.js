import mongoose from "mongoose";

const options = {
    toJSON: {
        virtuals: true
    }
}

const ratingSchema = new mongoose.Schema({
    rater: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    professor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Instructor",
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["Lecture Instructor", "Lab Instructor", "Supervisor", "TA"],
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    // Rating criteria
    teaching: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    treatment: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    helpfulness: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    exams: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    grading: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comments: {
        type: String,
        max: 1000,
    },
}, options);

ratingSchema.virtual("overall").get(function () {
    return (this.teaching + this.treatment + this.helpfulness + this.exams + this.grading) / 5;
});

const Rating = mongoose.model("Rating", ratingSchema);
export default Rating;