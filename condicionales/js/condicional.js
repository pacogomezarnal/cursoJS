//Estructura if
var hora=23;
if (hora<=12) {
  alert("Buenas dias");
}else if ((hora<=17)&&(hora>12)){
  alert("Buenas tardes");
}else {
  alert("Buenas noches");
}
//Switch
var diaSemana=3;
switch (diaSemana) {
  case 1:
    alert("Lunes");
    break;
  case 2:
    alert("Martes");
    break;
  default:
    alert("No definido");
}
