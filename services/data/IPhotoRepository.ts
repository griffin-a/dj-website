import { Photo } from "@prisma/client";

export default interface IPhotoRepository {
    // getPhotos(): Promise<Photo[]>,
    getPhotosByEventId(eventId: string): Promise<Photo[]>,
    // updatePhotoById(photoId: string): Promise<boolean>
}