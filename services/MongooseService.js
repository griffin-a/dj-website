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
    async getAllEvents() {}

    async getEventById() {}

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
