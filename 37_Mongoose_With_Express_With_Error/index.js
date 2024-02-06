const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const AppError = require("./AppError");
const methodOverride = require("method-override");

// import Product
const Product = require("./models/product");
const { nextTick } = require("process");
// end import Product

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
    console.log("Connected Mongoose");
}
main().catch((err) => console.log("Mongoose Error", err));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// category
const categories = ["fruit", "vegetable", "dairy"];
// end category

// form input
app.get("/product/new", (req, res) => {
    //? ada bug dimana jika aku letakkan ini dibawah dari /products/:id script ini akan error
    res.render("products/new", { categories });
});

// funtion error
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((e) => next(e));
    };
}
// end function error

app.post(
    "/product",
    wrapAsync(async (req, res, next) => {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/product/${newProduct._id}`);
    })
);
// end form input

// show data
app.get(
    "/product",
    wrapAsync(async (req, res, next) => {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category });
            res.render("products/index", { products, category });
        } else {
            const products = await Product.find({});
            res.render("products/index", { products, category: "All" });
        }
    })
);

app.get(
    "/product/:id",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const products = await Product.findById(id);
        if (!products) {
            throw new AppError("Product not found", 404);
        }
        res.render("products/show", { products });
    })
);
// end show data

// edit data
app.get(
    "/product/:id/edit",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const products = await Product.findById(id);
        if (!products) {
            throw new AppError("Product not found", 404);
        }
        res.render("products/edit", { products, categories });
    })
);

app.put(
    "/product/:id",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body, {
            runValidators: true,
            new: true,
        });
        res.redirect(`/product/${products._id}`);
    })
);
// end edit data

// delete product
app.delete(
    "/product/:id",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.redirect("/product");
    })
);
// end delete product

// custom error handler
const handleValidationError = (err) => {
    // console.dir(err);

    return err;
};

app.use((err, req, res, next) => {
    // ? ini adalah object yang ada di dalam error
    console.log("name:", err.name);
    console.log("message:", err.message);
    console.log("stack:", err.stack);
    console.log("fileName:", err.fileName);
    console.log("lineNumber:", err.lineNumber);
    console.log("columnNumber:", err.columnNumber);
    if (err.name === "validationError") err = handleValidationError(err);
    next(err);
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});
// end custom error handler
app.listen(3000, () => {
    setTimeout(() => {
        console.log("APP IS LISTENING ON PORT 3000");
    }, 1000);
});
