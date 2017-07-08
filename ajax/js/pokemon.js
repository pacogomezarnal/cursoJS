var req = new XMLHttpRequest();
req.open('GET', 'https://www.reddit.com/r/Pokemongo_DC/.json', true);
function respuestaHTTP(aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200)
     {
      var arrayRespuesta=JSON.parse(req.responseText);
      var datosRespuesta=arrayRespuesta["data"]["children"];
      for (var i = 0; i < datosRespuesta.length; i++) {
        console.log(datosRespuesta[i]["data"]["title"]);
        var divTitulares = document.getElementById("titulares");
        var parrafoNuevo=document.createElement("p");
        var textoParrafoNuevo=document.createTextNode(datosRespuesta[i]["data"]["title"]);
        parrafoNuevo.appendChild(textoParrafoNuevo);
        divTitulares.appendChild(parrafoNuevo);
      }
      //console.log(datosRespuesta);
    }else{
      console.log("Peticion erronea");
    }
  }
};
req.onreadystatechange = respuestaHTTP;
req.send(null);
