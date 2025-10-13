import mongoose from "mongoose";

const cinemaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, "O titulo do filme é obrigatório."],
    trim: true,
  },
  diretor: {
    type: String,
    required: [true, "O diretor do filme é obrigatório."],
    trim: true,
  },
  ano: {
    type: Number,
    required: [true, "O ano do filme é obrigatório."],
    trim: true,
  },
  genero: {
    type: String,
    required: [true, "O genero do filme é obrigatório."],
    trim: true,
  },
});

const MCinema = mongoose.model("Cinema", cinemaSchema);

export default MCinema;
