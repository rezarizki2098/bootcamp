// * aplikasi matematika
const tambah = function (x, y) {
  return x + y;
};

// * function for
function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

function acak(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

console.log(acak(rollDie));

// * function kondisi
function nilaiMinMax(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const anakKecil = nilaiMinMax(1, 7);
const remaja = nilaiMinMax(8, 17);
const dewasa = nilaiMinMax(17, 60);
const lansia = nilaiMinMax(61, 120);

console.log(anakKecil(1));
console.log(anakKecil(10));
