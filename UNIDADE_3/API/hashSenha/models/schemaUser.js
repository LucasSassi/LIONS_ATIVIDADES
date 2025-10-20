import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "O email do usuario é obrigatório."],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "A senha do usuario é obrigatório."],
    trim: true,
  },
});

const MUser = mongoose.model("UserSenha", userSchema);

export default MUser;
