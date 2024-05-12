'use strict'

/*
	1. Pida 6 numeros por Pantalla y los mete en un array
	2. Mostrar el array entero, en el cuerpo de la pagina y la consola
	3. Ordenar el array y mostrarlo
	4. Invertir su orden y mostrarlo
	5. Mostrar cuantos elementos tiene el array
	6. Busqueda de un valor introducido poe el usuario, mostrar si lo encuentra y su indice.

*/
//---------------------------------------------------------------------------
//1.
var numero = 0;
var numeros = new Array();

for (var i=0; i < 5; i++){
	numero = parseInt(prompt((i + 1)+ ". Escribe un numero: "));
	while(isNaN(numero)){
		numero = parseInt(prompt("Haz escrito una letra,Escribe un numero: "));
	}
	numeros.push(numero);
}
//---------------------------------------------------------------------------
//2.
document.write("<h1 align='center'>Ejercicios de Array con Christian Andrés</h1>");
document.write("</ul>");

 numeros.forEach((elemento)=>{ 
 	document.write("<li>"+elemento+"</li>");
 	console.log(elemento);
 })
 console.log(numeros);
 document.write("</ul>");
//---------------------------------------------------------------------------
 //3.
 document.write("<h1 align='center'>Ejercicio Parte 3</h1>");
 numeros.sort();
 document.write("</ul>");

 numeros.forEach((elemento)=>{ 
 	document.write("<li>"+elemento+"</li>");
 	console.log(elemento);
 })
 console.log(numeros);
 document.write("</ul>");
 //---------------------------------------------------------------------------
 //4.
 document.write("<h1 align='center'>Ejercicio Parte 4</h1>");
 numeros.reverse();
 document.write("</ul>");

 numeros.forEach((elemento)=>{ 
 	document.write("<li>"+elemento+"</li>");
 	console.log(elemento);
 })
 console.log(numeros);
 document.write("</ul>");
//---------------------------------------------------------------------------
 //5.
 document.write("<h2 align='center'>La Longitud del array es de "+ (numeros.length)+" </h2>");
 //---------------------------------------------------------------------------
 //6.
 var b_number= parseInt(prompt("Que numero buscas"));
 var busqueda = numeros.find(numero => numero == b_number); 
 console.log(busqueda);
 busqueda = numeros.findIndex(numero => numero == b_number); 
 console.log(busqueda);
