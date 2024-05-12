'use strict'
//Funciones: ES UNA AGRUPACION REUTILIZABLE DE UN CONJUNTO DE INSTRUCCIONES


function calculadora(numero1, numero2, mostrar = false){  //AQUI YA DIFINIMOS QUE MOSTRAR ES FALSE OJO, NO COMPARAMOS
	if(mostrar == false){
		var resultado = "Soy una calculadora"+"\n"+
						"Suma: "+ (numero1 + numero2)+"\n"+
						"Resta: "+ (numero1 - numero2)+"\n"+
						"Dividir: "+ (numero1 / numero2)+"\n"+
						"Multiplicar: "+ (numero1 * numero2);
	}else{
		var resultado = "Soy una calculadora"+"</br>"+
						"Suma: "+ (numero1 + numero2)+"</br>"+
						"Resta: "+ (numero1 - numero2)+"</br>"+
						"Dividir: "+ (numero1 / numero2)+"</br>"+
						"Multiplicar: "+ (numero1 * numero2);
	}
	return resultado;
}

console.log(calculadora(2,3));
document.write(calculadora(4,5,true));
//Parametros opcionales
	//EJEMPLOS DE OTRAS FUNCIONES DENTRO DE OTRAS FUNCIONES
function porConsola(numero1, numero2){
	var resultado = "Soy una calculadora"+"\n"+
					"Suma: "+ (numero1 + numero2)+"\n"+
					"Resta: "+ (numero1 - numero2)+"\n"+
					"Dividir: "+ (numero1 / numero2)+"\n"+
					"Multiplicar: "+ (numero1 * numero2);
}
function porPantalla(numero1, numero2){
	var resultado = "Soy una calculadora"+"</br>"+
				"Suma: "+ (numero1 + numero2)+"</br>"+
				"Resta: "+ (numero1 - numero2)+"</br>"+
				"Dividir: "+ (numero1 / numero2)+"</br>"+
				"Multiplicar: "+ (numero1 * numero2);
}
//-------------------------------------------------------------------------------------------

//PARAMETROS REST Y SPREAD
// ... Con los tres puntos puedo guardar en un array el resto de parametros 
function listadoFrutas(fruta1, fruta2, ...resto_frutas){
	console.log("Fruta 1: ",fruta1);
	console.log("Fruta 2: ",fruta2);
	console.log("Resto de frutas en un array: ",resto_frutas);
}
listadoFrutas("Manzana","Pera","Coco","Caymito");

var frutas =["Naranja","Manzana"];
//	Lee el array pero no me muestra la fruta 1 y 2
//			Lee la fruta 1 como array []
listadoFrutas(frutas,"Manzana","Pera","Coco","Caymito");

//Con los tres puntos hace un spread y lee como frutas la primera y la segunda
listadoFrutas(...frutas,"Manzana","Pera","Coco","Caymito");

//-------------------------------------------------------------------------------------------
// FUNCIONES ANÓNIMAS Y CALLBACKS
// Es una funcion que no tiene nombre
// Callback es una funcion que se ejecuta dentro de una funcion,
// En la funcion principal la pasa como un parametro, luego cuando la llama a la funcion define ese parametro
// como funcion anonima  y asu vez la funcion principal la usa.

var pelicula = function(nombre){ //LO PODEMOS USAR POR CONSOLA, ESCRIBIENDO pelicula("Andres")
	return "La pelicula es: "+ nombre;
}

function sumame_v1(numero1,numero2){
	let suma = numero1 + numero2;
	return suma;
}
console.log(sumame_v1(3,2));

function sumame_v2(numero1, numero2, sumaYmuestra, sumaPordos){ // DOS PARAMETROS VAN HACER FUNCIONES DE CALLBACK
	var sumar = numero1 + numero2;                               // LAS DEFINIMOS PRIMERO Y LUEGO LAS DESARROLLAMOS
	sumaYmuestra(sumar);
	sumaPordos(sumar);
	return sumar;
}
//Callback

sumame_v2(5,7,function(dato){ // AQUI LLAMAMOS A LA FUNCION Y DESARROLLAMOS LOS DOS PARAMETROS QUE HACEN DE FUNCION DE CALLBACK
	console.log("La suma es: "+ dato);},
function(dato){
	console.log("La suma por dos es: "+ (dato * 2));
});

//-----------------------------------------------------------------------------------------------
//Funciones de Flecha, en vez de poner function(dato){} es dato =>{}, si lleva mas de dos parametros hace falta 
// (dato1,dato2) =>{}

sumame_v2(5,7,dato => {
	console.log("La suma es: "+ dato);

},
dato =>{
	console.log("La suma por dos es: "+ (dato * 2));
}
);

//--------------------------------------------------------------------------------------------------
// Ambito de las Variables
var texto= "Hola Mundo";
var numero = 12;

function holaMundo(texto){ // LA variables definidas como var fuera de las funciones podemos usarlas
	// dentro de estas funciones, pero al revés no como pasa con mundo, por lo normal dentro de la funcion 
	// usamos let
	var mundo="Texto dentro de funcion";
	console.log(texto);
	console.log(numero);
	console.log(mundo);
}

holaMundo(texto);
//----------------------------------------------------------------------------------
// De numero a String: console.log(numero.toString());
//----------------------------------------------------------------------------------

// METODOS PARA PROCESAR TEXTO
// Transformacion de textos de cadena
var numero = 444;
var texto_1 = "Bienvenido al curso";
var texto_2 = "De JavaScript";

console.log(numero.toString());

// De mayuscula y minuscula y viciversa
	texto_1 = texto_1.toLowerCase();
	texto_2 = texto_2.toUpperCase();
console.log(texto_1);
console.log(texto_2);

//Calcular longitud de texto
var nombre = "";
	nombre = ["1","2","3",5]; // Tambien te da la longitud del texto
console.log(nombre.length);

//Concatenar unir textos

var texto_3= texto_1 + " "+ texto_2;
console.log(texto_3);

var texto_3= texto_3.concat(" con Andrés Herrera");
console.log(texto_3);
//----------------------------------------------------------------------------------

// METODOS de busqueda de texto
var numero = 444;
var texto_1 = "Bienvenido al curso";
var texto_2 = "De JavaScript";
var busqueda = texto_1.indexOf("curso"); // Saca la posicion de la palabra, a partir del caracter 14
	// con lasIndexOf("") la ultima concordancia, search(); igual que indexOf, si no aparece la 
	// palabra da -1

console.log(busqueda);
var busqueda = texto_1.match(/curso/g); // Devolverme un array con la palabra, si queremos todas las
// coincidencias con la palabra .match(/curso/g);
console.log(busqueda);

//Para sacar palabras dentro de un texto
var busqueda = texto_1.substr(14,5); // A partir del caracter 15, 5 palabras
console.log(busqueda);
// Tambien se puede usar para sacar una letra .charAt(44);
// .startsWith("Curso"); Devuelve true o false, si encuentra el texto al principio de la cadena
// .endsWith("Script") Lo mismo pero busca al final de la cadena

var busqueda = texto_2.includes("De");// Devuelve true o false si esta en la cadena de texto
console.log(busqueda);

//----------------------------------------------------------------------------------

// METODOS de reemplazo de texto
var numero = 444;
var texto_1 = "Bienvenido al curso";
var texto_2 = "De JavaScript";
var busqueda = texto_1.replace("curso","carapapa");// Reemplaza la palabra
// .slice(14); Te devuelve una cadena a partir de la posicio y elimina lo demás o entre dos (14,16)
// .split(" "); Te devuelve un array con las cadenas separadas por " " espacio
// .trim(); Recorta los espacios por delante y por detrás
console.log(busqueda);

//----------------------------------------------------------------------------------

// Uso de Plantilla de texto en JavaScript

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus Apellidos");

var texto = "Mi nombre es: "+ nombre +" y apellidos "+apellidos;

// Se puede hacer lo mismo pero con plantilla

var texto = `
	<h1>Hola Que talk</h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mis apellidos: ${apellidos}</h3>

`;

document.write(texto);
