import Host from "../../models/Host";
import IHostRepository from "./IHostRepository";

export default class HostRepository implements IHostRepository {
    async getHosts(): Promise<Host[]> {
        throw new Error("Method not implemented.");
    }
    async getHostsByEventId(eventId: string): Promise<Host[]> {
        throw new Error("Method not implemented.");
    }
    async updateHostById(hostId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}