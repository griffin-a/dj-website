import { Host, PrismaClient } from "@prisma/client";
import IHostRepository from "./IHostRepository";

const prisma = new PrismaClient();

export default class HostRepository implements IHostRepository {
    async getHosts(): Promise<Host[]> {
        try {
            const hosts = await prisma.host.findMany();
            return hosts;
        } catch (error) {
            throw(error);
        }
    }

    async getHostsByEventId(eventId: string): Promise<Host[]> {
        throw new Error("Method not implemented.");
    }

    async updateHostById(hostId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}