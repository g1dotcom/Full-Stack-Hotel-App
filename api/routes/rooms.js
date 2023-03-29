import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE ROOM
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE ROOM
router.put("/:id", verifyAdmin, updateRoom);

//DELETE ROOM
router.delete("/:id", verifyAdmin, deleteRoom);

//GET ROOM
router.get("/:id", getRoom);

//GET ALL ROOMS
router.get("/", getRooms);
export default router;
