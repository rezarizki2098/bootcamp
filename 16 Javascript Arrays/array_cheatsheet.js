// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

// *Push untuk nambah data paling akhir
// *Pop untuk hapus data paling akhir
// *Shift untuk hapus data paling awal
// *Unshift untuk nambah data paling awal
// let namaHari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];

// console.log(namaHari);

// namaHari.push("minggu");
// console.log(namaHari);

// namaHari.pop(namaHari);
// console.log(namaHari);

// namaHari.shift(namaHari);
// console.log(namaHari);

// namaHari.unshift("Senin");
// console.log(namaHari);

// * concat menyatukan 2 atau lebih array
// * includes mencocokan data, jika ada bernilai true jika tidak false
// * indexOf lebih cocok untuk mencari data
// * join
// * reverse membalikkan susunan yang akhir jadi awal yang awal jadi akhir
// * slice menghapus atau menghilangkan array dari index yg kita mau
// * splice (index ke berapa mau diletak, 0 nol jika mau menambahkan tanpa hapus 1 menghapus dan mengganti data di index yg kita pilih)
// * sort sintaks untuk mengurutkan huruf awalan
// let warna1 = ["biru", "kuning", "hijau"];
// let warna2 = ["ungu", "orange", "purple"];
// let campurWarna = warna1.concat(warna2);
// console.log(campurWarna);

// let mencariWarna = campurWarna.includes("hitam");
// console.log(mencariWarna);

// let cariWarna = campurWarna.indexOf("orange");
// console.log(cariWarna);

// let balikWarna = campurWarna.reverse(campurWarna);
// console.log(balikWarna);

// let potongWarna = campurWarna.slice(2, 5);
// console.log(potongWarna);

// let tambahWarna = balikWarna.splice(2, 0, "pelangi");
// console.log(tambahWarna);
// console.log(balikWarna);

// let hapusWarna = balikWarna.splice(2, 1, "pelangi bukan warna");
// console.log(hapusWarna);
// console.log(balikWarna);

// let urutkanWarna = balikWarna.sort();
// console.log(urutkanWarna);
