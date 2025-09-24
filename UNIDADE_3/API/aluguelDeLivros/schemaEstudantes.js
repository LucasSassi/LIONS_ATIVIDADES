import mongoose from "mongoose";

const estudanteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O título do livro é obrigatório."],
    trim: true,
  },
  matricula: {
    type: String,
    required: [true, "O autor do livro é obrigatório."],
    trim: true,
  },

  ano: {
    type: Number,
    required: [true, "O ano de publicação é obrigatório."],
  },
  data_criacao: {
    type: Date,
    default: Date.now,
  },
});

const MEstudante = mongoose.model("Estudante", estudanteSchema);

export default MEstudante;
