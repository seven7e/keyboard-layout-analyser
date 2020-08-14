export function get2DDefault<T>(array2d: T[][], i: number, j: number, defaultValue: T): T {
  if (i < array2d.length && j < array2d[i].length) {
    return array2d[i][j];
  }
  return defaultValue;
}

export function for2d<T>(arr2d: T[][], func: ((e: T, i: number, j: number) => void)): void {
  arr2d.forEach((a, i) => {
    a.forEach((e, j) => {
      func(e, i, j);
    })
  })
}