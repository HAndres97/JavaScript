
//Primeros pasos de JavaScript
	alert("De nuevo mi primer hola");
	document.write("Hola Christian Andrés");
	console.log("Hola desde la consola"); //ESCRIBIR A LA CONSOLA--ES INFORMATIVO NOS AYUDA A VER SI EL CÓDIGO FUNCION CORRECTAMENTE

// VARIABLES
// Es un contenedor de información

	var pais = "España";
	var continente="Europa";

	var pais_continente= pais + " " + continente;
	console.log(pais_continente);

//Modo Estricto 'use strict' para un uso mas estricto de las variables

// Dos variables Let y Var
// let limita su alcance solo al bloque en el que se esta utilizando
// var define una variable global y local fuera de los bloques/metodos


//Constantes, un contenedor de datos que no se va a cambiar

const ip= "192.88.0.12"; // Ejemplo

// Operadores +,-,*,/,%

	var numero1= 2;
	var numero2= 3;
	var operacion = numero1 + numero2; // Suma
	operacion = numero1 - numero2; // Resta

// Tipos de datos

	var numero_entero= 44 ;
	var cadena_texto = 'Cadena "de" Texto';// Texto entre comillas o dobles, tienen prioridad con la que abras y cierres , las de dentro se representa como comilla normales
	var boolean = true; // False o True, 0 o 1, Condicionales

//Funciones

var numero_falso = "33";

var numero_verdadero = Number(numero_falso);//Convierte el string a flotante o int.

//También podemos usar mas restrictivos

//				 parseInt() / parseFloat()
//					toSring() o String()

// ¿Que tipo de dato tengo ? lo podemos saber con typeof
	console.log(typeof numero1);

//Condicionales
// Si es A es igual a B entonces haz algo
// if(){}else{}

// Operadores relacionales
/*
	Mayor: >
	Menor: <
	Mayor o igual: >=
	Menor o igual:<=
	Igual: ==
	Distinto: !=
*/

// Operadores Logicos
/*
	AND(Y):&&
	OR(O): ||
	NAGACION(NO):!
*/
// Condicional Switch
/*
	var edad = 18
	switch (edad){
		case 18:
			var imprime = "Mayor de edad";
		break;

		case 19:
		break
		...
		...
		default:
			imprime = "Edad neutra ";
	}
*/


	//Bucles: Estructura de control que se repite varias veces
	//FOR:
		var numero = 4; 
		for( var i = 0; i < numero; i++){
			console.log("Vamos por el numero "+ i);

			//debugger; // Vemos la interaccion del programa va de 1 en 1, y que pasa dentro del bucle
		}
	//WHILE: Menos estricto, se usa mas con boleanos le tenemos que decir cuando va a salir
		while(numero <= 8){
			console.log("Vamos por el numero "+ numero);
			numero++;
		}

	//DO WHILE:Primero ejecuta y luego comprueba la condición
		var numero_3 = 4; 
		do{
			console.log("Solo cuando sea diferente de 8"+ numero_3);
			numero_3++;
		}while(numero_3 < 8);

// Parar Bucle
/*
	Dentro de un bucle podemos poner una condicion para salir de un bucle
	if(condicion){
		break; Se rompe el bucle
	}
*/
//Ventanas de confirmacion

	//ALERTA

		alert("Se puede pasar una serie de datos");

	//VENTANA DE CONFIRMACIÓN
		 var mi_resultado =confirm("¿Estas seguro de querer continuar?");
		 console.log(mi_resultado);

		 //Puede ser false o true

	//INGRESO DE INFORMACIÓN

		prompt("¿Que edad tienes?", 18); //Te da un String nosotros lo convertimos a lo que queramos

