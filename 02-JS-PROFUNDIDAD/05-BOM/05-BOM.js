'use strict'
// Bom- Browser Object Model


function getBom(){
	console.log(window.innerWidth); //screen.width lo mismo
	console.log(window.innerHeight);//screen.height lo mismo
	console.log(window.location);// Informacion de la pagina de donde estoy
}
getBom();

function redirect(url){
	window.location.href = url; // Nos reenvia a otro pagina
}

function openWindow(url){
	//window.open(url); //El url tiene que estar entre ""
	window.open(url,"","width=400,height=400");
}