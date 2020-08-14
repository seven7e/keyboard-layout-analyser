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

export function map2d<T, S>(arr2d: T[][], func: ((e: T, i: number, j: number) => S)): S[][] {
  return arr2d.map((a, i) => (a.map((e, j) => (func(e, i, j)))));
}

export function countChar(s: string) {
  let cnt: {[k: string]: number} = {};

  for (const c of s) {
    if (c in cnt) {
      cnt[c]++;
    } else {
      cnt[c] = 1;
    }
  }

  return cnt;
}