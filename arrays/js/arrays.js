//arrays
var fruta=["Manzana","Pera","Sandia"];
var comida=new Array("Arroz","Pasta","Carne","Postres");

//elemento
for (var i = 0; i < fruta.length; i++) {
  console.log("La fruta de la posicion "+i+" es: "+fruta[i]);
}
console.log("La comida de la posicion "+2+" es: "+comida[2]);
comida[2]="Helado";
console.log("La comida de la posicion "+2+" es: "+comida[2]);
//Propiedades
console.log("El array comida tiene una longitud de "+comida.length);
comida.push("Desayunos");
console.log("El array comida tiene una longitud de "+comida.length);
console.log("La comida de la posicion "+(comida.length-1)+" es: "+comida[comida.length-1]);
console.log("El indice dentro de comida del elemento Pasta seria "+comida.indexOf("Pasta"));
