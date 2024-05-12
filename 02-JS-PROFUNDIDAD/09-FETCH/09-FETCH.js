'use strict';
// Usamos la pagina jsonplaceholder para este tema, apis rest con datos inventados/prueba 
// y la recibimos en Json. Fetch:Metodo que hace peticiones ajax. Peteciones asincronas a un servidor

//Hay cierta logica en las promesas, tienen que cumplirse la de arriba o ejecutar la primera para la segunda
// y tercera....
var usuarios = [];
var div_promesa = document.getElementById("primera_promesa");

//	PRIMERA VERSION DE PETICION DE AJAX
	fetch('https://jsonplaceholder.typicode.com/users')
	//OJO DIRECTAMENTE ESTAMOS GUARDAANDO USERS SI NOS DAMOS CUENTA, TENED CUIDADO Y VER QUE GUARDAMOS
		.then(data => data.json()) //Guardamos la informacin en data y con una funcion de callback la transformamos en JSON
		.then(data => {
			usuarios = data; //No hace falta guardarlo en otra variable, en si ya esta guardado en dato como JSON
			console.log(data);

			//Mostrar informacion de los usuarios en la pagina
			//foreach o map(), que son lo mismo

			data.map((user,i) =>{ //Pasamos como referencia parametro users e i de indice
				let nombre = document.createElement('h2');
				nombre.innerHTML = i + "-"+ user.name + " " + user.username;

				div_promesa.append(nombre);
				//El método append te deja te deja enviar varios argumentos y que todos se agreguen como hijos del nodo padre.
				//El appendChild solo permite agregar 1 hijo a la vez.
			});

		})


var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#Janet");

//	USO DE PROMESAS
	getUsuarios() //USO EL FETCH DE LA FUNCION Y ENCADENO PROMESAS 
		.then(data => data.json()) // Capturamos los datos y los transformamos a JSon
		.then(data => {
			usuarios = data;
			listadoUsuarios(usuarios); //MANIPULAMOS LA INFORMACIÓN DE LA PROMESA COMO QUERAMOS


			//LUEGO ENCADENAMOS LA SIGUIENTE PROMESA, COMO NOS REGRESA UN FETCH
			return getJanet();
		})
			.then(data => data.json()) // PODEMOS SEGUIDAMENTE USAR LA INFORMACION DE ESE FETCH
			.then(user =>{
				mostrarJanet(user.data); //USAMOS FUNCIONES LO QUE QUERAMOS


				return getInfo(); // Encadenamos Promesas, para que no se haga tan engorroso
			})
				.then(user => {
					console.log(user);
				})
				.catch(error => { //Capturar  error
					console.log('Error');
				});


function listadoUsuarios(usuarios){ // RECORRE ARRAY DE  USUARIOS Y ESCRIBE LOS NOMBRES, UNA PARTE DEL FECTH HECHO FUNCION
	usuarios.map((user, i)=> {
			let nombre = document.createElement('h3');

			nombre.innerHTML = (i + 1) + " "+ user.name + " " + user.username;

			div_usuarios.appendChild(nombre);

			document.querySelector(".loading").style.display='none';
		});
}



function mostrarJanet(user){
	console.log(user);
	let nombre = document.createElement('h4');
	let avatar = document.createElement('img');
	nombre.innerHTML = user.first_name + " " + user.last_name;
	avatar.src = user.avatar;
	avatar.width = '200';


	div_janet.appendChild(nombre);
	div_janet.appendChild(avatar);

	document.querySelector("#Janet .loading").style.display='none';
}
//------------------------------------------------------------------------------------------------------------------
function getUsuarios(){ //CREAMOS UNA FUNCION ESPECIFICA PARA USUARIOS PASANDOLE COMO PARAMETRO EL FETCH CON LA URL
	return fetch('https://jsonplaceholder.typicode.com/users');
}
function getJanet(){ // FETCH DE UNA SOLA PERSONA
	return fetch('https://reqres.in/api/users/2');
}

//------------------------------------------------------------------------------------------------------------------

function getInfo(){ // Como construir una promesa desde cero
	var profesor = {
		nombre : 'Andres',
		apellidos : 'Herrera',
		url : 'https://google.es'
	};
	return new Promise((resolve, reject) => { //lO VEMOS DE MEJOR MANERA EN P.ORIENTADA A OBJETOS
		var profesor_string = JSON.stringify(profesor);

		if(typeof profesor_string != 'string'){
			return reject('Error');
		}else{
			resolve(profesor_string);
		}
	});
}
//Capturamos los errores de las promesas
//Metodo catch