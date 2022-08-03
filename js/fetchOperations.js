let url = "https://catfact.ninja/fact";
let cataasUrl = `https://cataas.com/api/cats`;

function fetch(url, callback) {
  const xhr = new XMLHttpRequest();
  const response = (xhr.onreadystatechange = function () {
    if (xhr.readyState == 4)
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        return callback(response);
      }
  });
  xhr.open("GET", url);
  xhr.send();
}

