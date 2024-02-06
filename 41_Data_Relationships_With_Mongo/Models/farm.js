const mongoose = require("mongoose");
const { Schema } = mongoose;

// connect to database
mongoose.connect("mongodb://localhost:27017/relationshipDemo"),
    {
        useNewUrlParser: true,
        useCreateUrlParser: true,
        useUnifiedTopology: true,
    };

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});
// end connect to database

// one to many
const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"],
        default: "Spring",
    },
});

// menghubungkan table satu dengan yang lain
const farmSchema = new Schema({
    name: String,
    city: String,
    products: [
        {
            type: Schema.Types.ObjectId, //? ini adalah cara untuk menghubungkan table satu dengan table lain
            ref: "Product",
        },
    ],
});
// end menghubungkan

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// Product.insertMany([
//     {
//         name: "Sugar",
//         price: 23000,
//         season: "Spring",
//     },
//     {
//         name: "Apple",
//         price: 11000,
//         season: "Fall",
//     },
//     {
//         name: "Melon",
//         price: 13000,
//         season: "Winter",
//     },
// ]);
// end to many

const makeFarm = async () => {
    const farm = new Farm({ name: "Full Belly Farm", city: "Guinda, CA" });
    const sugar = await Product.findOne({ name: "Sugar" });
    farm.products.push(sugar);
    farm.save();
    console.log(farm);
};

const addProduct = async () => {
    const farm = await Farm.findOne({ name: "Full Belly Farm" });
    const apple = await Product.findOne({ name: "Apple" });
    farm.products.push(apple);
    await farm.save();
    console.log(farm);
};

Farm.findOne({ name: "Full Belly Farm" })
    .populate("products")
    .then((farm) => console.log(farm));
