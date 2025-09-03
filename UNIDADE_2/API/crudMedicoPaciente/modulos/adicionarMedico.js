import { lerDadosMedicos, salvarDadosMedicos } from "../index.js";

export function adicionarMedico (req, res) {
  const { nome, especialidade } = req.body;

  if (!nome || !especialidade) {
    return res.status(400).json({
      message: "Todos os campos (nome, especialidade) são obrigatórios.",
    });
  }

  const novoMedico = {
    CRM: Date.now(),
    nome,
    especialidade,
  };

  const medicos = lerDadosMedicos();

  medicos.push(novoMedico);

  salvarDadosMedicos(medicos);

  res.status(201).send(`Médico "${novoMedico.nome}" adicionado`);
};