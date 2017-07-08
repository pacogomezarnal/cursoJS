function calcularIVA(iva,suma){
  var precio=prompt("Precio del producto");
  if(isNaN(precio)){
    alert("No has introducido un numero");
    return false;
  }else{
    var precioConIVA=parseFloat(precio)*(1+iva/100);
    alert("El precio con IVA es "+precioConIVA);
    return true;
  }
}
var iva=prompt("Cual es el IVA a aplicar");
calcularIVA(iva);
