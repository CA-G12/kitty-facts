let customttext = document.getElementById("pick");
let img = document.getElementById("kitty-img");
let input = document.getElementById("text-input");
let btn = document.getElementById("makeyourown-btn");

function callPics(response) {
  let imageId = response[getRandomId()].id;
  img.style.backgroundImage = `url("https://cataas.com/cat/${imageId}")`;
}
function callFacts(response) {
  img.textContent = response.fact;
}

window.addEventListener("load", (event) => {
  fetch(url, callFacts);
  fetch(cataasUrl, callPics);
});

btn.addEventListener("click", () => {
  customttext.textContent = input.value;
});
