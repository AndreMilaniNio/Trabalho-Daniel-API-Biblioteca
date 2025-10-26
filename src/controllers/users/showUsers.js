import { FindAnyModel } from "../../services/find.js";
import { User } from "../../models/users.js";

// PARA MOSTRAR USUÁRIOS
async function ShowUsers(request, response) {
  try {
    const findedUsers = await FindAnyModel(User);

    if (findedUsers.length === 0) {
      return response.status(404).send({ Message: "Conteúdo não encontrado" });
    }

    response
      .status(200)
      .send({ Message: "Usuários encontrados!", Users: findedUsers });
  } catch (error) {
    response
      .status(400)
      .send({ Message: "Erro ao buscar usuários!", error: error.message });
  }
}

export { ShowUsers };
