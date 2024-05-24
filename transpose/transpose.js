//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if (input.length === 0) {
    return [];
  }
  const combo = [];
  const counter = input.length;
  let leng = input[0].length;
  if (counter === 1) {
    for (let h = 0; h < input[0].length; h += 1) {
      combo.push(input[0][h]);
    }
    return (combo);
  }
  for (let i = 0; i < input.length; i += 1) {
    if (leng < input[i].length) {
      leng = input[i].length;
    }
  }
  const input1 = [];
  for (let r = 0; r < counter; r += 1) {
    input1[r] = input[r].replaceAll(' ', '_');
  }
  for (let i = 0; i < leng; i += 1) {
    let a = '';
    for (let n = 0; n < input.length; n += 1) {
      a += input1[n][i] || ' ';
    }
    while (a.endsWith(' ')) {
      a = a.slice(0, -1);
    }
    const b = a.replace(/_/g, ' ');
    combo.push(b);
  }
  return combo;
};
