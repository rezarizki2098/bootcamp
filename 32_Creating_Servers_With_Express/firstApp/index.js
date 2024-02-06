import express from "express";
const app = express();
// console.dir(app);

// app.use((req, res) => {
//   console.log("We Got a New Request");
//   res.send("Hello, We Got your Request! This is a Respon");
//   res.send({
//     nama: "reza",
//     umur: 25,
//     hobi: "badminton",
//   //   });
//   res.send("<h1>This Is my WEBPAGE</h1>");
// });

app.get("/", (req, res) => {
  //? untuk homepage
  res.send("Welcome To the Home Page!!");
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats!!!"); //? tidak akan tampil di browser, melainkan disisi server
});

app.get("/cats", (req, res) => {
  //   console.log("Cat Request");
  res.send("MEOW!!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} Subreddit</h1>`); //? Digunakan untuk url yg banyak
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID : ${postId} On The ${subreddit} Subreddit</h1>`); //? Digunakan untuk url yg banyak
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("NOTHING FOUND IF NOTHING SEARCH");
  }
  res.send(`<h1> SEARCH RESULT FOR : ${q}</h1>`);
});

app.listen(8080, () => {
  console.log("Listening ON PORT 8080 !");
});

app.get("*", (req, res) => {
  //? '*' digunakan jika url sama sekali tidak ada
  console.log("I dont know that path");
});
