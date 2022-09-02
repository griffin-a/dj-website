import Photo from "../../models/Photo";

export default interface IPhotoRepository {
    getPhotos(): Photo[],
    getPhotosByEventId(eventId: string): Photo[],
    updatePhotoById(photoId: string): boolean
}