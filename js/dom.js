let img = document.getElementById("kitty-img");
let fact = document.getElementById("fact");

function callPics(response) {
  let imageId = response[5].id;
  img.src = `https://cataas.com/cat/${imageId}`;
}
function callFacts(response) {
  fact.textContent = response.fact;
}
