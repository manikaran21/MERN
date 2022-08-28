import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    price: {
        type: Number,

    },
    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomNumbers: [{ number: Number, owners: { type: [String] }, unavailableDates: { type: [Date] } }],
}, { timestamps: true });

export default mongoose.model("Room", RoomSchema);