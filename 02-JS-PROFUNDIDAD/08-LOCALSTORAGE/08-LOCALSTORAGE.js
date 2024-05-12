'use strict'
/**
//	LocalStorage: EL navegador te guarda informacion web, que puedes usar mientras estes iniciado 
// sesión.Mmeoria del ordenador

//Nuevos estandares WEB.


//Comprobar disponibilidad de LocalStorge
if(typeof(Storage) !== 'undefined'){
	console.log("LocalStorage disponible");
}else
{
	console.log("Incompatible de LocalStorage");
}

//Guardar Datos

localStorage.setItem("titulo","Curso de Symfony de Andrés Herrera");

//Recuperar Datos
console.log(localStorage.getItem("titulo")); //Ver en consola lo que hay en clave titulo
localStorage.getItem("titulo");

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");


//Guardar Objetos,Para Guaradar obketos se usa JSON, para guardarlos tienes que transformalos a String

var usuario = {
	nombre:"Papi Andrés",
	email:" hchristianandres@gmail.com",
	web:"andresherrera.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objetos
var userJs= JSON.parse(localStorage.getItem("usuario"));
console.log(userJs); 
document.querySelector("#peliculas").append(" " + userJs.nombre + " "+ userJs.web);

//Eliminar Información
localStorage.removeItem("usuario");

//Limpiar Local Storage

localStorage.clear();
**/
//--------------------------Ejercicio----------------------------

var formulario = document.querySelector("#formpeliculas");
 
formulario.addEventListener('submit', function(){
 
	var titulo = document.querySelector('#addpelicula').value;
 
	if(titulo.length >= 1){
		localStorage.setItem("titulo", titulo);
		console.log(localStorage.getItem("titulo"));
	}
	
});
 
var ul = document.querySelector('#peliculas-list');
for(var i in localStorage){
	
	if(typeof localStorage[i] == 'string'){
		var li = document.createElement("li");
		li.append(localStorage[i]);	
		ul.append(li);
	}
	
}
 
 
var formulariob = document.querySelector("#formBorrarPeliculas");
 
formulariob.addEventListener('submit', function(){
 
	var titulo = document.querySelector('#borrarPelicula').value;
 
	if(titulo.length >= 1){
		localStorage.removeItem(titulo);
	}
	
});