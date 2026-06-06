import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;

  if (!path || typeof path !== "string") {
    return res.status(400).json({ error: "Path parameter is required" });
  }

  // Redirect to the production site where the real image binaries are hosted
  const remoteUrl = `https://simitteknesi.vercel.app/images/${path}`;

  res.redirect(302, remoteUrl);
}
