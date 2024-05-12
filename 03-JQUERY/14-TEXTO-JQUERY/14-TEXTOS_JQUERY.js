$(document).ready(function(){

	reloadLinks();
	var add_button = $("#add_button");
	var add_link = $("#add_link");
	add_button.click(function(){
		//$("#menu").html('<li><a href="'+ add_link.val() +'"></a></li>');

		$("#menu").append('<li><a href="'+ add_link.val() +'"></a></li>'); //Puedo añadir con este metodo pero machaca lo anterior
		//prepend principio de la lista
		//before antes de la lista entera
		//after lo mismo pero despues de la lista
		//add_link.val(); // Recoger un valor de un input
		//console.log(add_link.val());

		add_link.val(' ');

		reloadLinks();
	});


		//console.log($(this).attr("href")); // Aqui sacamos los atributos dentro de href
});


function reloadLinks(){
	$('a').each(function(index){ // Para recorrer una lista de a
	var enlace = $(this).attr("href");
	var that = $(this); // PARA NO SOBRECARGAR EL DOM, LA GUARDAMOS EN UNA VARIABLE

	that.attr('target','_blank'); //Podemos añadirles, atributos

	//.removeAttr();Para eliminar atributos

	that.text(enlace);
	});
}