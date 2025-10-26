import { ShowUsers } from "../controllers/users/showUsers.js";
import { NewUser } from "../controllers/users/newUsers.js";
import { NewAuthor } from "../controllers/authors/newAuthor.js";
import { ShowAuthors } from "../controllers/authors/showAuthors.js";

export async function Routes(app) {
  app.get("/", async (request, response) => {
    response.status(200).send({ Message: "Hello World!" });
  });

  // Criação de usuário
  app.post("/users", NewUser);
  // Mostrar usuários
  app.get("/users", ShowUsers);

  // Criação de autor
  app.post("/authors", NewAuthor);
  // Listar autores
  app.get("/authors", ShowAuthors);
}
