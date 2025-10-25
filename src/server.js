import { CONSTANTS } from "./utility/constants.js";
import { app } from "./app.js";
import "dotenv/config";

function Server() {
  app.listen({ host: CONSTANTS.HOST, port: CONSTANTS.PORT }).then(() => {
    console.log(`API on em ${CONSTANTS.HOST}:${CONSTANTS.PORT}`);
  });
}

Server();
