import { NextApiRequest } from "next";

export function validateAuth(request: NextApiRequest): boolean {
  const token = request.cookies["next-auth.session-token"];
  console.log(token);

  if (!token) {
    return false;
  }
  return true;
}
