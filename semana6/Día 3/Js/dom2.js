// EJERCICIO 1

/* const txt = document.querySelector('.txt').innerText;
console.log(txt);

const inputName = document.querySelector('.inputName').value;
console.log(inputName);
document.write('<br>' + inputName + '</br>');
const inputSurname = document.querySelector('.inputSurname').value;
console.log(inputName);
const inputCorreo = document.querySelector('.inputCorreo').value;
console.log(inputCorreo); */

// EJERCICIO 2

/* const addName = document.querySelector('#addName'); */
/* console.log(addName);

const nroItemUser = () => {
    const div = document.querySelector('div');
	const inputName = document.querySelector('.inputName').value;
	const newName = document.createElement('p');
	newName.innerText = inputName;
	div.appendChild(newName);
    
	const inputSurname = document.querySelector('.inputSurname').value;
	const newName2 = document.createElement('p');
	newName2.innerText = inputSurname;
	div.appendChild(newName2);
    
	const inputCorreo = document.querySelector('.inputCorreo').value;
	const newName3 = document.createElement('p');
	newName3.innerText = inputCorreo;
	div.appendChild(newName3);
};
addName.addEventListener('click', nroItemUser); */

// EJERCICIO 3

/* const addName = document.querySelector('#addName');

const nroItemUser = () => {
	const div = document.querySelector('div');
	const inputName = document.querySelector('.inputName').value;
	let ulglobal;
	if (!document.querySelector('ul')) {
		const newUl = document.createElement('ul');
		div.appendChild(newUl);
		ulglobal = newUl;
	} else {
		ulglobal = document.querySelector('ul');
	}
	const newLi = document.createElement('li');
	newLi.innerText = inputName;

	ulglobal.appendChild(newLi);
};
addName.addEventListener('click', nroItemUser);
 */
const addName = document.querySelector('#addName');

const nroItemUser = () => {
	const div = document.querySelector('div');
	const inputName = document.querySelectorAll('.input');

	const inputText = [];

	for (let i = 0; i < inputName.length; i += 1) {
		inputText.push(inputName[i].value);
	}
	const inputString = inputText.join('');

	let ulglobal;
	if (!document.querySelector('ul')) {
		const newUl = document.createElement('ul');
		div.appendChild(newUl);
		ulglobal = newUl;
	} else {
		ulglobal = document.querySelector('ul');
	}
	const newLi = document.createElement('li');
	newLi.innerText = inputString;
	ulglobal.appendChild(newLi);
};
addName.addEventListener('click', nroItemUser);

// EJERCICIO PRACTICA

const boton = document.querySelector('#addName');
const practica = () => {
	const div = document.querySelector('div');
	const input = document.querySelector('.input');
	const text = [];
	for (let i = 0; i < input.length; i += 1) {
		text.push = input[i].value;
	}
	const junto = text.join('');
	let global;
	if (!document.querySelector('ul')) {
		const ul = document.createElement('ul');
		div.appendChild(ul);
		global = ul;
	} else {
		global = document.querySelector('ul');
	}
	const otroli = document.createElement('li');
	otroli.innerText = junto;
	global.appe;
};
