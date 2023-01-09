import { Photo } from "@prisma/client";
import IPhotoRepository from "./IPhotoRepository";

import { prisma } from "../../utils/prisma";

export default class PhotoRepository implements IPhotoRepository {
    // async getPhotos(): Promise<Photo[]> {
    //     try {
    //         const photos = await prisma.photo.findMany();
    //         return photos;
    //     } catch (error) {
    //         throw (error);
    //     }
    // }

    async getPhotosByEventId(eventId: string): Promise<Photo[]> {
        throw new Error("Method not implemented.");
    }
    
    // async updatePhotoById(photoId: string): Promise<boolean> {
    //     throw new Error("Method not implemented.");
    // }

}