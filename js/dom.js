let img = document.getElementById("kitty-img");
let fact = document.getElementById("fact");
let input = document.getElementById("text-input")
let btn = document.getElementById("makeyourown-btn")
let customttext =document.getElementById("pick")

function callPics(response) {
  let imageId = response[getRandomId()].id;
  img.src = `https://cataas.com/cat/${imageId}`;
}
function callFacts(response) {
  fact.textContent = response.fact;
}


window.addEventListener('load', (event) => {
  const loader=document.querySelector(".loader")
  loader.classList.add("loader--hidden")
  loader.addEventListener("transitionend",()=>{
  document.body.removeChild(loader)
  fetch(url, callFacts);
  fetch(cataasUrl, callPics);
});
})


btn.addEventListener("click",()=>{
customttext .textContent=input.value

} )