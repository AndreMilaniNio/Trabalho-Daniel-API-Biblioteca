import { Routes } from "./routes/routes.js";
import fastify from "fastify";
const app = fastify();

app.register(Routes); // Para registrar minhas rotas

export { app };
