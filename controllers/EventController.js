import MongooseService from "../services/MongooseService";
const mongooseService = new MongooseService();

export default class EventController {
  constructor() {}

  async getAllEvents(req, res) {
    await mongooseService.init();

    try {
      const events = await mongooseService.EventDAL.getAllEvents();
      res.statusCode = 200;
      res.json({ events });
    } catch (error) {
    //   console.log(error);
      res.statusCode = 500;
      res.json({ error: "Error in getting all events!" });
    }
  }

  async createEvent(req, res) {
    await mongooseService.init();

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
    } = req.body.event;

    const event = req.body.event;
    console.log(event);

    try {
      const newEventId = await mongooseService.EventDAL.createEvent(event);
      res.statusCode = 200;
      res.json({ newEventId });
    } catch (error) {
      console.log(error);
      res.statusCode = 400;
      res.json({ error: "Error in creating event!" });
    }
  }
}
