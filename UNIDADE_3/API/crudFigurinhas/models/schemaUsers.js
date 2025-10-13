import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  ObjectId: {
    type: String,
    required: false,
    trim: true,
  },
  nome: {
    type: String,
    required: [true, "O nome do usuario é obrigatório."],
    trim: true,
  },
});

const MUser = mongoose.model("User", userSchema);

export default MUser;
