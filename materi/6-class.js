'use strict';

// Contoh Class
{
  try {
    class Car {
      constructor(merk, type) {
        // Properties
        this.merk = merk;
        this.type = type;
      }

      // Method -> Fungsi dalam object
      detailCar() {
        return `Merk : ${this.merk} and Type : ${this.type}`;
      }

      go() {
        return `${this.merk} Jalann....`;
      }

      brake() {
        return this.merk + ' Berhentii.';
      }
    }

    const BMW = new Car('BMW', 'Sedan');

    console.log(BMW.merk);
    console.log(BMW.type);
    console.log(BMW.go());
    console.log(BMW.brake());
    console.log(BMW.detailCar());

    console.log('==========');

    const Xpander = new Car('Xpander', 'SUV');
    console.log(Xpander.merk);
    console.log(Xpander.type);
    console.log(Xpander.go());
    console.log(Xpander.brake());
    console.log(Xpander.detailCar());

    console.log('==========');

    const Civic = new Car('Civic', 'Sedan');
    console.log(Civic.merk);
    console.log(Civic.type);
    console.log(Civic.brake());
  } catch (error) {
    console.error(error.message);
  }
}

console.log('==========');

// Contoh Function + Prototype
{
  function Car(merk, type) {
    this.merk = merk;
    this.type = type;
  }

  Car.prototype.go = function () {
    return 'Jalannn...';
  };

  const BMW = new Car('BWM', 'Sedan');
  console.log(BMW.merk);
}

{
  // Pembuktian Sederhana
  class Person {
    greet() {}
  }

  const p = new Person();

  console.log(Object.getPrototypeOf(p) === Person.prototype);
}
