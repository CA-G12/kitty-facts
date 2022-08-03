
    const xhr = new XMLHttpRequest();
  let url ="https://catfact.ninja/fact?max_length=50"
    xhr.onreadystatechange= function () {
      if(xhr.readyState==4)
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
    

      }
    }

    xhr.open('GET',url);
    xhr.send();