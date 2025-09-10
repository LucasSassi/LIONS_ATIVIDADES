import { lerDadosEstudantes } from "../../index.js";

export function listarEstudantes(req, res) {
  const estudantes = lerDadosEstudantes();

  res.status(200).json(estudantes);
}