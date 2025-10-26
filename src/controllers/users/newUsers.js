import { CreateAnyModel } from "../../services/create.js";
import { User } from "../../models/users.js";

async function NewUser(request, response) {
  // Tenta isso:
  try {
    // Para validação do nome
    const { name } = request.body;
    const existentUser = await User.findOne({ name });

    // Verificado se algum usuário tem o nome igual no banco
    if (existentUser) {
      return response
        .status(400)
        .send({ Message: "Usuário já existente com esse nome." });
    }

    // Cria um novo usuário no modelo
    const newUser = await CreateAnyModel(User, request.body);
    response
      .status(201)
      .send({ Message: "Usuário criado!", CreatedUser: newUser });
  } catch (error) {
    // Em caso de erro:
    response
      .status(400)
      .send({ Message: "Usuário não criado! erro:", Error: error.message });
  }
}

export { NewUser };
