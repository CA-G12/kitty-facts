let url = "https://catfact.ninja/fact";
let cataasUrl = `https://cataas.com/api/cats`;

function fetch(url, callback,node) {
  console.log(node)
  const xhr = new XMLHttpRequest();
  const response = (xhr.onreadystatechange = function () {
    if (xhr.readyState == 4)
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        return callback(data,node);
      }
  });
  xhr.open("GET", url);
  xhr.send();
}

