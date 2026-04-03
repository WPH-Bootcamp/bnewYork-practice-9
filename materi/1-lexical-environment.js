const globalEnvironmentVar = 'Global';

function privateEnvironment1() {
  const privateEnvironmentVar = 'Private';
  console.log(privateEnvironmentVar);
  console.log(globalEnvironmentVar);
}

function privateEnvironment2() {
  const privateEnvironmentVar = 'Private2';
  console.log(privateEnvironmentVar);
}

privateEnvironment1();
console.log(globalEnvironmentVar);

// Scope Chain

const globalVar = 'Global Variabel';
function outer() {
  const outerVar = 'Outer Variabel';
  function inner() {
    const innerVar = 'Inner Variabel';
    console.log(`${innerVar}, ${outerVar}, ${globalVar}`);
  }
  inner();
}
outer();

// Closure
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
