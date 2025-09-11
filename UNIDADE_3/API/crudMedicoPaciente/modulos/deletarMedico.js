import { lerDadosMedicos, salvarDadosMedicos } from "../index.js";

export function deletarMedico(req, res) {
  const CRMParaDeletar = Number(req.params.CRM);
  const medicos = lerDadosMedicos();

  const medicosIndex = medicos.findIndex(
    (medico) => medico.CRM === CRMParaDeletar
  );

  if (medicosIndex === -1) {
    return res.status(404).send("Médicos não encontrado com o CRM fornecida.");
  }

  medicos.splice(medicosIndex, 1);

  salvarDadosMedicos(medicos);

  res.status(200).send("Médico deletado com sucesso!");
}
