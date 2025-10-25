import mongoose from "mongoose";

const booksSchema = mongoose.Schema({
  title: { type: String, required: true },
  synopsis: { type: String, required: true },
  author: { type: ObjectId, required: true },
  year: { type: Number, required: true },

  isAvailable: { type: Boolean, required: true },
  expectedReturnDate: { type: Date, required: true },
});

const Book = mongoose.model("Book", booksSchema);
export { Book };
