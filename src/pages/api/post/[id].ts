import { NextApiRequest, NextApiResponse } from "next";
import { posts } from "@/lib/dataposts";
import type { ResponseError } from "@/lib/interfaces";
import type { zabieg } from "@/lib/interfaces/datazabiegi";

export default function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<zabieg | ResponseError>,
) {
  const { query } = req;
  const { id } = query;
  const post = posts.find((p) => p.id === id);

  return post
    ? res.status(200).json(post)
    : res.status(404).json({ message: `Post with id: ${id} not found.` });
}
