import { lerDadosConsultas } from "../index.js";

export function medicosQueAtenderamPaciente(req, res) {
  let consultas = lerDadosConsultas();

  const ID = Number(req.params.ID);

  const consultasDoPaciente = consultas.filter((consulta) => {
    return consulta.ID === ID;
  });

  if (consultasDoPaciente.length > 0) {
    const crmsDosMedicos = consultasDoPaciente.map((consulta) => consulta.CRM);
 
    res.status(200).json(crmsDosMedicos);
  } else {
    res.status(404).send("Nenhuma consulta encontrada para o ID informado.");
  }
}