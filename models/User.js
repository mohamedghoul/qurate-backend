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