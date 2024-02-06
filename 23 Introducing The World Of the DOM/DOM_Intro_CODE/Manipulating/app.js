// const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//   link.innerText = "I AM A LINK!!!!";
// }

// for (let link of allLinks) {
//   link.style.color = "rgb(0, 108, 134)";
//   link.style.textDecorationColor = "magenta";
//   link.style.textDecorationStyle = "wavy";
//   link.style.backgroundColor = "purple";
//   link.style.animationName = "slide"; // ! ini masih salah
// }

// const text = document.querySelector("#container");
// text.style.textAlign = "center";

// const gambar = document.querySelector("img");
// gambar.style.width = "150px";
// gambar.style.borderRadius = "50%";

// // * ubah warna yg sudah memiliki class akan ditimpa
// const ubahWarna = document.querySelectorAll("li");

// for (let ubh of ubahWarna) {
//   ubh.classList.toggle("highlight");
// }

// //* cara buat button
// const container = document.querySelector("#container");
// for (let i = 0; i < 100; i++) {
//   const btn = createElement("button");
//   btn.innerText = "click";
//   container.appendChild(btn);
// }

//* cara buat background color klik
const h1 = document.querySelector("h1");

function ubahWarna1() {
  h1.classList.toggle("warnaTeks");
}
h1.onclick = ubahWarna1();
