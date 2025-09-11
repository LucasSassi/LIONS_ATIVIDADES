import { lerDadosConsultas, salvarDadosConsultas } from "../index.js";

export function deletarConsulta(req, res) {
  const IDconsultaParaDeletar = Number(req.params.IDconsulta);
  const consultas = lerDadosConsultas();

  const consultasIndex = consultas.findIndex(
    (consulta) => consulta.IDconsulta === IDconsultaParaDeletar
  );

  if (consultasIndex === -1) {
    return res.status(404).send("Consulta não encontrado com o ID fornecido.");
  }

  consultas.splice(consultasIndex, 1);

  salvarDadosConsultas(consultas);

  res.status(200).send("Consulta deletada com sucesso!");
}
