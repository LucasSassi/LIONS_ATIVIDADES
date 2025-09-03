import { lerDadosPacientes } from "../index.js";

export function listarPacientes(req, res) {
  const pacientes = lerDadosPacientes();
  
  const { nome, DataDeNascimento, ID } = req.query;

  if (!nome && !ID && !DataDeNascimento) {
    return res.status(200).json(pacientes);
  }

  const pacientesFiltrados = pacientes.filter(medico => {
    const correspondeID = !ID || medico.ID.toLowerCase().includes(ID.toLowerCase());

    const correspondeNome = !nome || medico.nome.toLowerCase().includes(nome.toLowerCase());

    const correspodeDataDeNascimento = !DataDeNascimento || medico.DataDeNascimento.toLowerCase().includes(DataDeNascimento.toLowerCase());

    return correspondeNome && correspondeID && correspodeDataDeNascimento;
  });

  // 5. Retorna a lista filtrada
  res.status(200).json(pacientesFiltrados);
}