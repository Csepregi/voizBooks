module.exports = {
	Query: {
		books: (_, __, { dataSources }) =>
			dataSources.bookAPI.getAllBooks()
	}
};