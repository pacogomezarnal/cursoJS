var req = new XMLHttpRequest();
req.open('GET', 'https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest', true);
function respuestaHTTP(aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200)
      console.log(req.responseText);
     else
      console.log("Peticion erronea");
  }
};
req.onreadystatechange = respuestaHTTP;
req.send(null);
