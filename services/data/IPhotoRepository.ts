import Photo from "../../models/Photo";

export default interface IPhotoRepository {
    getPhotos(): Promise<Photo[]>,
    getPhotosByEventId(eventId: string): Promise<Photo[]>,
    updatePhotoById(photoId: string): Promise<boolean>
}