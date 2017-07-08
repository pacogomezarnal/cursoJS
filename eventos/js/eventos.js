function mostrarEvento(){
  console.log(event.type);
}

function mostrarEventoKey(){
  console.log("Tipo de evento "+event.type);
  console.log("Codigo de tecla "+event.code);
  console.log("Numerico de tecla "+event.charCode);
  console.log("Caracter de tecla "+String.fromCharCode(event.charCode));
}
function load(){
  console.log("Window cargada");
  document.onkeypress=mostrarEventoKey;
}

window.onload=load;
