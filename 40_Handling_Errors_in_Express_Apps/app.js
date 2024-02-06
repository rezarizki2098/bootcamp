const express = require("express");
const app = express();
const morgan = require("morgan"); //? middleware
const AppError = require("./AppError");
const PORT = 3000;

app.use(morgan("tiny"));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use("/dogs", (req, res, next) => {
    console.log("I love Dogs");
    next();
});

const verifyPassword = (req, res, next) => {
    // const { password } = req.query;
    if (req.query.password === "chicken") {
        next();
    }
    throw new AppError(`Invalid password`, 401);
};

app.get("/dogs", (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send("Woof Woof");
});

app.get("/secret", verifyPassword, (req, res) => {
    res.send("Rahasia terbesar saya adalah makan di WC");
});

app.get("/admin", (req, res) => {
    throw new AppError("You Are Not An Admin", 403);
});

// error
app.get("/error", (req, res) => {
    chicken.fly();
});
// end of error

// Notfound error
app.use((req, res) => {
    res.status(404).send("Not Found");
});

app.get("/product/:id", async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return next(new AppError("Product not found", 404));
    }
    res.render("/product/show", { product });
});

app.get("/products/:id/edit", async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id);
    if (!product) {
        return next(new AppError("Product not found", 404));
    }
    res.render("/product/edit", { product });
});
// end of notfound error

// middleware
app.use((err, req, res, next) => {
    const { status = 500, message = "Something Went Wrong" } = err;
    res.status(status).send(message);
});
// end of middleware

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//? async Error
// harus menambahkan next
// (req,res,next)
// if (!product) {
//     return next(new AppError("Product not found", 404));
// }
//? end async Error
