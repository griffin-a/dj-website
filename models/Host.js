import { Schema, model, models } from "mongoose";

const hostSchema = new Schema({
  namme: {
    type: String,
  },
  email: {
    type: String,
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});

const Host = models.Host || model("Host", hostSchema);

export default Host;
