import Event from "../../models/Event";

export default interface IEventRepository {
    getAllEvents(): Event[],
    getDocumentCount(): number,
    getEventById(eventId: string): Event,
    createEvent(event: Event): boolean,
    updateEventById(eventId: string): boolean
}