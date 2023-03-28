import mongoose from "mongoose";

const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({});

export default mongoose.model("Hotel", HotelSchema);
