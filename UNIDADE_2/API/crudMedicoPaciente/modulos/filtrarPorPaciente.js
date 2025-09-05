import { lerDadosConsultas } from "../index.js";

export function medicosQueAtenderamPaciente(req, res) {
  let consultas = lerDadosConsultas();

  const ID = Number(req.params.ID);

  const consultasDoPaciente = consultas.filter((consulta) => {
    return consulta.ID === ID;
  });

  if (consultasDoPaciente.length > 0) {
    const crmsDosMedicos = consultasDoPaciente.map((consulta) => consulta.CRM);
    const crmsUnicos = [...new Set(crmsDosMedicos)];

    const resposta = {
      descricao: `CRM dos médicos que atenderam o paciente com ID ${ID}`,
      crms: crmsUnicos,
    };

    res.status(200).json(resposta);
  } else {
    res.status(404).send("Nenhuma consulta encontrada para o ID informado.");
  }
}
