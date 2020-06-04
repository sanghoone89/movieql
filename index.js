import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers'

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `

// const resolvers = {
//     Query: {
//         hello: (_, { name }) => `Hello ${name || 'World'}`,
//     },
// }

//const server = new GraphQLServer({ typeDefs, resolvers })
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers
})
server.start(() => console.log('Server is running on localhost:4000'))