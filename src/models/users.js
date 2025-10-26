import mongoose, { mongo } from "mongoose";

const usersSchema = mongoose.Schema({
  name: { type: String, required: true },
  sex: { type: String, enum: ["Masculino", "Feminino"], required: true },

  address: { type: String, required: true },
  birthDate: { type: Date, required: true },
});

const User = mongoose.model("User", usersSchema);
export { User };
