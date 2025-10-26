import mongoose from "mongoose";
const { Schema, model } = mongoose

const booksSchema = mongoose.Schema({
  title: { type: String, required: true },
  synopsis: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  year: { type: Number, required: true },

  isAvailable: { type: Boolean, required: true },
  expectedReturnDate: { type: Date, required: true },
});

const Book = mongoose.model("Book", booksSchema);
export { Book };
