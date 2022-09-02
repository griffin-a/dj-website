import Event from "../../models/Event";
import IEventRepository from "./IEventRepository";

export default class EventRepository implements IEventRepository {
    async getAllEvents(): Promise<Event[]> {
        throw new Error("Method not implemented.");
    }
    async getDocumentCount(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    async getEventById(eventId: string): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    async createEvent(event: Event): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async updateEventById(eventId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}