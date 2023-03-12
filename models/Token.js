import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    expiry: {
        type: Date,
        required: true,
        default: Date.now() + 86400000,
    },
});

const Token = mongoose.model("Token", tokenSchema);
export default Token;