export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function dateFormatter(date: Date) {
  // turn the date into June 1, 2021
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function durationFormatter(duration: number) {
  // turn the duration into 3:30
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${
    Math.round(seconds) < 10 ? "0" + Math.round(seconds) : Math.round(seconds)
  }`;
}

/*
 * Capilizes a string at runtime
 * @param {string} str - The string to capitalize
 * @returns {string} - The capitalized string
 */
export function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
