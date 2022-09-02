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
  hosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Host",
    },
  ],
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
  photos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Photo",
    },
  ],
  completed: {
    type: Boolean,
  },
  currentlyBooked: {
    type: Boolean,
  },
  imageUri: {
    type: String,
  }
});

const Event = models.Event || model("Event", eventSchema);

export default Event;
