import { lerDadosPacientes, salvarDadosPacientes } from "../index.js";

export function deletarPaciente(req, res) {
  const IDParaDeletar = Number(req.params.ID);
  const pacientes = lerDadosPacientes();

  const pacientesIndex = pacientes.findIndex(
    (paciente) => paciente.ID === IDParaDeletar
  );

  if (pacientesIndex === -1) {
    return res.status(404).send("Paciente não encontrado com o ID fornecido.");
  }

  pacientes.splice(pacientesIndex, 1);

  salvarDadosPacientes(pacientes);

  res.status(200).send("Paciente deletado com sucesso!");
}
