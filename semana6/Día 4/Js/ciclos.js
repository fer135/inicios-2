/* const numeros = ['1', '2', '3'];

for (let i in numeros) {
	console.log(numeros[i]);
}

for (numero of numeros) {
	console.log(numero);
}
 */
const btnSingUp = document.querySelector('#singUp');
const formularioguardar = document.querySelector('#formularioGuardar');
btnSingUp.addEventListener('click', () => {
	formularioguardar.classList.add('showForm');
});

formularioguardar.addEventListener('submit', () => {
	const name = document.querySelector('#name').value;
	const password = document.querySelector('#password').value;
	localStorage.setItem('nombre', name);
	localStorage.setItem('contraseña', password);
});

const formIngreso = document.querySelector('#formIngreso');
formIngreso.addEventListener('submit', () => {
	event.preventDefault();
	const nameIngreso = document.querySelector('#formIngreso');
	const passwordIngreso = document.querySelector('#passwordIngreso');
	const nameGuardado = localStorage.setItem('nombre');
	const passwordGuardado = localStorage.setItem('contraseña');
	if (nameIngreso === nameGuardado && passwordIngreso == passwordGuardado) {
		const menu1 = document.querySelector('.menu');
		classList.add('hide');
		const menu2 = document.querySelector('.menu2');
		classList.remove('hide');
		const usuario = document.querySelector('.usuario');
		textContent = nameGuardado;
	} else {
		alert('contraseña o usuario invalido');
	}
});
const formLogout = document.querySelector('#logout');
formLogout.addEventListener('submit', () => {
	localStorage.clear();
});
