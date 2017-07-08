function evaluar(){
  var operacion=prompt("Introducir la expresion a evaluar");
  var resultado=eval(operacion);
  alert("El resultado es "+resultado);
  return true;
}
function evaluarNum(){
  var algo=prompt("Introducir algo");
  if(isNaN(algo)){
    alert("No has introducido un numero");
  }else{
    alert("Has introducido un numero");
  }
  return true;
}
function convertirNum(){
  var input=prompt("Introducir un numero");
  var inputParseado=parseInt(input);
  alert("El numero introducido "+input+" se ha convertido a "+inputParseado);
  return true;
}
