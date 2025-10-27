import { CreateAnyModel } from "../../services/create.js";
import { Loan } from "../../models/loans.js";
import { User } from "../../models/users.js";
import { Book } from "../../models/books.js";

async function newLoans(request, response) {
  try {
    const dataLoan = request.body;
    const { user, book } = dataLoan;

    // Verifica se o autor existe (com o nome que veio da requisição)
    const userExists = await User.findOne({ name: user });
    const bookExists = await Book.findOne({ title: book });

    // Se não existir usuário
    if (!userExists) {
      return response.status(404).send({
        Message: "Usuário não encontrado, impossível criar novo empréstimo!",
      });
    }
    // Se não existir livro
    if (!bookExists) {
      return response.status(404).send({
        Message: "Livro não encontrado, impossível criar novo empréstimo!",
      });
    }

    // Setando a data de agora
    const now = new Date();

    // Checa disponibilidade do livro
    if (!bookExists.isAvailable) {
      // Se o livro estiver emprestado, mas a data esperada de retorno já passou
      if (
        bookExists.expectedReturnDate &&
        bookExists.expectedReturnDate < now
      ) {
        // Pode prosseguir com o empréstimo
      } else {
        return response.status(400).send({
          Message: "Livro não disponível, já se encontra emprestado!",
        });
      }
    }

    // Calcula datas do empréstimo
    const loanDate = now;
    const returnDate = new Date();
    returnDate.setDate(now.getDate() + 3); // 3 dias a partir de hoje

    // Substitui pelo ObjectId correto
    dataLoan.user = userExists._id;
    dataLoan.book = bookExists._id;
    dataLoan.loanDate = loanDate;
    dataLoan.returnDate = returnDate;

    const result = await CreateAnyModel(Loan, dataLoan);

    // Atualiza o status do livro
    bookExists.isAvailable = false;
    bookExists.expectedReturnDate = returnDate;
    await bookExists.save();

    await result.populate("user");
    await result.populate("book");

    response
      .status(201)
      .send({ Message: "Empréstimo concluído", Dados: result.toObject() });
  } catch (error) {
    response.status(400).send({
      Message: "Não foi possível fazer seu empréstimo",
      Error: error.message,
    });
  }
}

export { newLoans };
