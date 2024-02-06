const mongoose = require("mongoose");
const Product = require("./models/product");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
  console.log("Connected Mongoose");
}
main().catch((err) => console.log("Mongoose Error", err));

// update data
// const p = new Product({
//   name: "Banana",
//   price: 15000,
//   category: "fruit",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log("Data Tidak Berhasil Disimpan", err);
//   });

const tambahData = [
  {
    name: "Pisang",
    price: 13000,
    category: "fruit",
  },
  {
    name: "Brokoli",
    price: 17000,
    category: "vegetable",
  },
  {
    name: "Susu Kedelai",
    price: 20000,
    category: "dairy",
  },
  {
    name: "Kangkung",
    price: 7000,
    category: "vegetable",
  },
  {
    name: "Apel",
    price: 35000,
    category: "fruit",
  },
  {
    name: "Indomilk",
    price: 6000,
    category: "dairy",
  },
];

Product.insertMany(tambahData)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Update Data Tidak Berhasil", err);
  });
// end update data
