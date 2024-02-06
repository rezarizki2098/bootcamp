const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true })); //? digunakan untuk mengurai data ke dalam bentuk json yg kompleks
app.use(express.json());
app.use(methodOverride("_method")); //? digunakan untuk edit atau delete pada express.js
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// fake database
let comments = [
  {
    id: uuid(),
    username: "rezarizki",
    comment: "Saya Suka Bermain Badminton",
  },
  {
    id: uuid(),
    username: "selina",
    comment: "Saya Suka Cemburu",
  },
  {
    id: uuid(),
    username: "rifta",
    comment: "Saya Adalah Adikknya Reza",
  },
  {
    id: uuid(),
    username: "naura",
    comment: "Saya Sedang Berjuang Agar Putih",
  },
];
// end fake database

// index
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments }); //?ini untuk menampilkan allcomment
});
// end index

// new comment
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments"); //? digunakan untuk ketika user sudah menginput form akan diarahkan ke PATH comments dan menampilkan all comments
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

// end new comment

// edit comment

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);
  res.render("comments/edit", { foundComment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentsText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentsText;
  res.redirect("/comments");
});

// end edit comment

// delete comment

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

// end delete comment

// tes
app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  const harga = 10000;
  const { meat, qty } = req.body;
  res.send(`OK, Kamu Mesen ${meat} Sebanyak ${qty}. Total Harga ${qty * harga}`);
});
// end tes
app.listen(3000, () => {
  console.log("On PORT 3000");
});
