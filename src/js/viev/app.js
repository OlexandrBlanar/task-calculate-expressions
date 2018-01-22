import Service from '../services/service';

export default function app() {

	const dataServices = new Service();

	function addElement(parentElem, data) {
		const newUl = document.createElement('ul');
		let refUl = parentElem.appendChild(newUl);
		data.forEach((item) => {
			const newLi = document.createElement('li');
			newLi.innerText = item;
			refUl.appendChild(newLi);
		});
	}

	const elExpressions = document.getElementById('expressions');
	const elResult = document.getElementById('result');
	const elVerify = document.getElementById('verifyResult');
	const elBtnExpressions = document.getElementById('btnExpressions');

	elBtnExpressions.addEventListener('click', () => {
		elExpressions.innerHTML = '';
		elResult.innerText = '';
		elVerify.innerText = '';
		dataServices.getExp()
			.then(data => {
				addElement(elExpressions, data.expressions);
				elResult.innerText = data.resExp.join(', ');
				elVerify.innerText = data.passed;
			});
	});
}
