'use strict'

window.addEventListener('load', function(){
	console.log("Dom cargado");

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display= "none";

	formulario.addEventListener('submit',function(){
		console.log("Evento Submit Capturado");

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);

		if(nombre.trim()== null || nombre.trim().length == 0){
			alert("Nombre no es Valido");
			return false;
		}
		if(apellidos.trim()== null || apellidos.trim().length == 0){
			alert("Apellidos no es Valido");
			return false;
		}
		if(edad == null || edad.length <= 0 || isNaN(edad)){
			alert("Edad no es Valido");
			return false;
		}

		box_dashed.style.display= "block";
		var datos_usuario = [nombre,apellidos,edad];

		for(var indice in datos_usuario){
			var parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}

	});
});