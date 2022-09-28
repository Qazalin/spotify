/** A set of assertation utility functions for guarding agains any and unknown types */

import { NextRouter } from "next/router";

/**
 * Type guard to check if the id is a string
 * In the NextJs page, whenevr you use router.query, the id can be a string, or not
 * many Client-side calls expect the id to alway be a string, this guard will throw an error
 * before the client even attempts to call the API
 * @param router The result of router.query
 */
export function assertIsValidId(router: NextRouter) {
  const { id } = router.query;
  if (!(id && typeof id === "string"))
    throw new Error(`Wrong id, expected string, got ${typeof id}`);
  router.push("/401");
}
