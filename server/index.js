const express = require("express");
const jwt = require("jwt-simple");
const auth = require("./middleware/auth");
const { ApolloServer } = require("apollo-server-express");
const cors = require('cors'); 

const typeDefs = require("./graphql/schema/index");
const resolvers = require("./graphql/resolvers/index");

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const results = auth({ req });
    return { ...results };
  }
});

app.use(cors());
server.applyMiddleware({ app });

app.listen({ port: 3001 }, () => {
  console.log(`API SERVER START`);
});
