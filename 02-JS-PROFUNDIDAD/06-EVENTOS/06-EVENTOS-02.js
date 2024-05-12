'use strict'
//Sirve para que se lance el Evento despues de cargar la pagina HTML, evento load poniendo el JS en head
window.addEventListener('load', function(){


	function intervalo(){
		//----------------------TIMERS------------------------
		//setTimeout solo se ejecuta 1 vez
		let tiempo = setInterval(function(){
				console.log("Set interval Ejecutado");
				let encabezado = document.querySelector("h1");
				if( encabezado.style.fontSize == "50px"){
					encabezado.style.fontSize = "30px";
				}else{
					encabezado.style.fontSize = "50px";
				}
			}, 3000);
			return tiempo;
	}
	var tiempo = intervalo();
	var stop = document.querySelector("#stop");

	stop.addEventListener("click",function(){
		alert("Has parado el intervalo en bucle");
		clearInterval(tiempo);
	});

	var start = document.querySelector("#start");
	start.addEventListener("click",function(){
		alert("Has iniciado el intervalo en bucle");
		tiempo = intervalo();
	});

});