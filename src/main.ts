// @deno-types="npm:@types/express@4.17.15"
import express from "express";
// @deno-types="npm:@types/node@20.2.3"
import http from "node:http";
import gateJson from "/gate.json"  assert { type: "json" };
import configs from "configs";
const app = express();

for (const service of gateJson.services) {
  app.get(service.path, (_, res) => {
    return res.redirect(service.url);
  });
}

const server = http.createServer(app);

server.listen(configs.PORT);

console.log(`🚀 Server ready at http://0.0.0.0:${configs.PORT}`);
