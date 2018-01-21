import * as constants from './constants';
import { calculate } from './utils';

export default class DataServisec {

	constructor() {
		this.resExp = [];
		this.expressions = {};
		this.id = '';
	}

	getExp() {

		return fetch(constants.url)
			.then((response) => response.json())
			.then(data => {
				this.expressions = data.expressions;
				this.id = data.id;
				return data.expressions;
			})
			.catch(err => console.log(err));
	}

	calculateExp() {
		this.resExp = calculate(this.expressions);
		return this.resExp;
	}

	postResult() {
		let reqData = JSON.stringify({
			id: this.id,
			results: this.resExp,
		});

		let fetchData = {
			method: 'POST',
			body: reqData,
			headers: new Headers(constants.httpHeaders)
		};

		return fetch(constants.url, fetchData)
			.then((response) => response.json())
	}

}
