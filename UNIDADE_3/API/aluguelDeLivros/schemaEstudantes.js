import mongoose from "mongoose";

const estudanteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O título do estudante é obrigatório."],
    trim: true,
  },
  matricula: {
    type: String,
    required: [true, "O autor do estudante é obrigatório."],
    trim: true,
  },

  curso: {
    type: String,
    required: [true, "O curso do estudante é obrigatório."],
    trim: true,
  },

  ano: {
    type: Number,
    required: [true, "O ano é obrigatório."],
  },
  data_criacao: {
    type: Date,
    default: Date.now,
  },
});

const MEstudante = mongoose.model("Estudante", estudanteSchema);

export default MEstudante;
