import MAluguel from "../../schemaAluguel.js";

export async function listarAlugueis(req, res) {
  const alugueis = await MAluguel.find();
  
  res.status(200).json(alugueis);
}
