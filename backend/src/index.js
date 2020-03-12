const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema');
const BookAPI = require('./datasources/books');
const resolvers = require('./resolvers');


const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		bookAPI: new BookAPI()
	}),
	playground: { version: '1.7.25' }

})

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`)
})