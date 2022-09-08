import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";
import PhotoController from "../../../../../controllers/PhotoController";

const photoController = new PhotoController();

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // GET /events/[eventId]/photos
  if (req.method == "GET") {
    res.statusCode = 200;
    return photoController.getPhotos(req, res);
    // const { eventId } = req.body;

    // try {
    //     const { data, error } = await supabaseAdmin.storage.listBuckets()
    //     console.log(error);
    //     res.statusCode = 200;
    //     res.json({ data });
    // } catch (error) {
    //     console.log(error);
    //     throw(error);
    // }
  }
};
