import Event from "../../models/Event";
import IEventRepository from "./IEventRepository";

export default class EventRepository implements IEventRepository {
    getAllEvents(): Promise<Event[]> {
        throw new Error("Method not implemented.");
    }
    getDocumentCount(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    getEventById(eventId: string): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    createEvent(event: Event): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateEventById(eventId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}