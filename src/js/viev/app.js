import Service from '../services/service';

export default function app() {

	const dataServices = new Service();

	function addElement(parentElem, data) {
		const newUl = document.createElement('ul');
		if (parentElem.firstChild) {
			parentElem.removeChild(parentElem.firstChild);
		}
		let refUl = parentElem.appendChild(newUl);
		data.forEach((item) => {
			const newLi = document.createElement('li');
			newLi.innerText = item;
			refUl.appendChild(newLi);
		});
	}

	document.getElementById('btnExpressions').addEventListener('click', () => {
		dataServices.getExp()
			.then(data => addElement(document.getElementById('expressions'), data));
	});

	document.getElementById('btnCalculate').addEventListener('click', () => {
		document.getElementById('result').innerText = dataServices.calculateExp().join(', ');
	});

	document.getElementById('btnVerify').addEventListener('click', () => {
		dataServices.postResult()
			.then(data => document.getElementById('verifyResult').innerText = data.passed);
	});
}
