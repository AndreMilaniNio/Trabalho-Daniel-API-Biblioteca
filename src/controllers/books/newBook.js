import { CreateAnyModel } from "../../services/create.js";
import { Book } from "../../models/books.js";
import { Author } from "../../models/authors.js";

async function NewBook(request, response) {
  try {
    // Guardando o corpo da requisição
    const bookData = request.body;

    // Verifica se o autor existe (com o nome que veio da requisição)
    const authorExists = await Author.findOne({ name: bookData.author });
    // Se não existir
    if (!authorExists) {
      return response
        .status(404)
        .send({
          Message: "Autor não encontrado, impossível adicionar um novo livro!",
        });
    }

    // Substitui o autor pelo ID
    bookData.author = authorExists.id;
    // Resultado da criação do livro
    const result = await CreateAnyModel(Book, bookData);

    // Popula o campo autor para retornar dados completos
    await result.populate("author");

    // Retorna o livro criado com informações do autor
    response.status(201).send({
      Message: "Livro criado com sucesso",
      Book: result.toObject(),
    });
  } catch (error) {
    response
      .status(400)
      .send({ Message: "Livro não criado! erro:", Error: error.message });
  }
}

export { NewBook };
