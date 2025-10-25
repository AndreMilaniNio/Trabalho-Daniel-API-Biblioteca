import mongoose from "mongoose"

const loansSchema = mongoose.Schema({
    user: { type: String, required: true },
    book: { type: String, required: true },
    loanDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
})