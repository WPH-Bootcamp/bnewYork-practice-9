'use strict';

try {
  const x = undefined;
  console.log(x);
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Reset code');
}

function cekUmur(umur) {
  if (umur < 18) {
    throw new Error('Belum cukup umur');
  }
  return 'Akses diterima';
}

try {
  console.log(cekUmur(16));
} catch (error) {
  console.error(error.message);
}
