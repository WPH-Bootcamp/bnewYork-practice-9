class Person {}
class Animal {}

class Dog extends Animal {}

const blacky = new Dog();
console.log(blacky instanceof Dog);
console.log(blacky instanceof Animal);
console.log(blacky instanceof Person);
