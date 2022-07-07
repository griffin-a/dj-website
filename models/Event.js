import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  title: String,
  description: String,
  paid: Boolean,
  hosts: {
    host: {
      name: { String, required: true },
      email: { String, required: true },
    },
  },
  capacity: Number,
  venue: String,
  date: Date,
  eventType: String,
  photos: {
    photo: {
        title: String,
        link: String
    }
  },
  completed: Boolean,
  currentlyBooked: Number
});

const Event = models.Event || model("Event", eventSchema);

export default Event;
