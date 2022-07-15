import Event from "../models/Event";
import Photo from "../models/Photo";
import Host from "../models/Host";

import connectMongoose from "../utils/connectMongoose";

// The data-access-layer using Mongoose
export default class MongooseService {
  constructor() {
    this.EventDAL = new EventDAL();
    this.PhotoDAL = new PhotoDAL();
    this.HostDAL = new HostDAL();
  }

  async init() {
    await connectMongoose();
  }
}

class EventDAL {
  constructor() {}

  async getAllEvents(page = 1) {
    const PAGE_SIZE = 2;
    const skip = (page - 1) * PAGE_SIZE;
    let events;

    try {
      events = await Event.find({}).skip(skip).limit(PAGE_SIZE);
    } catch (error) {
      throw error;
    }

    if (!events || events.length === 0) {
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
    // const {
    //   title,
    //   description,
    //   paid,
    //   hosts,
    //   capacity,
    //   venue,
    //   date,
    //   eventType,
    //   photos,
    //   completed,
    //   currentlyBooked,
    // } = event;

    try {
      const newEvent = new Event(event);
      await newEvent.save();
      return newEvent._id;
    } catch (error) {
    //   console.log(error);
      throw error;
    }
  }

  async updateEvent() {}
}

class PhotoDAL {
  constructor() {}

  async getAllPhotos() {}

  async getAllPhotosByEventId() {}

  async updatePhotoById() {}
}

class HostDAL {
  constructor() {}

  async getAllHosts() {}

  async getAllHostsByEventId() {}

  async updateHost() {}
}
