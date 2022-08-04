let customttext = document.getElementById("custom-text");
let img = document.getElementById("kitty-img");
let fact = document.getElementById("fact");
let input = document.getElementById("text-input");
let btn = document.getElementById("makeyourown-btn");
let newFact = document.getElementById("randomize-btn");
const loader = document.querySelector(".loader");

function callPics(response, node) {
  let imageId = response[getRandomId()].id;
  node.style.backgroundImage = `url("https://cataas.com/cat/${imageId}")`;
}
function callFacts(response, node) {
  node.textContent = response.fact;
}

window.addEventListener("load", (event) => {
  loader.classList.add("loader--hidden");
  fetch(url, callFacts, img);
  fetch(cataasUrl, callPics, img);
});

btn.addEventListener("click", (event) => {
  customttext.textContent = input.value;
  event.preventDefault();
  let newFact = input.value;
  input.value="";
  fetch(cataasUrl, callPics, customttext);
  setTimeout(() => {
    customttext.textContent = newFact;
  }, 1000);
});

newFact.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(url, callFacts, img);
  fetch(cataasUrl, callPics, img);
});
