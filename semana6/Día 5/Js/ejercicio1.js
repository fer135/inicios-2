const input1 = parseInt(document.querySelector('#input1').value);
console.log(typeof input1)
const input2 = parseInt(document.querySelector('#input2').value);
const btnSuma = document.querySelector('#btnSuma'),
	btnResta = document.querySelector('#btnResta'),
	btnMul = document.querySelector('#btnMul'),
	btnDiv = document.querySelector('#btnDiv');
const resultado = document.querySelector('.resultado');

btnSuma.addEventListener('click', () => {
	// console.log(input1 + input2);
	let resuma = (input1 + input2);
	console.log(resuma)

	/* resultado.innerText = input1 + input2; */

});
btnResta.addEventListener('click', () => {
	console.log(input1 - input2);
});
btnMul.addEventListener('click', () => {
	console.log(input1 * input2);
});
btnDiv.addEventListener('click', () => {
	console.log(input1 / input2);
});
