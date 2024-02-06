const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");
// console.log(redditData);

app.use(express.static(path.join(__dirname, "public"))); //? digunakan untuk menjalankan file aset di luar dari direktori utama

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //? digunakan jika kita menjalankan index.js di luar dari direktori utama

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Reza", "Rizki", "Arifianda", "Selina"];
  res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  console.log(data);
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 100) + 1;
  res.render("random", { num });
});

app.listen(3000, () => {
  console.log("Listenning ON Port 3000");
});

app.get("*", (req, res) => {
  res.render("notfound", "");
});
