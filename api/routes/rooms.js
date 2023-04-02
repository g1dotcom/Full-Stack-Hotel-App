import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE ROOM
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE ROOM
router.put("/:id", verifyAdmin, updateRoom);
router.put("/available/:id", updateRoomAvailability);

//DELETE ROOM
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET ROOM
router.get("/:id", getRoom);

//GET ALL ROOMS
router.get("/", getRooms);
export default router;
