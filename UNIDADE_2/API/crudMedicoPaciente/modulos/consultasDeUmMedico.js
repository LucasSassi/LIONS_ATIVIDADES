import { lerDadosConsultas } from "../index.js";

export function listarConsultasDeUmMedico(req, res) {
  let consultas = lerDadosConsultas();

  const CRM = Number(req.params.CRM);

  const consultasFiltradas = consultas.filter((consulta) => {
    return consulta.CRM === CRM;
  });

  if (consultasFiltradas.length > 0) {
    res.status(200).json(consultasFiltradas);
  } else {
    res.status(404).send("Nenhuma consulta encontrada para o CRM informado.");
  }
}