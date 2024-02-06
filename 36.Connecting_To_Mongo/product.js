const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
  console.log("Connected");
}
main().catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price Harus diatas dari 0"], //? penulisan sintak ini bawaan dari mongodb untuk menentukan jumlah minimum dan mengeluarkan pesan error jika tidak terpenuhi
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    onStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"], //? enum digunakan untuk menyimpan nilai ke dalam bentuk array
  },
});

// start Instance Method
productSchema.methods.namaVariable = function () {
  //? ini adalah instance Method
  console.log("Objek Ditemukan");
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.discount = function () {
  this.price = this.price - 0.2 * this.price;
  return this.save();
};

productSchema.methods.addOnline = function (tambah) {
  this.qty.online = this.qty.online + tambah;
  return this.save();
};

productSchema.methods.addCategory = function (newCategory) {
  this.categories.push(newCategory);
  return this.save();
};
// end Instance Method

// start Static Method
productSchema.statics.fireSale = function () {
  return Product.updateMany({}, { onSale: true }); //? digunakan untuk mengupdate semua data dengan menambahkan onSale menjadi TRUE
};

// end Static Method

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Kemeja" });
  console.log(foundProduct);
  await foundProduct.addCategory("Seragam");
  await foundProduct.addOnline(5);
  await foundProduct.discount();
  console.log(foundProduct);
  // foundProduct.namaVariable(); //? ini adalah cara untuk memanggil instance Method
};

Product.fireSale().then((res) => console.log(res));

// const barang = new Product({
//   name: "Kemeja",
//   price: 164999,
//   categories: ["Pakaian"],
//   size: "SL",
// });
// barang
//   .save()
//   .then((data) => {
//     console.log("It Worked");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh No Error");
//     console.log(err);
//   });

//! Kita bisa memberikan logika error tanpa mengetik runValidators : true
// productSchema.pre("findOneAndUpdate", function (next) {
//   const dataUpdate = this.getUpdate;
//   if (dataUpdate.price < 0) {
//     return next(new Error("Harga Tidak Boleh Di Bawah Rp.0"));
//   }
//   next();
// });

// ? jika di update maka data masih bisa diubah walau sudah di setting min 0, jadi agar ini terhindar dari user yg buat mines di form update kita kasih kondisi agar tidak bisa input harga minus
// Product.findOneAndUpdate(
//   { name: "Tas Selempang" },
//   { price: 400000 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("It Worked");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh No Error");
//     console.log("Error Update Data", err.message);
//   });
