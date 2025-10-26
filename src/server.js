import { ConnectMongo } from "./mongodb.js";
import { app } from "./app.js";
import chalk from "chalk";
import "dotenv/config";

function Server() {
  app.listen({ host: process.env.HOST, port: process.env.PORT }).then(() => {
    console.log(
      chalk.yellow(`API on em ${process.env.HOST}:${process.env.PORT}`)
    );
  });
}

Server();
ConnectMongo();
