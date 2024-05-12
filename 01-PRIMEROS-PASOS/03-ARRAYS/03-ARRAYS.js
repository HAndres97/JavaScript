//Arryas Basicos o arreglos: Coleccion de tipos de datos que puede tener una variable

var nombre= "Andrés Herrera";
var nombres= ["Andrés","Victor","Juan","Manolo","José",52,true];

var lenguajes = new Array("Php","Js","Go", "Java");//Empiezan por el indice 0 , 1 , 2 ,3.

console.log(nombres[2]);

// Arrays avanzados

// Longitud del array
console.log(nombres.length);
//----------------------------------------------------------------------------

var elemento = parseInt(prompt("Que elemento del array quieres??",0));

if(elemento >= nombres.length){
	alert("Introduce el numero correcto menor que "+nombres.length)
}else{
	alert(nombres[elemento]);
}

//----------------------------------------------------------------------------

document.write("<h1>Lenguajes de Programación</h1>");
document.write("<ul>");

for(var i = 0; i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");

// Manera mas elegante klk
 lenguajes.forEach((elemento, indice, data)=>{ // con solo elemento valdría, con indice vemos posicion y con data el array entero
 	console.log(data);
 	document.write("<li>"+indice+" "+elemento+"</li>");
 })
 document.write("</ul>");
 
//----------------------------------------------------------------------------
 // ARRAYS MULTIDIMENSIONALES

var categorias = ['accion','terror','comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];


var cine = [categorias, peliculas];
console.log(cine);
console.log(cine[0][1]);// Cine tiene dos Arrays 0 categorias y 1 peliculas va en la primera[], una vex escogido el array 0 o 1, nos vamos a la posicion de ese array
// En este caso estamos dentro de categorias y posicion 1 = terror
// Operaciones con Arrays


var elemento = prompt("Introduce tu pelicula");

while(elemento != "ACABAR"){
	elemento = prompt("Introduce tu pelicula")	
	peliculas.push(elemento);
}

peliculas.push("Batman"); // Añadir algo al array

peliculas.pop(); // Elimina el ultimo elemento de peliculas

//----------------------------------------------------------------------------
//Para borrar un elemento, en concreto

var indice= peliculas.indexOf('Gran Torino');

console.log(indice);
if(indice > -1){
	peliculas.splice(indice,1); // Indica la posicion y el numero de objetos a eliminar a partir de ahi
}

//Convertir un array en Strings separados por comas

var peliculasTexto = peliculas.join();
console.log(peliculas);
console.log(peliculasTexto);

// Para hacer la inversa

var peliculasArray = peliculasTexto.split(",");
console.log(peliculasArray);

//Ordenar peliculas
// 1. Por orden alfabetico, primero mayusculas y luego minusculas

categorias.sort();
console.log(categorias); 

//2. Orden inverso

categorias.reverse();
console.log(categorias); 

// Recorrer Arrays

for(let categoria in categorias){
	console.log(categorias[categoria]);
}

//Busqueda dentro de un array

var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PhP"
});
// Se puede reducir ese codigo de la siguiente manera

var busqueda = lenguajes.find(lenguaje => lenguaje == "Php"); // Con findIndex se encuentra la posicion
console.log(busqueda);

//Para buscar valores mayores o menores que algo

var precios =[10,20,30,40,50,60,70];
var busqueda = precios.some(precio => precio => 20);
console.log(busqueda);