import mongoose from "mongoose";

const authorsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  sex: { type: String },

  writingGenre: {
    type: String,
    enum: ["Novel", "Poetry", "Fantasy", "Fiction", "Mystery", "Suspense"],
    required: true,
  },
});

const Author = mongoose.model("Author", authorsSchema);
export { Author };
