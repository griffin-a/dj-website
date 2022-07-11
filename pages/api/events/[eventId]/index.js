import EventController from "../../../../controllers/EventController";

const eventController = new EventController();

export default (req, res) => {
  // GET /events/eventIdHere
  if (req.method == "GET") {
    return eventController.getEventById(req, res);
  }
  }