/* const divrojo =document.getElementById('rojo')
console.log(divrojo)

const divroja=document.querySelector('.rojo')
console.log(divrojo) */

/* const divrojo = document.querySelector('.rojo');
divrojo.classList.remove('rojo');
divrojo.classList.add('violeta');
console.log(divrojo); */

/* const divrojo = document.getElementsByClassName('rojo');
divrojo.classList.remove('rojo');
divrojo.classList.add('violeta');
console.log(divrojo);
const divazul = document.getElementById('azul');
const divamarillo = document.querySelector('.amarillo');
const divvioleta = document.getElementById('violeta'); */

/* const divrojo = document.querySelector('#rojo');
divrojo.innerHTML = "<h1 class='titilo'>hola</h1>";
const divazul = document.querySelector('azul');
const divamarillo = document.querySelector('.amarillo');
const divvioleta = document.querySelector('.violeta');
 */

// EJERCICIO 1
//  EL TITULO Y EL PARRAFO DEBEN CAMBIAR MEDIANTE EL CLICK DE UN BOTON

/* function changecont(
	clasetitulo,
	nuevoMensajeTitulo,
	claseParrafo,
	nuevoParrafo
) {
	document.querySelector(clasetitulo).innerText = nuevoMensajeTitulo;
	document.querySelector(claseParrafo).innerText = nuevoParrafo;
} */

// EJERCICIO 2
/* function cambiarTxt(primermensaje, segundomensaje) {
	const title = document.querySelector('.title');
	if (title.innerText == 'eres bi') {
		title.innerText = segundomensaje;
	} else if (title.innerText == 'eres heter') {
		title.innerText = primermensaje;
	}
} */

// EJERCICIO 3
function cambiarclase(divrojo) {
	document.querySelector(divrojo).classList.add('move');
}
