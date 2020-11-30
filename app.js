// Alert
// alert("this is working!!");

// Prompt
// let userName = prompt("Enter your name");
// alert("Welcome to my project " + userName);

let btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", function () {
  console.log("clicked!");
});

btnTranslate.addEventListener("click", clickHandler);
function clickHandler() {
  console.log("clicked!!");
}
