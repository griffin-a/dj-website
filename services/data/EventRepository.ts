import { Event } from "@prisma/client";
import { prisma } from "../../utils/prisma";
import IEventRepository from "./IEventRepository";

export default class EventRepository implements IEventRepository {
  async getAllEvents(page: number, limit: number): Promise<Event[]> {
    try {
      const skip = (page - 1) * limit;
      const events = await prisma.event.findMany({ skip, take: limit });
      return events;
    } catch (error) {
      console.log(error);
      // Delegate error handling
      throw error;
    }
  }

  async getDocumentCount(): Promise<number> {
    try {
      const count = await prisma.event.count();
      return count;
    } catch (error) {
      throw error;
    }
  }

  async getEventById(eventId: string): Promise<Event> {
    // Convert the eventId to an int
    // const eventIdInt: number = parseInt(eventId);

    try {
      const event = await prisma.event.findUnique({
        where: {
          id: eventId,
        },
      });

      return event;
    } catch (error) {
      throw error;
    }
  }

  async createEvent(event: Event): Promise<Event> {
    try {
      const newEvent = await prisma.event.create({ data: event });
      return newEvent;
    } catch (error) {
      throw error;
    }
  }

  async updateEventById(eventId: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
