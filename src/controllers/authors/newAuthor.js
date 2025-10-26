import { CreateAnyModel } from "../../services/create.js";
import { Author } from "../../models/authors.js";

async function NewAuthor(request, response) {
  // Tenta isso:
  try {
    // Para validação do nome
    const { name } = request.body;
    const existentAuthor = await Author.findOne({ name });

    // Verificado se algum usuário tem o nome igual no banco
    if (existentAuthor) {
      return response
        .status(400)
        .send({ Message: "Autor já existente com esse nome." });
    }

    // Cria um novo usuário no modelo
    const newAuthor = await CreateAnyModel(Author, request.body);
    response
      .status(201)
      .send({ Message: "Autor criado!", CreatedAuthor: newAuthor });
  } catch (error) {
    // Em caso de erro:
    response
      .status(400)
      .send({ Message: "Autor não criado! erro:", Error: error.message });
  }
}

export { NewAuthor };
