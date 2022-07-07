import connectMongoose from "../../../utils/connectMongoose";
import Event from "../../../models/Event";

export default async (req, res) => {
  // GET /api/events
  if (req.method == "GET") {
    await connectMongoose();
    console.log("Connected to MongoDb");
    res.statusCode = 200;
    res.json({ name: "Succcessfully connected to MongoDb" });

    // POST /api/events
  } else if (req.method == "POST") {
    const {
      title,
      description,
      paid,
      hosts,
      capacity,
      venue,
      date,
      eventType,
      photos,
      completed,
      currentlyBooked,
    } = req.body;
    await connectMongoose();
    console.log("Connected to MongoDb");

    const newEvent = new Event({
      title,
      description,
      paid,
      hosts,
      capacity,
      venue,
      date,
      eventType,
      photos,
      completed,
      currentlyBooked,
    });
    await newEvent.save();

    res.statusCode = 200;
    res.json(newEvent);
    // DELETE /api/events
  } else if (req.method == "DELETE") {
  } else {
    res.statusCode = 400;
    res.json({ name: "Page could not be found!" });
  }
};
