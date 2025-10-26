import mongoose from "mongoose";
import chalk from "chalk";
import "dotenv/config";

export async function ConnectMongo() {
  const uri = `${process.env.MONGO_URL}${process.env.MONGO_DATABASE_NAME}`;

  //   Verifica se a URI realmente existe
  if (!uri) {
    return console.error(
      chalk.red("Sua URI não existe, verifique seu mongodb.js")
    );
  }

  try {
    await mongoose.connect(uri);
    console.log(chalk.green("Conectado ao MongoDB \n"));
  } catch (error) {
    console.error(chalk.red("Erro ao se conectar com mongo:", error));
  }
}
