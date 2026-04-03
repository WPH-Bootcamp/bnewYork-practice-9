// 1. Function Expression (Fungsi yang disimpan dalam variabel)
const sayHello = function () {
  console.log('Hello');
};

sayHello();

// 2. High Order Function (Dikirim sebagai parameter)
function execute(fn) {
  fn();
}

execute(function () {
  console.log('Ini juga fungsi gais');
});

// 3. High Order Function (Dikembalikan dari function)
function createGreeting() {
  return function () {
    console.log('Olaaaa');
  };
}

const olaa = createGreeting();
olaa();

// Pembuktian Function is Object
function salam(name) {
  return 'Hello ' + name;
}

console.log(salam instanceof Object);

// Fucntion Bisa Punya Property
salam.language = 'indonesia';
salam.version = '1.1.0';

console.log(salam.language);
console.log(salam);

// Property Bawaan Function
console.log(salam.name);
console.log(salam.length);
