//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text, num) => {
  const neconst = [];
  for (let i = 0; i < num; i += 1) {
    neconst.push([]);
  }
  let r = 0; // перебор индексов в text
  while (r < text.length) {
    for (let a = 0; a < num && r < text.length; a += 1) {
      neconst[a] += text[r];
      r += 1;
    }
    for (let a = num - 2; a > 0 && r < text.length; a -= 1) {
      neconst[a] += text[r];
      r += 1;
    }
  }
  return neconst.join('');
};

export const decode = (text, num) => {
  const neconst = [];
  for (let i = 0; i < num; i += 1) {
    neconst.push([]);
  }
  let b = text.length;
  let d = '';
  let c = 0;
  let p = 0;
  let r = 0;
  for (let i = 0; i < num; i += 1) {
    if ((p === 0) || (p === num)) {
      if (b % (num + num - 2)) {
        d = Math.floor((b - p) / (num * 2 - 2)) + 1;
      } else { d = Math.floor((b - p) / (num * 2 - 2)); }
      r = c;
      c += d;
      if (c > text.length) {
        c = text.length;
      }
      for (r; r < c; r += 1) {
        neconst[p] += text[r];
      }
      p += 1;
    } else {
      d = Math.ceil(((b - p) / (num * 2 - 2)) * 2);
      r = c;
      c += d;
      if (c > text.length) {
        c = text.length;
      }
      for (r; r < c; r += 1) {
        neconst[p] += text[r];
      }
      p += 1;
    }
  }
  let res = '';
  const result = neconst;
  while (b > 0) {
    for (let a = 0; a < num; a += 1) {
      res += result[a][0];
      b -= 1;
      result[a] = result[a].slice(1);
    }
    for (let a = num - 2; a > 0; a -= 1) {
      res += result[a][0];
      b -= 1;
      result[a] = result[a].slice(1);
    }
  }
  return res.replace(/undefined/g, '');
};
