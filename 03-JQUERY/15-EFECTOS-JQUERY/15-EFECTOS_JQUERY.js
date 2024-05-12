$(document).ready(function(){

	var caja = $("#caja");
	var botonMostrar = $('#mostrar');
	var botonOcultar = $('#ocultar');

	botonMostrar.hide();
	botonMostrar.click(function(){
		$(this).hide();
		botonOcultar.show();
		caja.show('fast'); //MUESTRA LA CAJA Y DE FORMA RAPIDA FAST/NORMAL/
	});
	botonOcultar.click(function(){
		$(this).hide();
		botonMostrar.show();
		caja.hide('normal',function(){ //PODEMOS AÑADIR FUNCIONES DE CALLBACK A LOS EVENTOS
			console.log("Caja Oculta, despues de que se haya ocultado");
		}); //Oculta la caja, la velocidad o efecto puede ser fast/normal
		//Otro metodo seria con fadeIn()/fadeOut()/slideUp o slideDown('slow'); Similar a hide y show
		//Con opacidad con fadeTo('slow',1);//0 no se y 1 se ve
	});



	$("#todo").click(function(){
		caja.toggle('fast'); // Otra forma de hacerlo, fadeToggle,slideToggle
	});

	//Animaciones

	$("#animar").click(function(){ // Se codifica el JSson
		caja.animate({
					marginLeft:'500px',
					fontSize:'40px',
					height:'110px'
					},'slow')
			.animate({
					borderRadius:'900px',
					marginTop:'50px'
					},'slow')
			.animate({
					borderRadius:'0px',
					marginLeft:'0px'
					},'slow')
			.animate({
					borderRadius:'900px',
					marginTop:'0px'
					},'slow')
			.animate({
					marginLeft:'500px',
					fontSize:'40px',
					height:'110px'
					},'slow');
	});

});