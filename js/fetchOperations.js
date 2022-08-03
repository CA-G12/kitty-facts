
function loadCataas(){

    let cataasUrl=`https://cataas.com/api/cats`
    let cataasXhr = new XMLHttpRequest();
    let img=document.getElementById("kitty-img");
    cataasXhr.onreadystatechange = function() {
        if (cataasXhr.readyState == 4)
            if(cataasXhr.status == 200) {
                const response = JSON.parse(cataasXhr.responseText)
                let imageId= response[0].id
                img.src=`https://cataas.com/cat/${imageId}/says/hello%20world`
                //hello world here will be replaced with the response from the quotes api
        }else{
            //handling error in connection
        }
    };
    cataasXhr.open("GET", cataasUrl, true);
    cataasXhr.send();
    return cataasXhr;
}
loadCataas()
