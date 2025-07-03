import { NextApiRequest, NextApiResponse } from "next";
import { getFallbackImageByCategory } from "../../utils/imageUtils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;

  if (!path || typeof path !== "string") {
    return res.status(400).json({ error: "Path parameter is required" });
  }

  // Get appropriate fallback image based on category
  const fallbackUrl = getFallbackImageByCategory(path);

  // Redirect to the fallback image
  res.redirect(302, fallbackUrl);
}
