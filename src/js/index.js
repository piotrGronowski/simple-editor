import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const entry = localStorage.getItem("entry");
let result = "";
if (entry) {
  result = entry;
}
const entryInput = document.querySelector(".editor__text");
/* entryInput.value = result; */

const buttonSave = document.querySelector(".button__save");
console.log(buttonSave);

buttonSave.addEventListener("click", () => {
  localStorage.setItem("entry", entryInput.value);
});
const buttonLoad = document.querySelector(".button__load");

buttonLoad.addEventListener("click", () => {
  localStorage.getItem("entry");
  entryInput.value = result;
});
