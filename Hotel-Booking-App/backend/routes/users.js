import express from "express";
import { deleteUser, getUser, updateUser, getAll, createUser } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
// router.get("/checkvalidation/:id", verifyAdmin, (req, res, next) => {
//     res.send("verifying the user")
// })

//create 
router.post("/", createUser)

//update
router.put("/:id", updateUser)

//delete
router.delete("/:id", verifyUser, deleteUser)

//get
router.get("/:id", verifyUser, getUser)

//getall 
router.get("/", verifyAdmin, getAll)



export default router;