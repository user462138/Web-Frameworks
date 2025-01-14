import type { NextApiRequest, NextApiResponse } from "next";
import animalsJson from "@/animals.json"
import { Animal } from "@/types";


const handler = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const animals: Animal[] = animalsJson.animals;
  if (req.method === 'GET') {
      res.status(200).json(animals)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handler;
