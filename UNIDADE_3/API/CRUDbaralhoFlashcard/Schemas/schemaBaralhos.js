import mongoose from "mongoose";

const baralhoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O nome do baralho é obrigatório."],
    trim: true,
  },
  data_criacao: {
    type: Date,
    default: Date.now,
  },
});

const MBaralho = mongoose.model("Baralho", baralhoSchema);

export default MBaralho;
