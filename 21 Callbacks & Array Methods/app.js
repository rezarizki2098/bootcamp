// * callback array menjumlahkan semua data yg ada di array menggunakan For Each
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.forEach(function (num) {
  return num * 2;
});

// * Mennggunakan Map
const data = [
  {
    title: "",
    harga: "",
    year: "",
  },
  {
    title: "Sapu",
    harga: 15000,
    year: 2000,
  },
  {
    title: "baju",
    harga: 35000,
    year: 2005,
  },
  {
    title: "Celana",
    harga: 30000,
    year: 2003,
  },
  {
    title: "Jaket",
    harga: 51000,
    year: 2020,
  },
  {
    title: "jacket",
    harga: 50000,
    year: 2001,
  },
];

const titles = data.map((datas) => datas.title.toUpperCase());

console.log(titles);

// * Function Panah =>
const acakDadu = () => Math.floor(Math.random() * 6) + 1;

console.log(titles[acakDadu()]);
