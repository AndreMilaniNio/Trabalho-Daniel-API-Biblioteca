import { FindAnyModel } from "../../services/find.js";
import { Book } from "../../models/books.js";

// PARA MOSTRAR USUÁRIOS
async function ShowBooks(request, response) {
  try {
    const findedBooks = await FindAnyModel(Book);
    // Se o array de livros for zero, me retorna que não teve conteúdo encontrado
    if (findedBooks.length === 0) {
      return response.status(404).send({ Message: "Conteúdo não encontrado" });
    }

    // Popula o campo 'author' de todos os livros encontrados com os dados completos do autor
    const populatedBooks = await Promise.all(
      findedBooks.map((book) => book.populate("author"))
    );

    response
      .status(200)
      .send({ Message: "Usuários encontrados!", Books: populatedBooks });
  } catch (error) {
    response
      .status(400)
      .send({ Message: "Erro ao buscar usuários!", error: error.message });
  }
}

export { ShowBooks };
