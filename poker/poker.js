//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const bestHands = (hands) => {
  const total = [];
  let k = '';
  let n = '';
  for (let y = 0; y < hands.length; y += 1) {
    n = '';
    k = '';
    total.push(0);
    const r = hands[y].toString();
    const ruka = r.replace(/[0, ]/g, '');
    const regex = /[0-9,J,Q,K,A]/;
    for (let i = 0; i < ruka.length; i += 1) {
      if (regex.test(ruka[i])) {
        n += ruka[i];
      } else { k += ruka[i]; }
    }
    const nSort = n.split('').sort();
    if (nSort[4] === 'A') {
      total[y] += 14;
    }
    if (nSort[4] === 'K') {
      total[y] += 13;
    }
    if (nSort[4] === 'Q') {
      total[y] += 12;
    }
    if (nSort[4] === 'J') {
      total[y] += 11;
    }
    if (nSort[4] === '1') {
      total[y] += 10;
    }
    if (['2', '3', '4', '5', '6', '7', '8', '9'].includes(nSort[4])) {
      total[y] += Number(nSort[4]);
    }
    const reg = [9, 1, 'J', 'Q', 'K'];
    const reg1 = [2, 3, 4, 5, 'A'];
    const reg2 = [1, 'J', 'Q', 'K', 'A'];
    const zz = n;
    const fleshR = reg2.every((aa) => zz.includes(aa));
    const stree = reg1.every((bb) => zz.includes(bb));
    // одинаковая масть
    let skip = false;
    if (k.match((/S{5}/) || []) || k.match((/D{5}/) || [])
      || k.match((/C{5}/) || []) || k.match((/H{5}/) || [])) {
      if (fleshR === true) {
        total[y] = 119;
      } else if (stree === true) {
        total[y] = 110;
      }
      total[y] += 61;
      for (let i = 8; i > 1; i -= 1) {
        const included = reg.every((char) => zz.includes(char));
        if (included === true) {
          total[y] = 110 + i;
          break;
        } else {
          reg.pop();
          reg.unshift(i);
        }
      }
      skip = true;
    }
    if (!skip) {
      // одинаковая масть
      // последовательность карт
      if (!(k.match((/S{5}/) || [])) || !(k.match((/D{5}/) || []))
      || !(k.match((/C{5}/) || [])) || !(k.match((/H{5}/) || []))) {
        for (let i = 8; i > 0; i -= 1) {
          const z = n;
          const included = reg.every((char) => z.includes(char));
          if (included === true) {
            total[y] = 54 + i;
            break;
          } else {
            reg.pop();
            reg.unshift(i);
          }
        }
        if (fleshR === true) {
          total[y] = 109;
          break;
        }
        if (stree === true) {
          total[y] = 54;
          break;
        }
      }
      // последовательность карт
      // каре, хаус, сет, пары
      const matches = [];
      let matchGroup = nSort[0];
      for (let i = 1; i < nSort.length; i += 1) {
        if (nSort[i] === nSort[i - 1]) {
          matchGroup += nSort[i];
        } else {
          if (matchGroup.length > 1) {
            matches.push(matchGroup);
          }
          matchGroup = nSort[i];
        }
      }
      if (matchGroup.length > 1) {
        matches.push(matchGroup);
      }
      const comb = matches.join('').split('').concat(nSort);
      let reserv = comb.filter((t) => comb.indexOf(t) === comb.lastIndexOf(t)).sort();
      if (matches.length !== 0) {
        if (reserv[reserv.length - 1] === 'A') {
          reserv = 0.15;
        }
        if (reserv[reserv.length - 1] === 'K') {
          reserv = 0.14;
        }
        if (reserv[reserv.length - 1] === 'Q') {
          reserv = 0.13;
        }
        if (reserv[reserv.length - 1] === 'J') {
          reserv = 0.12;
        }
        if (reserv[reserv.length - 1] === '1') {
          reserv = 0.11;
        }
        if (['2', '3', '4', '5', '6', '7', '8', '9'].includes(reserv[reserv.length - 1])) {
          reserv = Number(reserv[reserv.length - 1]) / 10;
        }
        if (matches[0].length === 4) {
          if (matches[0].includes('A')) {
            total[y] = 101 + reserv;
          }
          if (matches[0].includes('K')) {
            total[y] = 100 + reserv;
          }
          if (matches[0].includes('Q')) {
            total[y] = 99 + reserv;
          }
          if (matches[0].includes('J')) {
            total[y] = 98 + reserv;
          }
          if (matches[0].includes(1)) {
            total[y] = 97 + reserv;
          } else {
            total[y] = 87 + Number(matches[0][1]) + reserv;
          }
        }
        if (matches.length === 2 && ((matches[0].length === 2 && matches[1].length === 3)
        || (matches[1].length === 2 && matches[0].length === 3))) {
          let rrr = 0;
          let w = 0;
          if (matches[0].length > matches[1].length) { rrr = 0; w = 1; }
          if (matches[0].length < matches[1].length) { rrr = 1; w = 0; }
          if (matches[rrr].includes('A')) {
            total[y] = 88 + reserv;
            if (matches[w].includes('A')) {
              total[y] = 88 + reserv + 0.015;
            }
          }
          if (matches[rrr].includes('K')) {
            total[y] = 87 + reserv;
            if (matches[w].includes('K')) {
              total[y] = 87 + reserv + 0.014;
            }
          }
          if (matches[rrr].includes('Q')) {
            total[y] = 86 + reserv;
            if (matches[w].includes('Q')) {
              total[y] = 86 + reserv + 0.013;
            }
          }
          if (matches[rrr].includes('J')) {
            total[y] = 85 + reserv;
            if (matches[w].includes('J')) {
              total[y] = 85 + reserv + 0.012;
            }
          }
          if (matches[rrr].includes(1)) {
            total[y] = 84 + reserv;
            if (matches[w].includes(1)) {
              total[y] = 84 + reserv + 0.011;
            }
          } else {
            total[y] = 74 + Number(matches[rrr][1]) + Number(reserv)
            + Number((matches[w][1]) / 100);
          }
        }
        if (matches.length === 1 && matches[0].length === 3) {
          if (matches[0].includes('A')) {
            total[y] = 53 + reserv;
          } else if (matches[0].includes('K')) {
            total[y] = 52 + reserv;
          } else if (matches[0].includes('Q')) {
            total[y] = 51 + reserv;
          } else if (matches[0].includes('J')) {
            total[y] = 50 + reserv;
          } else if (matches[0].includes(1)) {
            total[y] = 49 + reserv;
            break;
          } else {
            total[y] = 39 + Number(matches[0][1]) + reserv;
          }
        }
        if (matches.length === 2 && (matches[0].length === 2 && matches[1].length === 2)) {
          let rr = 0;
          if (matches[0] > matches[1]) { rr = 0; }
          if (matches[0] < matches[1]) { rr = 1; }
          if (matches[rr].includes('A')) {
            total[y] = 40 + reserv;
          } else if (matches[rr].includes('K')) {
            total[y] = 39 + reserv;
          } else if (matches[rr].includes('Q')) {
            total[y] = 38 + reserv;
          } else if (matches[rr].includes('J')) {
            total[y] = 37 + reserv;
          } else if (matches[rr].includes(1)) {
            total[y] = 36 + reserv;
          } else {
            total[y] = 26 + Number(matches[rr][1]) + reserv;
          }
        }
        if (matches.length === 1 && matches[0].length === 2) {
          if (matches[0].includes('A')) {
            total[y] = 27 + reserv;
          }
          if (matches[0].includes('K')) {
            total[y] = 26 + reserv;
          }
          if (matches[0].includes('Q')) {
            total[y] = 25 + reserv;
          }
          if (matches[0].includes('J')) {
            total[y] = 24 + reserv;
          }
          if (matches[0].includes(1)) {
            total[y] = 23 + reserv;
          } else {
            total[y] = 13 + Number(matches[0][1]) + reserv;
          }
        }
      }
      // одиночные карты оиднаковые
      for (let i = 3; i >= 0; i -= 1) {
        let b = 0;
        if (i === 3) { b = 100; }
        if (i === 2) { b = 1000; }
        if (i === 1) { b = 10000; }
        if (i === 0) { b = 100000; }
        if (nSort[i] === 'A') {
          total[y] += 14 / b;
        }
        if (nSort[i] === 'K') {
          total[y] += 13 / b;
        }
        if (nSort[i] === 'Q') {
          total[y] += 12 / b;
        }
        if (nSort[i] === 'J') {
          total[y] += 11 / b;
        }
        if (nSort[i] === '1') {
          total[y] += 10 / b;
        }
        if (['2', '3', '4', '5', '6', '7', '8', '9'].includes(nSort[i])) {
          total[y] += Number(nSort[i]) / b;
        }
      }
    }
  }
  const b = [];
  let max = total[0];
  if (total.length > 1) {
    for (let i = 0; i < total.length; i += 1) {
      if (total[i] > max) {
        max = total[i];
      }
    }
    for (let i = 0; i < total.length; i += 1) {
      if (total[i] === max) {
        b.push(hands[i]);
      }
    }
    return b;
  }
  return [hands[0]];
};
