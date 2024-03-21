export const compute = (x, y) => {
  let count = 0;
  if (x.length !== y.length) {
    throw new Error('strands must be of equal length');
  } else if (x.length === y.length) {
    const xm = x.split('');
    const ym = y.split('');
    for (let i = 0; i < xm.length; i += 1) {
      if (xm[i] !== ym[i]) {
        count += 1;
      }
    }
  }
  return count;
};
