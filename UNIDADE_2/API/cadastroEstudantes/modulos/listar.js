import { lerDados } from "../index.js"

export function listar (req, res) {
  const estudantes = lerDados();
  res.status(201).json(estudantes);
};