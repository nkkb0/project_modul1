//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.accountBalance = 0;
    this.isOpen = false;
  }

  open() {
    if (this.isOpen === false) {
      this.isOpen = true;
    } else {
      throw new ValueError('Account is open');
    }
    return this;
  }

  close() {
    if (this.isOpen === true) {
      this.isOpen = false;
      this.accountBalance = 0;
    } else {
      throw new ValueError('Account is closed');
    }
    return this;
  }

  deposit(sum) {
    if (this.isOpen === false || Number(sum) < 0) {
      throw new ValueError('Bank account error');
    }
    this.accountBalance += sum;
  }

  withdraw(sum) {
    if (this.isOpen === false || Number(sum) > this.accountBalance || Number(sum) < 0) {
      throw new ValueError('Bank account error');
    }
    this.accountBalance -= sum;
  }

  get balance() {
    if (this.isOpen === false) {
      throw new ValueError('Bank account error');
    }
    return this.accountBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
