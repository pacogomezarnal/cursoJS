function manejarClick(){
  console.log("Click hecho sobre pagina");
  document.removeEventListener("click",manejarClick);
}
function load(){
  console.log("Window cargada");
  document.addEventListener("click",manejarClick,false);
}
window.onload=load;
