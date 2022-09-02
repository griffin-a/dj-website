import Photo from "../../models/Photo";
import IPhotoRepository from "./IPhotoRepository";

export default class PhotoRepository implements IPhotoRepository {
    getPhotos(): Promise<Photo[]> {
        throw new Error("Method not implemented.");
    }
    getPhotosByEventId(eventId: string): Promise<Photo[]> {
        throw new Error("Method not implemented.");
    }
    updatePhotoById(photoId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}