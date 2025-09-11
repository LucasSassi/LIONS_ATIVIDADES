import { lerDadosConsultas } from "../index.js";

export function filtrarPorMedico(req, res) {
  let consultas = lerDadosConsultas();

  const CRM = Number(req.params.CRM);

  const consultasDoMedico = consultas.filter((consulta) => {
    return consulta.CRM === CRM;
  });

  if (consultasDoMedico.length > 0) {
    const idsDosPacientes = consultasDoMedico.map((consulta) => consulta.ID);
    const idsUnicos = [...new Set(idsDosPacientes)];

    const resposta = {
      descricao: `IDS dos pacientes que foram atendendidos pelo medico com CRM ${CRM}`,
      IDS: idsUnicos,
    };

    res.status(200).json(resposta);
  } else {
    res.status(404).send("Nenhum paciente encontrado para o CRM informado.");
  }
}
