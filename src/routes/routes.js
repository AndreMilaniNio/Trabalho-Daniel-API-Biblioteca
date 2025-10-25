import { NewUser } from "../controllers/newUsers.js";

export async function Routes(app) {
  app.get("/", async (request, response) => {
    response.status(200).send({ Message: "Hello World!" });
  });

  // Criação de usuário
  app.post("/users", NewUser);
}
