// * For
// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// let data = ["Reza", "Riski", "Arifianda"];
// for (let j = 0; j < data.length; j++) {
//   console.log(j, data[j]);
// }

// let testing = 'reza';
// for (let k = 0; k<4; k++){
//     console.log('Output : ',k);
//     for (let l = 1; l<=testing.length; l++){
//         console.log(testing[l]);
//     }
// }

// * for pemisah data array
let namaUser = [
  ["reza", "rizki", "arifianda"],
  ["rifta", "alvira", "tahsya"],
  ["naura", "kinayya", "hafiz"],
];

// for (let i = 0; i<namaUser.length; i++){
//     const tabel = namaUser[i];
//     console.log(`Tabel #${i}`);
//     for (let j = 0; j<tabel.length; j++){
//         console.log(tabel[j]);
//     }
// }

// * for while
// let data = 0

// while(data<10){
//     console.log(data);
//     data++;
// }

// let inputUser = prompt("Ucapkan apa saja = ");
// let berhenti = "stop";

// while (true) {
//   inputUser = prompt(inputUser);
//   if (inputUser === berhenti) {
//     break;
//   }
// }
// console.log("ok aku akan berhenti");

// * for of bersarang
// for (let i of namaUser) {
//   for (let j of i) {
//     console.log(`Data : ${j}`);
//   }
// }

// * for in bersarang
let data = {
  reza: 88,
  riski: 77,
  arifianda: 66,
  selina: 88,
  amalia: 66,
  savittri: 87,
};

// for (let person in data){
//   console.log(`Nama ${person}: Nilainya adalah ${data[person]}`);
// }

// for (let data1 of data){
//   console.log(`${data1}`);
// }

// ? cara menjumlahkan semua nilai yg ada di object array dan mencari rata - ratanya
let total = 0;
let nilai = Object.values(data);

for (score of nilai) {
  total += score;
}
console.log(total / nilai.length);
