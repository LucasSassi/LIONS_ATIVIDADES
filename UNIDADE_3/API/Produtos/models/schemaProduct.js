import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O título do livro é obrigatório.'],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, 'O autor do livro é obrigatório.'],
    trim: true,
  },
});

const MProduct = mongoose.model('Product', productSchema);

export default MProduct;
