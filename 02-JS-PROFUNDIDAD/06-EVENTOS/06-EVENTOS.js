'use strict'
//Sirve para que se lance el Evento despues de cargar la pagina HTML, evento load poniendo el JS en head
window.addEventListener('load', function(){
		//---------------------EVENTOS--------------------
	//Eventos de Raton
	//-----------------------------------------------
	//Evento Click

	var boton= document.querySelector("#boton");

	function cambiarColor(){
		console.log("Me has dado click");
		let bg = boton.style.background;
		if(bg == "green"){
			boton.style.background = "red";
		}else{
			boton.style.background = "green";
		}
		boton.style.padding = "10px";
		boton.style.border= "1px solid  #ccc";
		return true;
	}
	// Mas sencillo sin manchar el codigo HTML, es escribirlo aqui usando addEvenListener

	boton.addEventListener('click', function(){
		cambiarColor();
		//Si quiero cambiar algo en ese boton en esta funcion
		//boton.style.border ="10px solid black";
		//this, hace referencia al boton donde esta el evento
		this.style.border ="10px solid black";
	});

	//-----------------------------------------------
	//Mouse Over, cuando pasas por encima del boton
	boton.addEventListener('mouseover',function(){
		boton.style.background= "#ccc";
	});

	//-----------------------------------------------
	//Mouse Out, cuando el raton sale del boton
	boton.addEventListener('mouseout',function(){
		boton.style.background= "yellow";
	});
	//-----------------------------------------------
	//Focus
		var input = document.querySelector("#campo_nombre");
		input.addEventListener('focus',function(){
			console.log("[Focus]:Estas dentro del input");
		});

	//Blur Dejar de hacer foco
		input.addEventListener('blur',function(){
			console.log("[Blur]:Estas fuera del input");
		});
	//Keydown: Cuando estas pulsando una tecla
		input.addEventListener('keydown',function(event){
			console.log("[Keydown]Estas tecleando en el input",String.fromCharCode(event.keyCode));
		});
	//Keypress:Cuando ya ha pulsado la tecla
		input.addEventListener('keypress',function(event){
			console.log("[Keypres]Tecla Presionada",String.fromCharCode(event.keyCode));
		});
	//Keyupp
		input.addEventListener('keyup',function(event){
			console.log("[Keypres]Tecla Soltada",String.fromCharCode(event.keyCode));
		});

});

