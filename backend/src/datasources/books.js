const { RESTDataSource } = require('apollo-datasource-rest');

class BookAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.voiz.hu/graphql';
	}

	async getBooks() {
		const { results } = await this.get("");
		return results;
	}

	// bookReducer(book) {
	// 	return {
	// 		id: book.id,
	// 		name: book.name,
	// 		author: book.author,
	// 	};
	// }

	// async getAllBooks() {
	// 	const response = await this.get('')
	// 	return Array.isArray(response)
	// 		? response.map(book => this.bookReducer(book))
	// 		: [];
	// }

}

module.exports = BookAPI;