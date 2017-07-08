var divs = document.getElementsByTagName("div");
console.log("El numero de divs "+divs.length);
for (var i = 0; i < divs.length; i++) {
    var ids = divs[i].getAttribute("id");
    console.log("El id es "+ids);
}

var divId = document.getElementById("segundoDiv");
console.log("El id es "+divId.getAttribute("id"));

//Elementos por debajo del segundo div
var ps = divId.getElementsByTagName("p");
console.log("El numero de parrafos "+ps.length);
for (var i = 0; i < ps.length; i++) {
    var innerText = ps[i].innerHTML;
    console.log("El contenido del párrafo "+innerText);
}

//Elemto evento
function manejarClick(){
  console.log("Click hecho sobre div");
  var divEventos = event.target;
  divEventos.innerHTML="Texto cambiado"
  divEventos.removeEventListener("click",manejarClick);
}
function load(){
  console.log("Window cargada");
  var divEventos = document.getElementById("eventos");
  divEventos.addEventListener("click",manejarClick,false);
}
window.onload=load;
