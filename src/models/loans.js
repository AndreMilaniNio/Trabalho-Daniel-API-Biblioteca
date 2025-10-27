import mongoose from "mongoose";
const { Schema } = mongoose;

const loansSchema = mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  loanDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
});

const Loan = mongoose.model("Loan", loansSchema);
export { Loan };
