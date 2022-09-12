// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { validateAuth } from "utils/auth";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const valid = validateAuth(req);
  res.status(200).json({ valid });
};

export default examples;
