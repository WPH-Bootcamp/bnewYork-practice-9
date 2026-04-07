class Person {
  static species = 'Homo Sapiens';

  constructor(name) {
    this.name = name;
  }

  static createAnonymous() {
    return new Person('Anonim');
  }
}

console.log(Person);
console.log(Person.species);
console.log(Person.createAnonymous());

const ucup = new Person('Ucup');
console.log(ucup);
console.log(ucup.name);
console.log(ucup.species);
console.log(ucup.createAnonymous());

const renday = Person.createAnonymous();
console.log(renday.name);
