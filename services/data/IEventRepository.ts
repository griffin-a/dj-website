import { Event } from "@prisma/client";

export default interface IEventRepository {
    getAllEvents(page: number, limit: number): Promise<Event[]>,
    getDocumentCount(): Promise<number>,
    getEventById(eventId: string): Promise<Event>,
    createEvent(event: Event): Promise<Event>,
    updateEventById(eventId: string): Promise<boolean>
}