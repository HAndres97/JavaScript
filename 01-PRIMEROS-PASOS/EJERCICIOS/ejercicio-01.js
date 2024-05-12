'use strict';
//Enunciado 
/* 
	Dos numeros y decir cual es menor cual es mayor o si son iguales
	Los numeros no son numeros o son menores o iguales que cero que nos vuelva a pedir los datos
*/
var  salir= true;

while(salir){
		var numero1 = parseInt(prompt("Escribe un numero: ", 0));
		var numero2 = parseInt(prompt("Escribe otro numero: ", 0));
	if(numero1 < 0 || numero2 < 0){
		console.log("Escribe un numero mayor");
	}else if(isNaN(numero1) || isNaN(numero2)){
		console.log("Es una letra");
	}else{
		salir = false;
	}
}


//Version profesor
	var numero1 = parseInt(prompt("Escribe un numero: ", 0));
	var numero2 = parseInt(prompt("Escribe otro numero: ", 0));
	while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
		numero1 = parseInt(prompt("Escribe un numero: ", 0));
		numero2 = parseInt(prompt("Escribe otro numero: ", 0));
	}



if (numero1 < numero2) {

	console.log("El numero "+ numero1+ " es menor que "+ numero2);

}else if(numero1 > numero2){
	console.log("El numero "+ numero1+ " es mayor que "+ numero2);
}else if(numero1 == numero2){
	console.log("Los numeros son iguales");
}else{
	console.log("Introduce numeros no caracteres");
}


/*
	Enunciado 2
Mostrar la media y la suma, de los numeros introducidos hasta que se ponga un numero negativo
*/
var salir = true;
var media = 0;
var suma = 0;
var numero = parseInt(prompt("Introduce un numero",0));
var n_numeros = 1;
	while(salir){
		if(numero < 0){

			salir = false;

		}else if(isNaN(numero)){
			while(isNaN(numero)){
				numero = parseInt(prompt("Haz introducido una letra, introduce un numero:",0));
			}
		}else{
			suma += numero;
			media = suma/n_numeros;
			numero = parseInt(prompt("Introduce un numero"));
			n_numeros++;
		}
	}
	console.log("La media de los numeros es"+ media);
	console.log("La suma de los numeros es" + suma);


//Enunciado 3
/*
	Todos los numeros entre dos numero introducidos por el usuario
*/
var numero1= parseInt(prompt("Introduce un numero: ",0));
var numero2= parseInt(prompt("Introduce otro numero: "),0);


if(numero2 < numero1){
	var numero3= numero1;
	numero1 = numero2;
	numero2 = numero3;
	for(var i = numero1; i < numero2; i++){
		console.log(i);
	}
}else if(numero1 == numero2){
	console.log("Los numeros son iguales");
}else{
	for(var i = numero1; i < numero2; i++){
		document.write(i + "</br>");
	}
}

//Enunciado 4
/*
	Todos los numeros impares entre dos numeros

*/
var numero1= parseInt(prompt("Introduce un numero: ",0));
var numero2= parseInt(prompt("Introduce otro numero: "),0);


if(numero2 < numero1){
	var numero3= numero1;
	numero1 = numero2;
	numero2 = numero3;
	for(var i = numero1; i < numero2; i++){
		if(i % 2 != 0){
			document.write(i + "</br>");
		}
	}
}else if(numero1 == numero2){
	console.log("Los numeros son iguales");
}else{
	for(var i = numero1; i < numero2; i++){
		if(i % 2 != 0){
			document.write(i + "</br>");
		}
	}
}

//Enunciado 5
/*
	Programa que muestre todos los numeros divisores de un numero introduce en prompt
*/
var numero = prompt(parseInt("Introduce un numero: "), 1);
document.write("Los numeros divisores de "+ numero +" son "+ i + "</br>");
for(var i = 1; i <= (numero / 2); i++){
	if(numero % i == 0){
			document.write(i + "</br>");
		}
}

//Enunciado 6
/*
	Si un numero es par o impar
	1. Ventana prompt
	2. Si no es valido, vuelva a pedir
	3. Indicar si es par o impar
*/
var numero = prompt(parseInt("Introduce un numero: "), 0);
while(isNaN(numero)){
	numero = parseInt(prompt("Haz introducido una letra, introduce un numero:",0));
}
if(numero % 2 == 0 ){
	console.log("Es un numero par: "+ numero);
}else{
	console.log("Es un numero impar: "+ numero);
}

//Enunciado 7
/*
	Tabla de multiplicar de un numero introducido por pantalla
*/
var numero = prompt(parseInt("Introduce un numero: "), 0);
while(isNaN(numero)){
	numero = parseInt(prompt("Haz introducido una letra, introduce un numero:",0));
}
for(var i = 1; i <= 10; i++){

	document.write(i +" * "+ numero + " = "+(i * numero) + "</br>");
}

//Enunciado una calculadora
/*
	1.Dos numeros por ventana
	2.Numero erroneo
	3.En el cuerpo de la pagina, en una alerta y por consola sumar, restar, dividir y multiplicar
*/
var numero1 = parseInt(prompt("Escribe un numero: ", 0));
var numero2 = parseInt(prompt("Escribe otro numero: ", 0));
while(isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("Escribe un numero: ", 0));
	numero2 = parseInt(prompt("Escribe otro numero: ", 0));
}
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var dividir = numero1 / numero2;
var multiplicar = numero1 * numero2;

document.write(" La suma de "+ numero1 + " y "+ numero2 + " es "+ suma +"</br>");
document.write(" La resta de "+ numero1 + " y "+ numero2 + " es "+ resta +" </br>");
document.write(" La multiplicacion de "+ numero1 + " y "+ numero2 + " es " +  multiplicar +"</br>");
document.write(" La division de "+ numero1 + " y "+ numero2 + " es " + dividir +"</br>");

