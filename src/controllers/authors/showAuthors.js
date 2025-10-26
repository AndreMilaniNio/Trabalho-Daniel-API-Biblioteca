import { FindAnyModel } from "../../services/find.js";
import { Author } from "../../models/authors.js";

// PARA MOSTRAR USUÁRIOS
async function ShowAuthors(request, response) {
  try {
    const findedAuthors = await FindAnyModel(Author);

    if (findedAuthors.length === 0) {
      return response.status(404).send({ Message: "Conteúdo não encontrado" });
    }

    response
      .status(200)
      .send({ Message: "Autores encontrados!", Authors: findedAuthors });
  } catch (error) {
    response
      .status(400)
      .send({ Message: "Erro ao buscar autores!", error: error.message });
  }
}

export { ShowAuthors };
