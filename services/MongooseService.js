import Event from "../models/Event";
import Photo from "../models/Photo";
import Host from "../models/Host";

import connectMongoose from "../utills/connectMongoose";

// The data-access-layer using Mongoose
export default class MongooseService {
  async init() {
    await connectMongoose();
  }

  static EventDAL = class {
    async getAllEvents() {
      let events;

      try {
        events = await Event.find();
      } catch (error) {
        throw error;
      }

      if (!events) {
        throw new Error("No events could be found!");
      }

      return events;
    }

    async getEventById(id) {
      let event;

      try {
        event = await Event.findById(id);
      } catch (error) {
        throw error;
      }

      if (!event) {
        throw new Error("No event could be found by the given id!");
      }

      return event;
    }

    async createEvent(event) {
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
      } = event;

      try {
        const newEvent = new Event({ event });
        await newEvent.save();
        return newEvent._id;
      } catch (error) {
        throw error;
      }
    }

    async updateEvent() {}
  };

  static PhotoDAL = class {
    async getAllPhotos() {}

    async getAllPhotosByEventId() {}

    async updatePhotoById() {}
  };

  static HostDAL = class {
    async getAllHosts() {}

    async getAllHostsByEventId() {}

    async updateHost() {}
  };
}
