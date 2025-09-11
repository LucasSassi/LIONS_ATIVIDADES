import { salvarDadosPacientes, lerDadosPacientes } from "../index.js";

export function atualizarPaciente(req, res) {
  try {
    const ID = Number(req.params.ID);
    const { nome, dataDeNascimento } = req.body;

    if (!nome || !dataDeNascimento) {
      return res
        .status(400)
        .send("Todos os campos sao obrigatorios (nome e data de nascimento)");
    }

    const pacientes = lerDadosPacientes();
    const pacienteIndex = pacientes.findIndex((paciente) => paciente.ID === ID);

    if (pacienteIndex === -1) {
      return res
        .status(400)
        .send("Nao foi possivel encontrar um paciente com esse ID");
    }

    const pacienteAtualizado = {
      ID: ID,
      nome,
      dataDeNascimento,
    };

    pacientes[pacienteIndex] = pacienteAtualizado;
    salvarDadosPacientes(pacientes);

    return res
      .status(200)
      .send(`Paciente ${pacienteAtualizado.nome}, atualizado com sucesso`);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
