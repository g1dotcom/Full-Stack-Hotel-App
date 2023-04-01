import express from "express";

import {
  deleteHotel,
  updateHotel,
  createHotel,
  getHotel,
  getHotels,
  countByCity,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE HOTEL
router.post("/", verifyAdmin, createHotel);
//UPDATE HOTEL
router.put("/:id", verifyAdmin, updateHotel);
//DELETE HOTEL
router.delete("/:id", verifyAdmin, deleteHotel);
//GET HOTEL
router.get("/find/:id", getHotel);
//GET ALL HOTELS
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("countByType", getHotels);

export default router;
