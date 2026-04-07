class Dompet {
  #balance = 0;

  constructor(initial) {
    this.#balance = initial;
  }

  deposit(amount) {
    if (!this.#validate(amount)) {
      console.log('Deposit gagal, jangan utang gaiss');
      return;
    }
    this.#balance = this.#balance + amount;
  }

  getBalance() {
    return this.#balance;
  }

  #validate(amount) {
    return amount > 0;
  }
}

const ucup = new Dompet(9000);
console.log(ucup);

console.log(ucup.getBalance());
ucup.deposit(-1000);
console.log(ucup.getBalance());
ucup.deposit(20000);
console.log(ucup.getBalance());
