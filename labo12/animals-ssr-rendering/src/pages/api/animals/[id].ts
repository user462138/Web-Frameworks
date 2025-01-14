import type { NextApiRequest, NextApiResponse } from "next";
import animalsJson from "@/animals.json"
import { Animal } from "@/types";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const id = parseInt(req.query.id as string)
  const animals: Animal[] = animalsJson.animals;

  if (req.method === 'GET') {
    const animal = animals.find(animal => animal.id === id);
    if (animal) {
      res.status(200).json(animal)
    } else {
      res.status(200).json({ message: "Animal was not found" })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handler;
