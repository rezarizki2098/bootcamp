const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/movieApp");
  console.log("Connected");
}

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// const tsubasa = new Movie({ title: "Tsubasa", year: 2001, score: 9.2, rating: "R" });

// Movie.insertMany([
//   //? kenapa Then dibawah bisa, karena insertMany di dalamnya sudah ada promise
//   { title: "Spongebob", year: 2001, score: 8.5, rating: "R" },
//   { title: "Jujutsu Kaisen", year: 2021, score: 9.5, rating: "SS" },
//   { title: "One Piece", year: 2001, score: 8.5, rating: "R" },
//   { title: "Naruto", year: 2011, score: 9.5, rating: "S" },
//   { title: "Boruto", year: 2020, score: 8.5, rating: "C" },
// ])
//   .then((data) => {
//     console.log("It Worked");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Something Is Wrong", err);
//   });

//? kita bisa mencari berdasarkan ID dalam pencarian database
// Movie.findById("659f56cda0786bba56bdb9cf").then((m) => console.log(m));

//? untuk update salah satu
// Movie.updateOne({ title: "Naruto" }, { year: 2008 }).then(res => console.log(res)); // disini yg di ubah adalah yearnya, dan titlenya itu adalah kondisi

//? jika ingin mencari film berdarkan array
// db.movies.find({title: {$in:['Naruto','Boruto']}})

//? updateMany dengan array
// Movie.updateMany({ title: { $in: ["Naruto", "Boruto"] } }, { score: 10 }).then((res) =>
//   console.log(res)
// );

//? mencari satu data dan Update
// Movie.fineOneAndUpdate({ title: tsubasa }, { score: 6 }).then((m) => console.log(m));

//? untuk Menhapus data di database
// Movie.deleteOne({ title: "tsubasa" }).then((msg) => console.log(msg));

//? untuk menghapus banyak database
// Movie.deteleMany({ year: { $gte: 1999 } }).then((msg) => console.log(msg));

//? untuk mencari satu data dan hapus
// Movie.findOneAndDelete({ title: "Boruto" }).then((m) => console.log(m));
