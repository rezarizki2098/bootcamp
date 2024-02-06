// * contoh array dan objek pertama
let dataKastemer = [
  {
    produk: "baju",
    harga: 50000,
    item: 2,
  },
  {
    produk: "celana",
    harga: 25000,
    item: 5,
  },
  {
    produk: "sepatu",
    harga: 70000,
    item: 1,
  },
];

// * contoh array dan objek ke dua
let dataPeserta = {
  namaDepan: "reza",
  namaBelakang: "riski",
  hobi: ["berenang", "badminton"],
  ukuran: {
    celana: 33,
    baju: "m",
  },
};

// ? bagaimana cara mengakses data ke dua dari #dataKastemer
let tampil = dataKastemer[1].produk;
console.log(tampil);

let tampil2 = dataPeserta.hobi[1];
console.log(tampil2);
