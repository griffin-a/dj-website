import { Photo } from "@prisma/client";
import IPhotoRepository from "./IPhotoRepository";

export default class PhotoRepository implements IPhotoRepository {
    async getPhotos(): Promise<Photo[]> {
        throw new Error("Method not implemented.");
    }
    async getPhotosByEventId(eventId: string): Promise<Photo[]> {
        throw new Error("Method not implemented.");
    }
    async updatePhotoById(photoId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}