// Alert
// alert("this is working!!");

// Prompt
// let userName = prompt("Enter your name");
// alert("Welcome to my project " + userName);

let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#txt-input");
let outputMsg = document.querySelector("#output-msg");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructUrl(inputText) {
  return url + "?" + "text=" + inputText;
}

function doFetch(text) {
  fetch(constructUrl(text))
    .then((response) => response.json())
    .then((json) => {
      outputMsg.innerText = json.contents.translated;
    });
}

function clickHandler() {
  // console.log("clicked!");
  // console.log(textInput.value);
  // outputMsg.innerText = textInput.value;
  doFetch(textInput.value);
}

btnTranslate.addEventListener("click", clickHandler);

// Same As Above
// btnTranslate.addEventListener("click", clickHandler);
// function clickHandler() {
//   console.log("clicked!!");
// }
