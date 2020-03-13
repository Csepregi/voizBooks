const { ApolloServer, gql } = require('apollo-server')
//const typeDefs = require('./schema');
const BookAPI = require('./datasources/books');
//const resolvers = require('./resolvers');
const fetch = require("node-fetch");


const typeDefs = gql`
	type Book {
		id: ID!
		name: String! 
		author: String!
	}
	type Query {
		books: [Book!]!
	}
`;

const resolvers = {
	Query: {
		books: async () => {
			const response = await fetch("https://api.voiz.hu/graphql");
			const data = await response.json();
			return data.results;
		},
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		bookAPI: new BookAPI()
	})
});


// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers,
// 	dataSources: () => ({
// 		bookAPI: new BookAPI()
// 	}),
// 	playground: { version: '1.7.25' }

// })

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`)
})