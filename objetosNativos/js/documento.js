//Trabajar sobre  elemento document
var doctypeObj = document.doctype;

console.log(
  "doctypeObj.name: "           + doctypeObj.name            + "\n" +
  "doctypeObj.internalSubset: " + doctypeObj.internalSubset  + "\n" +
  "doctypeObj.publicId: "       + doctypeObj.publicId        + "\n" +
  "doctypeObj.systemId: "       + doctypeObj.systemId
);

document.write("<br><p>Este es un ejemplo de write</p>");

var headerH3 = document.getElementsByTagName("H3").item(0);
// the firstChild of the header is a Text node:
headerH3.firstChild.data = "Documento dinámico";

// create a new Text node for the second paragraph
var newText = document.createTextNode("Nuevo parrafo dinámico");
// create a new Element to be the second paragraph
var newElement = document.createElement("P");
// put the text in the paragraph
newElement.appendChild(newText);
// and put the paragraph on the end of the document by appending it to
// the BODY (which is the parent of para)
headerH3.parentNode.appendChild(newElement);
