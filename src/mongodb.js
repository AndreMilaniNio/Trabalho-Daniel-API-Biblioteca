import "dotenv/config";
import mongoose from "mongoose";

export async function ConnectMongo() {
  const uri = `${process.env.MONGO_URL}/${process.env.MONGO_DATABASE_NAME}`;

  //   Verifica se a URI realmente existe
  if (!uri) {
    return console.error("Sua URI não existe, verifique seu mongodb.js");
  }

  try {
    await mongoose.connect(uri);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro ao se conectar com mongo:", error);
  }
}
