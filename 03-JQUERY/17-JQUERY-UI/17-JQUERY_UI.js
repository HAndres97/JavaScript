$(document).ready(function(){

	//JQUERY UI ES UN PLUGGIN DE JQUERY: SIRVE MAS PARA INTERFZ DEL USUARIO
	//PODEMOS VER QUE PODEMOS HACER CON ESA PLUGGIN DE LA LIBRERIA JQUERY
	// URL: https://jqueryui.com/
	//Dragable: Mover elementos por la pagina 

	$(".elemento").draggable();

	//Redimensionar Elementos

	$(".elemento").resizable();

	//Seleccionar Elementos
	//$(".lista-seleccionable").selectable(); //No se ve nada porque tambien hay que modificarlo con CSS
	//Mirar el html

	//Ordenar los elementos //Funciona pero no con selectable
	$(".lista-seleccionable").sortable({
		update : function(evento, ui){
			console.log("Ha cambiado la lista");
		}
	});

	//Drop
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("Has soltado algo dentro del area");
		}
	});

	//Efectos
	$("#mostrar").click(function(){
		//$(".caja-efectos").toggle("fade"); // O directamente la funcion fade();
		$(".caja-efectos").effect("explode"); //Efecto de explosion
		//$(".caja-efectos").toggle("explode"); //Efecto contrario se une desde fuera
		//$(".caja-efectos").toggle("blind");
		//$(".caja-efectos").toggle("slide");
		//$(".caja-efectos").toggle("drop");
		//$(".caja-efectos").toggle("fold");
		//$(".caja-efectos").toggle("puff");
		//$(".caja-efectos").toggle("scale");
		//$(".caja-efectos").toggle("shake","slow"); //Poner el tiempo que tarda
		//$(".caja-efectos").toggle("shake",4000);		


	});

	//Tooltips
	$(document).tooltip();//Muestra en grande el tittle de a

	//Cuadros de Dialogos
	$("#lanzar-popup").click(function(){
		$("#popup").dialog();
	});
	//Datepicker
	$("#calendario").datepicker();

	//Tabs
	$("#pestanas").tabs();

});