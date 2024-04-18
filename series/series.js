//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = series;
    if (this.series === '') {
      throw new Error('series cannot be empty');
    }
  }

  slices(sliceLength) {
    const arr = [];
    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    } else if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    } else if (this.series.length < sliceLength) {
      throw new Error('slice length cannot be greater than series length');
    }
    let counter = 0;
    let i = Number(sliceLength);
    this.series = this.series.split('');
    for (let n = 0; n < this.series.length; n += 1) {
      this.series[n] = Number(this.series[n]);
    }
    for (let c = 0; this.series.length - sliceLength >= c; c += 1) {
      arr.push(this.series.slice(counter, i));
      counter += 1;
      i += 1;
    }
    return arr;
  }
}
