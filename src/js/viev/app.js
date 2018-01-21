import Services from '../services/service';

export default function app() {

	const dataServices = new Services();

	function addElement(parentElem, data) {
		let newUl = document.createElement('ul');
		if (parentElem.firstChild) {
			parentElem.removeChild(parentElem.firstChild);
		}
		let refUl = parentElem.appendChild(newUl);
		for(let i = 0; i < data.length; i++) {
			let newLi = document.createElement('li');
			newLi.innerText = data[i];
			refUl.appendChild(newLi);
		}
	}

	document.getElementById('btn-expressions').addEventListener('click', () => {
		dataServices.getExp()
			.then(data => addElement(document.getElementById('expressions'), data));
	});

	document.getElementById('btn-calculate').addEventListener('click', () => {
		document.getElementById('result').innerText = dataServices.calculateExp().join(', ');
	});

	document.getElementById('btn-verify').addEventListener('click', () => {
		dataServices.postResult()
			.then(data => document.getElementById('verifyResult').innerText = data.passed);
	});
}
