import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[\w-\.]+@qu\.edu\.qa$|^[\w-\.]+@student\.qu\.edu\.qa$/,
            "Please enter a valid QU email address",
        ],
    },
    password: {
        type: String,
        required: true,
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
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
});

const User = mongoose.model("User", userSchema);
export default User;