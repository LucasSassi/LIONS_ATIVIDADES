import { lerDadosPacientes, salvarDadosPacientes } from "../index.js";

export function adicionarPaciente (req, res) {
  const { nome, DataDeNascimento } = req.body;

  if (!nome || !DataDeNascimento) {
    return res.status(400).json({
      message: "Todos os campos (nome, data de nascimento) são obrigatórios.",
    });
  }

  const novoPaciente = {
    ID: Date.now(),
    nome,
    DataDeNascimento,
  };

  const pacientes = lerDadosPacientes();

  pacientes.push(novoPaciente);

  salvarDadosPacientes(pacientes);

  res.status(201).send(`Paciente "${novoPaciente.nome}" adicionado`);
};