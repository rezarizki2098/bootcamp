// To make an object literal:
const dog = {
  name: "Rusty",
  breed: "unknown",
  isAlive: false,
  age: 7,
};
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

const dataUser = {
  firstName: "Reza",
  lastName: "Riski",
  age: 25,
  2020: "kampret",
  hobby: "badminton",
  favoritColors: ["red", "blue", "green", "yellow"],
};
let namaUser = "lastName";
console.log(namaUser);
let liat = dataUser[namaUser];
console.log(liat);
dataUser.sekolah = "SMKN 10 Medan"; // ? cara nambah variable dan isi data
dataUser;
