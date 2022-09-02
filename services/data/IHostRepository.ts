import Host from "../../models/Host";

export default interface IHostRepository {
    getHosts(): Promise<Host[]>,
    getHostsByEventId(eventId: string): Promise<Host[]>,
    updateHostById(hostId: string): Promise<boolean>
}