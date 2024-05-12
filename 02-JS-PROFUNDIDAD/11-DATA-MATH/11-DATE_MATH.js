
// FECHAS

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth(); // Empieza por 0 al 11
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

var mes = fecha.toLocaleString('default', {month: 'long'}); // Obtenerlo con el nombre
var dia = fecha.toLocaleString('default', {weekday: 'long'});

var textoHora = `

	El año es: ${year}
	El mes es: ${mes}
	El dia es: ${dia}
	La hora es: ${hora}
	El minuto es: ${minutos}
	El segundo es: ${segundos}
`;
console.log(textoHora);


//Numero aleatorio

console.log(parseInt(Math.random()*10)); 

//Funciones de Math mirarlos en w3school