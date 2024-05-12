$(document).ready(function(){


	//LOAD:Peticion por GET, introducirlo en un div
	//$('#datos').load("https://reqres.in/"); //PETICION POR AJAX, NOS RECOGE TODA LA PAGIONA Y NOS LA INCRUSTA EN LA PAGINA



	//Metodos Get
	//DIRECCION,PARAMETRO DE LA PAGINA DONDE ESTA LA INFORMACION, FUNCION DE CALLBACK PARA MANIPULAR LA INFORMACION
	$.get("https://reqres.in/api/users",{page:2},function(response){
		response.data.forEach((element,index)=>{
			$('#datos').append("<p>"+index+ " "+element.first_name + " "+ element.last_name+"</p>");
		});
	});
//---------------------------------------------------------------------------------------------
//	ENVIAR DATOS POR METODO POST,ENVIAMOS USUARIO A LA PAGINA
	var usuario = {
		"name": "Andres Herrera",
		"job":"Programador"
	};


	$.post("https://reqres.in/api/users",usuario,function(response){
		console.log(response);
	})
//-----------------------------------------------------------------------------------------------
//RECOGE DATOS DEL FORMULARIO
	$("#formulario").submit(function(e){ //CAPTURAMOS EL EVENTO CON e
		e.preventDefault(); // Y EVITAMOS QUE NOS LLEVE A LA PAGINA DEL APY DONDE SE HA GUARDADO LA INFO
		var usuario = {
		"name": $('input[name="name"]').val(),
		"job":$('input[name="job"]').val()
		};
		/*
		// VEMOS LA APLICACION DE DONE, UNA VEZ HECHO LO ANTERIOR CONTINUA CON ESTO
		.done(function(){
			alert("asuario añadido");
		});
		*/
		console.log(usuario);
/*
		RECOGE LA INFORMACION DE ACTION DONDE ESTA LA URL DEL API
		$.post($(this).attr("action"),usuario,function(response){
		console.log(response);

	})
//-----------------------------------------------------------------------------------------------
*/
// METODO AJAX, QUE MAS LE GUSTA LA PROFE, ESTA MEJOR DESGLOSADO
		//Metodo Ajax

		$.ajax({
			type:'POST',
			//dataType:'json', // PARAMETROS NO NECESARIOS
			//contentType:'application/json',
			url:$(this).attr("action"),
			data:usuario,
			beforeSend: function(){ // Se envia justo antes del POST
				console.log("Enviando usuario...");
			},
			success: function(response){
				console.log(response);
			},
			error: function(res,error){ //CAPTURA EL ERROR
				console.log("Error: "+ error);
			},
			timeout:2000 //TIEMPO QUE TARDE COMO MAXIMO LA PETICION
		});
		return false; // EVITA TAMBIEN QUE NOS LLEVE A LA PAGINA DEL API.
	});

});