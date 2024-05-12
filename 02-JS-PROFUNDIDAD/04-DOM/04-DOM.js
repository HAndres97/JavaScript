'use strict'
// DOM
//-----------------------------------------------------------------------

var caja = document.getElementById("micaja");
console.log(caja);
//-----------------------------------------------------------------------
// Capturar el HTML, de la caja, el texto del HTML

caja = document.getElementById("micaja").innerHTML;
console.log(caja);
//-----------------------------------------------------------------------
//Cambiar lo que hay dentro de la caja
// OJO CUIDADOOO ANTES HABIAMOS CAMBIADO QUE CAJA SEA EL TEXTO DE DENTRO, HAY QUE VOLVER A SELECCIONAR
// CAJA COMO UN DIV COMPLETO, CON INNERHTML METEMOS DENTRO DEL DIV EL TEXTO, NO PODEMOS METER TEXTO DENTRO DEL TEXTO
var caja = document.getElementById("micaja");
caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";
//-----------------------------------------------------------------------
//Puedo cambiar el estilo
caja.style.background="red";
caja.style.padding="6px";
caja.style.color ="black";
console.log(caja);
//-----------------------------------------------------------------------
//Pedir dato para cambiar color
function cambiarColor(color){
	caja.style.background = color;
}
var color = prompt("Color: ");
cambiarColor(color);

//-----------------------------------------------------------------------
//Añadir clases a las cajas
caja.className= "JS";

//-----------------------------------------------------------------------
//Otra forma de seleccionar ids con JQuery
 var caja_2= document.querySelector("#micaja"); // # ids, . clases
 console.log(caja_2);

 //-----------------------------------------------------------------------
 // Seleccionar clases y etiquetas en general
//Conseguir elementos por sus etiqueta
//Otra forma de conseguir el contenido del elemento con .textContent
 
 var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);
var contenidoTexto= todosLosDivs[2].textContent;
console.log(contenidoTexto);

// ES un HTML COLECTION no se puede usar for each
/*
todosLosDivs.forEach((valor,indice) =>{ -----No Funciona Ojo
	console.log(valor);
});
*/
// esta prepend/append/

var valor;
for( valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == 'string'){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		document.querySelector("#miSeccion").append(parrafo);
	}
}

//} );

 //Conseguir elementos por su clase Css
//-----------------------------------------------------------------------
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
console.log(divsAmarillos);
for(var div in divsRojos){
	if(typeof divsRojos[div].textContent == 'string'){
		divsRojos[div].style.background ='red';
	}
}
console.log(divsRojos);

//-----------------------------------------------------------------------
//Con Query Selector // Vemos que solo sirve para id no para clases ya que solo guarda 1
var id= document.querySelector("#miSeccion");
console.log(id);
var clases= document.querySelector(".rojo");
console.log(clases);
// Rectificacion 
var clases= document.querySelectorAll(".rojo");
console.log(clases);
clases.forEach((elemento,indice) => {

	console.log(elemento); // Aqui si funciona ya que recoge NodeList
});
