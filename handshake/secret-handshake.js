//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (number) => {
  let vd = '';
  let u = '';
  let s = number;
  const result = [];
  for (let i = 5; i > 0; i -= 1) {
    u = s - (Math.floor(s / 2) * 2);
    s = Math.floor(s / 2);
    vd += u;
  }
  let dv = '';
  for (let i = 4; i > -1; i -= 1) {
    dv += Number(vd[i]);
  }
  if (dv[4] === String(1)) {
    result.push('wink');
  }
  if (dv[3] === String(1)) {
    result.push('double blink');
  }
  if (dv[2] === String(1)) {
    result.push('close your eyes');
  }
  if (dv[1] === String(1)) {
    result.push('jump');
  }
  if (dv[0] === String(1)) {
    result.reverse();
  }
  return result;
};
