const mongoose = require("mongoose");
const Product = require("./product");
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, "Farm must have a name!"],
    },
    city: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Email required"],
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
});

// DELETE ALL ASSOCIATED PRODUCTS AFTER A FARM IS DELETED
farmSchema.post("findOneAndDelete", async function (farm) {
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
        console.log(res);
    }
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;

//? CARA MENGHAPUS SALAH SATU PRODUK YANG ADA DI OBJEK PRODUCTS
// const Farm = require('path-to-your-farm-model'); // Sesuaikan dengan path yang benar

// async function removeProductFromFarm(farmId, productIdToRemove) {
//     try {
//         // Temukan farm berdasarkan ID
//         const farm = await Farm.findById(farmId);

//         if (!farm) {
//             // Farm tidak ditemukan
//             console.log('Farm not found');
//             return;
//         }

//         // Cari index dari productIdToRemove di array products
//         const indexToRemove = farm.products.indexOf(productIdToRemove);

//         if (indexToRemove === -1) {
//             // ID produk tidak ditemukan di array
//             console.log('Product not found in farm');
//             return;
//         }

//         // Hapus ID produk dari array products
//         farm.products.splice(indexToRemove, 1);

//         // Simpan perubahan
//         await farm.save();
//         console.log('Product removed successfully');
//     } catch (error) {
//         console.error('Error removing product from farm:', error.message);
//     }
// }

// // Contoh penggunaan
// const farmId = 'your-farm-id'; // Ganti dengan ID farm yang ingin diubah
// const productIdToRemove = 'product-id-to-remove'; // Ganti dengan ID produk yang ingin dihapus
// removeProductFromFarm(farmId, productIdToRemove);
