import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAll, getFilter, getHotel, getHotelRooms, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();


//create
router.post("/", verifyAdmin, createHotel)

//update
router.put("/:id", verifyAdmin, updateHotel)

//delete
router.delete("/:id", verifyAdmin, deleteHotel)

//get
router.get("/find/:id", getHotel)

//getall 
router.get("/", getAll)

//count of the hotels
router.get("/countByCity", countByCity)
router.get("/rooms/:id", getHotelRooms)
    //count by type
router.get("/countByType", countByType)

//fillter 
router.get("/getFilter", getFilter)
export default router;