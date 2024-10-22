const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("./utils/db");
const typeDefs = [
  require("./schemas/userSchema"),
  require("./schemas/todoSchema"),
];
const resolvers = [
  require("./resolvers/userResolvers"),
  require("./resolvers/todoResolvers"),
];
const authMiddleware = require("./middlewares/authMiddleware");
require("dotenv").config();

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => authMiddleware({ req }),
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () =>
    console.log(
      `Server running at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
};

startServer();
