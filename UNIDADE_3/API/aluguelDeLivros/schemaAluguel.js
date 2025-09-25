import mongoose from 'mongoose';

const aluguelSchema = new mongoose.Schema({
  idLivro: {
    type: String,
    required: [true, 'O título do livro é obrigatório.'],
    trim: true,
  },
  idEstudante: {
    type: String,
    required: [true, 'O autor do livro é obrigatório.'],
    trim: true,
  },

  dataAluguel: {
    type: String,
  },

  dataDevolucao: {
    type: String,
    default: null,
  },

  data_criacao: {
    type: Date,
    default: Date.now,
  },
});

const MAluguel = mongoose.model('aluguel', aluguelSchema);

export default MAluguel;
