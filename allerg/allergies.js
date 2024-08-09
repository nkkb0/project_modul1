//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(tr) {
    this.tr = tr.toString(2);
  }

  list() {
    const list = [];
    const allergens = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];
    for (let i = 1; i <= this.tr.length && i <= 8; i += 1) {
      if (this.tr.at(-i) === '1') {
        list.push(allergens[i - 1]);
      }
    }
    return list;
  }

  allergicTo(allergen) {
    return this.list().includes(allergen);
  }
}
