// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this.robotName = Robot.releaseNames();
  }

  static releaseNamesR = [];

  static releaseNames() {
    const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const first = alph[Math.floor(Math.random() * alph.length)];
    const second = alph[Math.floor(Math.random() * alph.length)];
    const num = '1234567890';
    const three = num[Math.floor(Math.random() * num.length)];
    const four = num[Math.floor(Math.random() * num.length)];
    const five = num[Math.floor(Math.random() * num.length)];
    const name = first + second + three + four + five;
    if (!Robot.releaseNamesR.includes(name)) {
      Robot.releaseNamesR.push(name);
      return name;
    }
    return Robot.releaseNames();
  }

  get name() {
    return this.robotName;
  }

  set name(newName) {
    if (newName) {
      throw new this.ValueError('Internal name cannot be modified');
    }
  }

  reset() {
    this.robotName = Robot.releaseNames();
  }
}
