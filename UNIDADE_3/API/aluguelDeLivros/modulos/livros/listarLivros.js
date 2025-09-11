import { lerDadosLivros } from "../../index.js";

export function listarLivros(req, res) {
  const livros = lerDadosLivros();

  res.status(200).json(livros);
}