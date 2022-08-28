import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter your name'],
        unique: [true, 'User name already exists'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: [true, 'email name already exists'],
    },
    booking: {
        type: Array
    },
    password: {
        type: String,
        required: [true, 'Please enter your Password'],
    },
    city: {
        type: String,

    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default mongoose.model("User", UserSchema)