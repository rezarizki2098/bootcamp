const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
  console.log("Connected");
}
main().catch((err) => console.log(err));

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});
// start virtual
personSchema.virtual("fullName").get(function () {
  return `${this.first} ${this.last}`;
});
// end virtual

// start middleware
personSchema.pre("save", function () {
  this.first = "Hello";
  this.last = "World";
  console.log("About the Save");
});

personSchema.post("save", function () {
  console.log("~~ Just Saved ~~");
});
// end middleware

const Person = mongoose.model("Person", personSchema);

const reza = new Person({ first: "Reza", last: "Rizki" });

console.log(reza.virtual);
