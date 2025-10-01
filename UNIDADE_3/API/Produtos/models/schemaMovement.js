import mongoose from 'mongoose';

const movmentSchema = new mongoose.Schema({
  idProduct: {
    type: String,
    required: [true, 'O ID do produto é obrigatório.'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'O tipo do moviemnto é obrigatório.'],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, 'A NOVA quantidade do produto é obrigatório.'],
    trim: true,
  },
  data: {
    type: Date,
    default: Date.now
  },
});

const MMovement = mongoose.model('Movments', movmentSchema);

export default MMovement;