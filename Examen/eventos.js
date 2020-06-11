let btnNew = document.querySelectorAll('.btnNew');

function cambiar(number) {
	for (let i = 0; i < btnNew.length; i += 1) {
		btnNew[i].classList.remove('sky');
		if (number == 1) {
			btnNew[i].classList.add('close');
			btnNew[0].classList.remove('close');
			btnNew[0].classList.add('sky');
		}
		if (number == 2) {
			btnNew[i].classList.add('close');
			btnNew[1].classList.remove('close');
			btnNew[1].classList.add('sky');
		}
		if (number == 3) {
			btnNew[i].classList.add('close');
			btnNew[2].classList.remove('close');
			btnNew[2].classList.add('sky');
		}
		if (number == 4) {
			btnNew[i].classList.add('close');
			btnNew[3].classList.remove('close');
			btnNew[3].classList.add('sky');
		}
		if (number == 5) {
			btnNew[i].classList.add('close');
			btnNew[4].classList.remove('close');
			btnNew[4].classList.add('sky');
		}
	}
}
