import { model } from "mongoose";
import { User } from "../models/users.js";
import { CreateAnyModel } from "../services/create.js";

export async function Routes(app) {
  app.get("/", async (request, response) => {
    response.status(200).send({ Message: "Hello World!" });
  });

  // Criação de usuário
  app.post("/users", async (request, response) => {
    // Tenta isso:
    try {
      // Para validação do nome
      const { name } = request.body;
      const existentUser = await User.findOne({ name });

      // Verificado se algum usuário tem o nome igual no banco
      if (existentUser) {
        return response
          .status(400)
          .send({ message: "Usuário já existente com esse nome." });
      }

      // Cria um novo usuário no modelo
      const newUser = await CreateAnyModel(User, request.body);
      response.status(201).send({ Message: "Usuário criado!", createdUser: newUser });

    } catch (error) {
      // Em caso de erro:
      response
        .status(400)
        .send({ Message: "Usuário não criado! erro:", error: error.message });
    }
  });
}
