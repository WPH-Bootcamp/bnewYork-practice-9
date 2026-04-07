class Person {
  constructor(name, alamat) {
    this.name = name;
    this.alamat = alamat;
  }

  greet() {
    return 'Halo, selamat pagi....';
  }
}

class Student extends Person {
  constructor(name, alamat, nis, age) {
    super(name, alamat);
    this.nis = nis;
    this.age = age;
  }

  greet() {
    return super.greet() + ' (Student)';
  }
}
const ucup = new Student('Ucup', 'Jalan untung jawa', '1239012039', 28);
console.log(ucup.name);
console.log(ucup.nis);
console.log(ucup.age);
console.log(ucup.alamat);
console.log(ucup.greet());

console.log('========');

class Teacher extends Person {
  constructor(name, alamat, nip) {
    super(name);
    this.nip = nip;
  }

  greet() {
    return 'Halo, saya teacher...';
  }
}
const renday = new Teacher('Renday', 'Jl Untung Suropati', '123091');
console.log(renday.name);
console.log(renday.nip);
console.log(renday.greet());

console.log('========');

class Animal {
  constructor(name, isCarnivor) {
    this.name = name;
    this.isCarnivor = isCarnivor;
  }
}

class Cat extends Animal {}

const Pipup = new Cat('Pipup', false);
console.log(Pipup.name);
console.log(`${Pipup.isCarnivor ? "Yes, it's carnivor" : 'No. it is not'}`);
