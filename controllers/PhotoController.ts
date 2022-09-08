import { SupabaseStorageClient } from "@supabase/storage-js";
import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import PhotoDto from "../dtos/PhotoDto";

const NEXT_PUBLIC_SUPABASE_URL = "https://idjqfqmhnswnqadrheik.supabase.co";
const NEXT_PUBLIC_SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkanFmcW1obnN3bnFhZHJoZWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjExNTMyNTgsImV4cCI6MTk3NjcyOTI1OH0.f2sUJrKtgAbHt-RR9n5taGzEFZJ2QFUQQ2h4GwNRSDg";
const STORAGE_URL = "https://idjqfqmhnswnqadrheik.supabase.co/storage/v1";

const supabaseAdmin = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_KEY
);

export const storageClient = new SupabaseStorageClient(STORAGE_URL, {
  apikey: NEXT_PUBLIC_SUPABASE_KEY,
  Authorization: `Bearer ${NEXT_PUBLIC_SUPABASE_KEY}`,
});

const getPhotoDtos = async (rawData, eventId): Promise<PhotoDto[]> => {
  const photoDtos: PhotoDto[] = [];
  const filenames: string[] = [];

  rawData.map((obj) => {
    // First get the urls for each photo dto
    filenames.push(obj.name);
  });

  Promise.all(
    filenames.map(async (filename) => {
      const result = await storageClient
        .from(eventId)
        .getPublicUrl(`photos/${filename}`);
      // A list of urls is now generated

      // Add to the dto
      photoDtos.push({ id: v4(), url: result.data.publicURL });
    })
  );

  return photoDtos;
};

export default class PhotoController {
  async getPhotos(req: NextApiRequest, res: NextApiResponse) {
    const { eventId } = req.body;

    try {
      // For use with pagination
      const result = await storageClient.from(eventId).list("photos", {
        limit: 10,
        offset: 0,
      });

      //   const { publicURL, error } = await storageClient
      //     .from("public-bucket")
      //     .getPublicUrl("folder/avatar1.png");

      const photoDtos: PhotoDto[] = await getPhotoDtos(result.data, eventId);
      console.log(photoDtos);

      res.statusCode = 200;
      res.json({ data: photoDtos });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}