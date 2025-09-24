import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'O título do livro é obrigatório.'],
    trim: true,
  },
  autor: {
    type: String,
    required: [true, 'O autor do livro é obrigatório.'],
    trim: true,
  },

  ano: {
    type: Number,
    required: [true, 'O ano de publicação é obrigatório.'],
  },

  genero: {
    type: String,
    required: [true, 'O gênero do livro é obrigatório.'],
    trim: true,
  },

  data_criacao: {
    type: Date,
    default: Date.now,
  },
});

const MLivro = mongoose.model('Livro', livroSchema);

export default MLivro;
