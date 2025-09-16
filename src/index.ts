import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { makeExecutableSchema } from "@graphql-tools/schema";

// Type definitions (schema)
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// Resolvers
const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};

// Create schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Create Apollo Server
const server = new ApolloServer({ schema });

// Start server
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});
