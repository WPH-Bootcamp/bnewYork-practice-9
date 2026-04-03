// 1. setTimeout()

console.log('Mulai');

console.log('Proses');

setTimeout(() => {
  console.log('Selesai');
}, 3000);

// 2. setInterval
let count = 0;

const id = setInterval(() => {
  count++;
  console.log(`Tick ${count}`);
  if (count === 3) {
    clearInterval(id);
  }
}, 1000);
