import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  time: {
    type: String,
  },
  location: {
    type: String,
  },
  notes: {
    type: String,
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
