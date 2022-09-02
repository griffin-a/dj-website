import EventRepository from "../services/data/EventRepository";

const eventRepository = new EventRepository();
export default class EventController {
  async getAllEvents(req, res) {
    // await mongooseService.init();
    let { page = 1, limit = 2 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    try {
      const events = await eventRepository.getAllEvents(page, limit);
      const count = await eventRepository.getDocumentCount();

      res.statusCode = 200;
      res.json({
        events,
        pagination: {
          totalPages: Math.ceil(count / limit),
          currentPage: page,
        }
      });
    } catch (error) {
      //   console.log(error);
      res.statusCode = 500;
      res.json({ error: "Error in getting all events!" });
    }
  }

  async createEvent(req, res) {
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
      const newEventId = await eventRepository.createEvent(event);
      res.statusCode = 200;
      res.json({ newEventId });
    } catch (error) {
      console.log(error);
      res.statusCode = 400;
      res.json({ error: "Error in creating event!" });
    }
  }

  async getEventById(req, res) {
    const { eventId } = req.query;

    try {
      const event = await eventRepository.getEventById(eventId);
      res.statusCode = 200;
      res.json(event);
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.json({ error: "Error in finding event by given id!" });
    }
  }
}
