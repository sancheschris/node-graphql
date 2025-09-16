"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("@graphql-tools/schema");
// Type definitions (schema)
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;
// Resolvers
const resolvers = {
    Query: {
        hello: () => 'Hello, world!',
    },
};
// Create schema
const schema = (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers });
// Create Apollo Server
const server = new server_1.ApolloServer({ schema });
// Start server
(0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map