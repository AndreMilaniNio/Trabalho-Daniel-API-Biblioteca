import mongoose from "mongoose";
import chalk from "chalk";
import { Author } from "../models/authors.js";
import { Loan } from "../models/loans.js";
import { Book } from "../models/books.js";
import { User } from "../models/users.js";
import { ConnectMongo } from "../mongodb.js";

// DROPAR E RECRIAR COLÇÕES
async function DropAndRecreateCollections() {
  try {
    // Se conecta ao Mongo
    await ConnectMongo();
    
    // Espera a conexão com o banco e lista como array
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    // Para cada nome na constante collections ele exclui, no caso as pastas do banco
    for (const { name } of collections) {
      mongoose.connection.dropCollection(name);
      console.log(chalk.yellow("Coleção removida:"), name);
    }

    // Recria as pastas de cada schema (as coleções)
    await User.createCollection();
    await Book.createCollection();
    await Author.createCollection();
    await Loan.createCollection();
    console.log(chalk.blue("\nColeções recriadas com sucesso!"));

    // Disconecta do banco logo em seguida
    await mongoose.disconnect();
    console.log(chalk.red("\nDesconectado do MongoDB"));
  } catch (error) {
    // Em caso de erro
    console.error({ error: error.message });
  }
}
// Roda a função
DropAndRecreateCollections();
