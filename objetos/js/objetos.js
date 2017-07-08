//Primer mecanismo de creación de objetos
function Manzana(tipo){
  this.tipo = tipo;
  this.color="roja";
  this.numero=5;
  this.cambioNumero=function(numero){
    if (isNaN(numero)) {
      console.log("Te has equivocado");
    }else{
      this.numero=numero;
    }
  }
}

var golden= new Manzana("Golden");
golden.tipo="golden";
golden.numero=4;
golden.cambioNumero(8);
console.log("El objeto Manzana es de tipo "+golden["tipo"]);
console.log("El objeto golden tiene "+golden["numero"]+" manzanas");

//Literales
var Sandia={
  tipo:"De agua",
  color:"Rojo",
  numero:6,
  cambioNumero:function(numero){
      if (isNaN(numero)) {
        console.log("Te has equivocado en Sandia");
      }else{
        this.numero=numero;
      }
  }
};

Sandia.tipo="Sin Pepitas";
Sandia.variedad="Valencia";
Sandia.cambioNumero(5.6);
console.log("El objeto Sandia es de tipo "+Sandia.tipo);
console.log("El objeto Sandia es de variedad "+Sandia["variedad"]);
console.log("El objeto golden tiene "+Sandia["numero"]+" elementos");
