const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;

app.use(morgan("dev"));
app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
});

//? ini adalah kondisi middleware untuk menangani satu path saja
const secretPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === "secret") {
        next();
    } else {
        res.status(401).send("You Need Password");
    }
};

// app.use((req, res, next) => { //? ini adalah kondisi middleware jika terpenuhi maka semua path dibawahnya bisa diakses
//     const { password } = req.query;
//     if (password === "secret") {
//         next();
//     } else {
//         res.status(401).send("You Need Password");
//     }
// });

app.get("/", (req, res) => {
    console.log(`Date Time : ${req.requestTime}`);
    res.send("Hello World!");
});

app.get("/dogs", (req, res) => {
    res.send("Woof Woof");
});

app.get("/secret", secretPassword, (req, res) => {
    //? ini cara pemanggilan untuk kondisi path tertentu
    res.send("Rahasia saya adalah makan sambil berak");
});

app.use((req, res) => {
    res.status(404).send("Not Found");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
