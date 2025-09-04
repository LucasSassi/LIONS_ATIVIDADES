import { lerDadosPacientes } from "../index.js";

export function listarPacientes(req, res) {
  const pacientes = lerDadosPacientes();
  
  const { nome, DataDeNascimento, ID } = req.query;

  if (!nome && !ID && !DataDeNascimento) {
    return res.status(200).json(pacientes);
  }

  const pacientesFiltrados = pacientes.filter(paciente => {
    const correspondeID = !ID || paciente.ID.toLowerCase().includes(ID.toLowerCase());

    const correspondeNome = !nome || paciente.nome.toLowerCase().includes(nome.toLowerCase());

    const correspodeDataDeNascimento = !DataDeNascimento || paciente.DataDeNascimento.toLowerCase().includes(DataDeNascimento.toLowerCase());

    return correspondeNome && correspondeID && correspodeDataDeNascimento;
  });

  res.status(200).json(pacientesFiltrados);
}