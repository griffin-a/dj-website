import EventController from "../../../controllers/EventController";

const eventController = new EventController();

export default async (req, res) => {
  // GET /api/events
  if (req.method == "GET") {
    return eventController.getAllEvents(req, res);
    // POST /api/events
  } else if (req.method == "POST") {
    return eventController.createEvent(req, res);
    // DELETE /api/events
  } else if (req.method == "DELETE") {
  } else {
    res.statusCode = 400;
    res.json({ name: "Page could not be found!" });
  }
};
