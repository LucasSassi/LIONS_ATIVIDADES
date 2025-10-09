import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'O nome do pet é obrigatório.'],
    trim: true,
  },
  especie: {
    type: String,
    required: [true, 'A especie do pet é obrigatório.'],
    trim: true,
  },
  idade: {
    type: Number,
    required: [true, 'A idade do pet é obrigatório.'],
    trim: true,
  },
  status: {
    type: String,
    required: [true, 'O status do pet é obrigatório.'],
    trim: true,
  },
});

const MPet = mongoose.model('Pet', petSchema);

export default MPet;
