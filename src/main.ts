import { ApolloServer } from "apollo/server";
import { startStandaloneServer } from "apollo/server/standalone";
import { graphql as _graphql } from "graphql";
import config from "./configs.ts";
import { typeDefs } from "schema";
import { resolvers } from "resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: config.PORT },
});

console.log(`🚀 Server ready at ${url}`);
