import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // GET /events/[eventId]/photos
  if (req.method == "GET") {
    res.statusCode = 200;
    res.json({ name: "Welcome to events page in the API!" });
  }
};
