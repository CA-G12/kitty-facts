let customttext = document.getElementById("custom-text");
let img = document.getElementById("kitty-img");
let input = document.getElementById("text-input");
let btn = document.getElementById("makeyourown-btn");
function callPics(response,node) {
  let imageId = response[getRandomId()].id;
  node.style.backgroundImage = `url("https://cataas.com/cat/${imageId}")`;
}
function callFacts(response,node) {
  node.textContent = response.fact;
}

window.addEventListener("load", (event) => {
  fetch(url, callFacts,img);
  fetch(cataasUrl, callPics,img);
});

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let newFact=input.value;
  console.log(customttext)
  fetch(cataasUrl, callPics,customttext);
 setTimeout(()=>{customttext.textContent = newFact;},1000) 
});
