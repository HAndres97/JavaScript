'use strict'

// JSON - JavaScript Object Notation

var pelicula = {
	titulo: 'Batman',
	year : 2017,
	pais : 'EEUU'
};

var peliculas = [
	{
		titulo:"La verdad duele",
		year: 2016,
		pais: "USA"
	},
	{
		titulo:"La verdad duele",
		year: 2016,
		pais: "USA"
	},
	pelicula
	];
pelicula.titulo = "Superman";
var caja_peliculas= document.querySelector("#peliculas");	

for(var movie in peliculas){
	var caja = document.createElement("p");
	caja.append(peliculas[movie].titulo);

	caja_peliculas.append(caja);
}
console.log(peliculas);