let img = document.getElementById("kitty-img");
let fact = document.getElementById("fact");

function callPics(response) {
  let imageId = response[getRandomId()].id;
  img.src = `https://cataas.com/cat/${imageId}`;
}
function callFacts(response) {
  fact.textContent = response.fact;
}
let input = document.getElementById("text-input")
let btn = document.getElementById("makeyourown-btn")
window.addEventListener('load', (event) => {
    
});

btn.addEventListener("click",()=>{
let customttext =document.getElementById("pick")
customttext .textContent=input.value

} )
