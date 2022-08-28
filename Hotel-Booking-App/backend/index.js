import hotelsRoute from "./routes/hotels.js";
import authRoute from "./routes/auth.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import express from "express";
const app = express()
import mongoose from "mongoose"
import cookieParser from "cookie-parser";
import cors from "cors";

const connect = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Booking");
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});
//middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/hotels", hotelsRoute)
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.get("/", (req, res) => {
    res.send("<h1>Hello world really wow that is great  </h1>")
})
app.listen(1234, () => {
    connect()
    console.log("just started ")
})