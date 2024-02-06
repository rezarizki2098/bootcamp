const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Cannot Be Blank"],
    },
    price: {
        type: Number,
        required: [true, "Cannot Be Blank"],
    },
    category: {
        type: String,
        lowercase: true,
        enum: ["fruit", "vegetable", "dairy"],
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
