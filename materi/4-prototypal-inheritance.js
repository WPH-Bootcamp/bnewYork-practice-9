const animal = {
  jenis: 'Hewan',
  tipe: 'carnivora',
  bersuara() {
    return '...';
  },
};

const kucing = Object.create(animal);
const anjing = Object.create(animal);

kucing.nama = 'Kucing Oren';
kucing.bersuara = function () {
  return 'Miawww';
};

console.log(kucing.jenis);
console.log(kucing.nama);
console.log(kucing.bersuara());
console.log(kucing.tipe);

console.log('==========');

anjing.nama = 'Blacky';
anjing.bersuara = function () {
  return 'Guk guk';
};

console.log(anjing.nama);
console.log(anjing.bersuara());
console.log(anjing.tipe);
