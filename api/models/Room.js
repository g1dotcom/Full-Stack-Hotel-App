import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({});

export default mongoose.model("Room", RoomSchema);
