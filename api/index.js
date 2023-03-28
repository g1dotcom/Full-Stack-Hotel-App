import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//routes
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";

const app = express();

dotenv.config();

// Connect to DB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

connect();

// Middleware
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from mongoDB");
});

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
