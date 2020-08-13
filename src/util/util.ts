export function get2DDefault<T>(array2d: T[][], i: number, j: number, defaultValue: T): T {
  if (i < array2d.length && j < array2d[i].length) {
    return array2d[i][j];
  }
  return defaultValue;
}