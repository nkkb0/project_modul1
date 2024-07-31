//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (card) => {
  let a = '';
  for (let i = 0; i < card.length; i += 1) {
    if (card[i] !== ' ') {
      a += card[i];
    }
  }
  if (a.length <= 1) {
    return false;
  }
  const regex = /^[0-9]+$/;
  if (!regex.test(a)) {
    return false;
  }
  let b = 0;
  let c = '';

  for (let i = a.length - 2; i >= 0; i -= 2) {
    c = Number(a[i]) * 2;
    if (c > 9) {
      c -= 9;
    }
    b += c;
  }
  for (let i = a.length - 1; i >= 0; i -= 2) {
    b += Number(a[i]);
  }
  if (b % 10 > 0) {
    return false;
  }
  return true;
};
