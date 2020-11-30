// Alert
// alert("this is working!!");

// Prompt
// let userName = prompt("Enter your name");
// alert("Welcome to my project " + userName);

let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#txt-input");

btnTranslate.addEventListener("click", function () {
  console.log("clicked!");
  console.log(textInput.value);
});

// Same As Above
// btnTranslate.addEventListener("click", clickHandler);
// function clickHandler() {
//   console.log("clicked!!");
// }
