/** A set of assertation utility functions for guarding agains any and unknown types */

/**
 * Type guard to check if the id is a string
 * In the NextJs page, whenevr you use router.query, the id can be a string, or not
 * many Client-side calls expect the id to alway be a string, this guard will throw an error
 * before the client even attempts to call the API
 * @param id: the id string from the router.query
 */
export function assertIsValidId(id: string | string[] | undefined) {
  if (!(id && typeof id === "string")) {
    throw new Error(`Wrong id, expected string, got ${typeof id}`);
  }
}
