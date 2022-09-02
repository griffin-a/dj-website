import Event from "../../models/Event";

export default interface IEventRepository {
    getAllEvents(): Promise<Event[]>,
    getDocumentCount(): Promise<number>,
    getEventById(eventId: string): Promise<Event>,
    createEvent(event: Event): Promise<boolean>,
    updateEventById(eventId: string): Promise<boolean>
}