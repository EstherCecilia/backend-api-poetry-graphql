const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./models/schema");
const { resolvers } = require("./controller/resolvers");

const port = process.env.PORT || 9090;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }, () =>
  console.log(`Server runs at: http://localhost:${port}`)
);
