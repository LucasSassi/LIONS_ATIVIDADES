import mongoose from "mongoose";

const flashcardsSchema = new mongoose.Schema({
  pergunta: {
    type: String,
    required: [true, "A pergunta do flashcard é obrigatório."],
    trim: true,
  },
  resposta: {
    type: String,
    required: [true, "A resposta do flashcard é obrigatório."],
    trim: true,
  },
  id_do_baralho: {
    type: String,
    required: [true, "O id do baralho é obrigatório."],
    trim: true,
  },
  data_criacao: {
    type: Date,
    default: Date.now,
  },
});

const MFlashcard = mongoose.model("Flashcard", flashcardsSchema);

export default MFlashcard;
