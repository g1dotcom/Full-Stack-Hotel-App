import express from "express";

import {
  deleteHotel,
  updateHotel,
  createHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";

const router = express.Router();

//CREATE HOTEL
router.post("/", createHotel);
//UPDATE HOTEL
router.put("/:id", updateHotel);
//DELETE HOTEL
router.delete("/:id", deleteHotel);
//GET HOTEL
router.get("/:id", getHotel);
//GET ALL HOTELS
router.get("/", getHotels);

export default router;
