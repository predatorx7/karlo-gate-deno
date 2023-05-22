import { ApolloServer } from "apollo/server";
import { expressMiddleware } from "apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "apollo/server/plugin/drainHttpServer";
import { graphql as _graphql } from "graphql";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./configs.ts";
import { typeDefs } from "schema";
import { resolvers } from "resolvers";
import { http } from "deps";

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server),
);

await new Promise((resolve) =>
  httpServer.listen({ port: config.PORT }, () => resolve(null))
);

console.log(`🚀 Server ready at http://localhost:${config.PORT}`);
