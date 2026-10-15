import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import eventRoutes from "./routes/events.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use("/events", eventRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/event_tracker")
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
