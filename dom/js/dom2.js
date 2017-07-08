//Elemto evento
function manejarClick2(){
  console.log("Click hecho sobre div");
  var divEventos = event.target;
  var ps = divEventos.getElementsByTagName("p");
  for (var i = 0; i < ps.length; i++) {
      divEventos.removeChild(ps[i]);
  }
  divEventos.removeEventListener("click",manejarClick2);
}
function manejarClick(){
  console.log("Click hecho sobre div");
  var divEventos = event.target;
  var parrafoNuevo=document.createElement("p");
  var textoParrafoNuevo=document.createTextNode("El texto del nuevo parrafo");
  parrafoNuevo.appendChild(textoParrafoNuevo);
  divEventos.appendChild(parrafoNuevo);
  divEventos.removeEventListener("click",manejarClick);
  divEventos.addEventListener("click",manejarClick2,false);
}
function load(){
  console.log("Window cargada");
  var divEventos = document.getElementById("nuevo");
  divEventos.addEventListener("click",manejarClick,false);
}
window.onload=load;
