// Jquey es una libreria de JavaScript,$ y JQuery es lo mismo
//	-----------------------------------------------------------------------------
//		SELECOTRES
// $ se refiere a JQUERY, ENTRE PARENTESIS EL SELECTOR Y LUEGO DEL PUNTO EL EVENTO
$(document).ready(function(){ //PREPARA EL ARCHIVO JS, ES COMO UN LOAD window.addEventListener('load', function(){});
	console.log("Estamos Listos");

//	-----------------------------------------------------------------------------
		//SELECTOR DE ID
	var rojo = $("#rojo").css("background","red") //USAMOS CSS CON CLAVE => VALOR
						 .css("color","blue");

	var amarillo = $("#amarillo").css("background","yellow")
					.css("color","green");
	$("#verde").css("background","green")
					.css("color","white");

	console.log(rojo);
	//	-----------------------------------------------------------------------------
	//SELECTOR DE CLASES
	var zebra = $('.zebra');
	zebra.css("padding","5px");
	console.log(zebra.eq(1));

	$('.sin_borde').click(function(){
		console.log("click");
		$(this).addClass('zebra'); //AÑADE LA CLASE
	});
	//	-----------------------------------------------------------------------------
	//SELECTORES POR ETIQUETA
	var parrafos = $('p').css("cursor","pointer"); // Comprobar que Existe una clase hasClass('zebra')

	parrafos.click(function(){
		$(this).toggleClass("zebra"); //Quitamos/ponemos el estilo zebra, segun lo tenga o no
	});
	//	-----------------------------------------------------------------------------
	//SELECTORES POR ATRIBUTO

	$('[title="Google"]').css('background','#ccc');
	$('[title="Facebook"]').css('background','blue');

	//	-----------------------------------------------------------------------------
	// Otros
	$('p, a').addClass('margen_superior');

	var busqueda =$("#caja").find('.resaltado');// Buscador o $("#caja .resaltado") tambien funciona

	// parent() sirve para subir un escalon dentro de un lugar donde estoy buscando, 
	var busqueda_2 = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');

	console.log(busqueda);
	console.log(busqueda_2);
});
