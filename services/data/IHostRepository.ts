import Host from "../../models/Host";

export default interface IHostRepository {
    getHosts(): Host[],
    getHostsByEventId(eventId: string): Host[],
    updateHostById(hostId: string): boolean
}