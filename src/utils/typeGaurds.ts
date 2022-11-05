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

export function isStrictlyString(value: unknown): value is string {
  return typeof value === "string";
}

export function isStrictEqualArray<T>(a1: T[], a2: T[]) {
  if (a1.length !== a2.length) {
    console.log("isStrictEqualArray: Arrays are not the same length");
    return false;
  }
  for (let i = 0; i < a1.length; i++) {
    if (JSON.stringify(a1[i]) !== JSON.stringify(a2[i])) {
      return false;
    }
  }
  return true;
}
