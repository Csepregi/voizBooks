const { ApolloServer, gql } = require('apollo-server')
const fetch = require("node-fetch")


let books = [
	{
		id: "cjmsvlnqw141z0970zmudmvq4",
		name: "A boldogság és őszinteség közötti összefüggés",
		author: "Lewis M Anderws, Ph. D."
	},
	{
		id: "cjmt4g3mq14f30970r5b4vjw0",
		name: "Gazdag Papa Szegény Papa",
		author: "Robert T. Kiyosaki"
	},
]


const typeDefs = gql`
  type Book {
    id: ID!
		name: String! 
		author: String!
	}
	type Query {
    books: [Book!]!
  }
`

const resolvers = {
	Query: {
		books: () => books
	}
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: { version: '1.7.25' }
})

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`)
})