import { SupabaseStorageClient } from "@supabase/storage-js";
import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";

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

export default class PhotoController {
  async getPhotos(req: NextApiRequest, res: NextApiResponse) {
    const { eventId } = req.body;

    try {
      // For use with pagination
      const result = await storageClient.from(eventId).list("photos", {
        limit: 10,
        offset: 0,
      });
      const { publicURL, error } = await storageClient
        .from("public-bucket")
        .getPublicUrl("folder/avatar1.png");
      console.log(result.data);
      console.log(result.error);
      res.statusCode = 200;
      res.json({ data: result.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
