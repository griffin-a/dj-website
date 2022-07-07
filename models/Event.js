import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean,
  },
  hosts: {
    host: {
      name: { type: String},
      email: { type: String},
    },
  },
  capacity: {
    type: Number,
  },
  venue: {
    type: String,
  },
  date: {
    type: Date,
  },
  eventType: {
    type: String,
  },
  photos: {
    photo: {
      title: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  },
  completed: {
    type: Boolean,
  },
  currentlyBooked: {
    type: Boolean,
  },
});

const Event = models.Event || model("Event", eventSchema);

export default Event;
