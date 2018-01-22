import * as constants from './constants';
import { calculate } from './utils';

export default class DataService {

	constructor() {
		this.resExp = [];
		this.expressions = [];
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
		const reqData = JSON.stringify({
			id: this.id,
			results: this.resExp,
		});

		const fetchData = {
			method: 'POST',
			body: reqData,
			headers: new Headers(constants.httpHeaders)
		};

		return fetch(constants.url, fetchData)
			.then((response) => response.json())
			.catch(err => console.log(err));
	}

}
