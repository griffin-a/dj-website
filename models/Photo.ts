import { Schema, model, models } from "mongoose";

const photoSchema = new Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
});

const Photo = models.Photo || model("Photo", photoSchema);

export default Photo;
