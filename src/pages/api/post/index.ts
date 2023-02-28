import { NextApiResponse, NextApiRequest } from "next";
import { zabieg } from "@/lib/interfaces/datazabiegi";
import { posts } from "@/lib/dataposts";

export default function handler(_req: NextApiRequest, res: NextApiResponse<zabieg[]>) {
    res.setHeader('Cache-Control', 's-maxage=86400')
  return res.status(200).json(posts);
}
