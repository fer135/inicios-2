// if (typeof(Storage) !== "undefined"){
//     localStorage.setItem('nombre', 'Jefry Guevara')

// }else{
//     alert('Tu navegador no soporta el local storage')
// }
// localStorage.removeItem('nombre');
// const inputName = document.querySelector('input') .value;
// console.log(inputName)
// localStorage.setItem('name', inputName);
// // document.write(localStorage.getItem('name'))
// localStorage.clear()

// const formulario = document.querySelector('#formPeliculas')

// formulario.addEventListener('submit', ()=>{
//     const pelicula = document.querySelector('#pelicula').value
//     if(pelicula.length>=1){
//         localStorage.setItem(pelicula, pelicula);
//     }
// });
// var listaPeliculas = document.querySelector('#listaPeliculas');
// for(let i in localStorage){
//     console.log(localStorage[i])
//     if(typeof localStorage[i]=='string'){
//         const newLi=document.createElement("li");
//         newLi.append(localStorage[i])
//         listaPeliculas.append(newLi)
//     }
// }
// // localStorage.clear()
// const formularioBorrar = document.querySelector('#formBorrarPeliculas')

// formularioBorrar.addEventListener('submit', ()=>{
//     const pelicula = document.querySelector('#borrarPelicula').value
//     if(pelicula.length>=1){
//         localStorage.removeItem(pelicula);
//     }
// });

/* MI PUTO EJERCICIO */

const btn = document.querySelector('#login');
const formulario = document.querySelector('#formulario');
btn.addEventListener('click', () => {
	console.log(formulario);
	formulario.classList.add('showForm');
});

formulario.addEventListener('submit', () => {
	const name = document.querySelector('#name').value;
	const password = document.querySelector('#password').value;
	localStorage.setItem('nombre', name);
	localStorage.setItem('password', password);
});

const formIngreso = document.querySelector('#formIngreso');
formIngreso.addEventListener('submit', () => {
	event.preventDefault();
	const name = document.querySelector('#nameIngreso').value;
	const password = document.querySelector('#passwordIngreso').value;
	const nameGuardado = localStorage.getItem('nombre');
	console.log(typeof nameGuardado);
	const passwordGuardado = localStorage.getItem('password');
	if (name === nameGuardado && password === passwordGuardado) {
		const menu1 = document.querySelector('.menu').classList.add('hide');
		const menu2 = document.querySelector('.menu2').classList.remove('hide');
		const usuario = (document.querySelector(
			'.usuario'
		).textContent = nameGuardado);
	}
});

const formLogout = document.querySelector('#logout');
formLogout.addEventListener('submit', () => {
	localStorage.clear();
});
// localStorage.clear()

// const arrFrutas=['Manzana', 'Banano', 'Pera']

// for(let i in arrFrutas){
//     console.log(arrFrutas[i])
// }

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
