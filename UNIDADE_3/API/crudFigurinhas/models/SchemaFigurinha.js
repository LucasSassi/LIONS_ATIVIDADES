import mongoose from "mongoose";

const figSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: [true, "O usuario é obrigatório."],
    trim: true,
  },
  Numero: {
    type: Number,
    required: [true, "O numero da figurinha é obrigatório."],
    trim: true,
  },
  Tema: {
    type: String,
    required: [true, "O tema da figurinha é obrigatório."],
    trim: true,
  },
});

const Mfig = mongoose.model("Fig", figSchema);

export default Mfig;
