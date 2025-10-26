import mongoose from "mongoose";

const authorsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  sex: { type: String, enum: ["Masculino", "Feminino"], required: true },

  writingGenre: {
    type: String,
    enum: ["Novel", "Poetry", "Fantasy", "Fiction", "Mystery", "Suspense", "Others"],
    required: true,
  },
});

const Author = mongoose.model("Author", authorsSchema);
export { Author };
