/** Numeric Sheet fields use NaN internally when they are blank or invalid. */
export function isMissingNumber(value: number) {
  return !Number.isFinite(value);
}

export function displayNumber(value: number) {
  return isMissingNumber(value) ? "[Missing number]" : value.toLocaleString();
}
