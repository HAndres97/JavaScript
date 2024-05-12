$(document).ready(function(){
	// MouseOver y Mouseout


	var caja = $("#caja");

	/*
	caja.mouseover(function(){
		$(this).css("background","red");
	});
	caja.mouseout(function(){
		$(this).css("background","green");
	});
	*/

	function cambiaRojo(){
		$(this).css("background","red");
	}
	function cambiaVerde(){
		$(this).css("background","green");
	}
	// Forma mas sencilla de hacer lo de antes con

	caja.hover(cambiaRojo,cambiaVerde);

	//Click y Double_Click

	caja.click(function(){
		$(this).css("background","blue")
				.css("color","white");
	});
	caja.dblclick(function(){
		$(this).css("background","pink")
				.css("color","yellow");
	});

	//Blur y Focus
	var nombre = $("#nombre");
	$("#nombre").focus(function(){
		$(this).css("border","2px solid green");
	});
	$("#nombre").blur(function(){
		$(this).css("border","2px solid transparent");
		$(this).val(); //Para capturar lo escrito en un input text
		$("#datos").text($(this).val()).show();// Para que aparezca el .show() cuando este display none HACE COMO UN DISPLAY BLOCK
	});
	//Mousedown y mouseup
	var datos = $("#datos");
	datos.mousedown(function(){
		$(this).css("border-color","gray");
	});
	datos.mouseup(function(){
		$(this).css("border-color","blue");
	});

	//Eventos interesantes

	//Mousemove
	$(document).on("mousemove", function (event) {
        var sigueme =  $("#sigueme");
        console.log(event.clientX);
        console.log(event.clientY);
        $('body').css("cursor", "none");
        sigueme.css("left",event.clientX);
        sigueme.css("top",event.clientY);
    });
});