const requestServer = (url, method, body, callback) => {
    // Metode XHTTPRequest
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        let JSONData = JSON.parse(xhttp.response);
        console.log(JSON.parse(xhttp.response), 'ini hasil response');
        callback(JSONData);
    }
    xhttp.open(method, url);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(body);
}