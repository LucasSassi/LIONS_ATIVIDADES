import { lerDadosEstudantes, salvarDadosEstudantes } from "../../index.js";

export function adicionarEstudantes (req, res) {
  const { nome, matricula, ano, curso } = req.body;

  if (!nome || !matricula || !ano || !curso) {
    return res.status(400).json({
      message: "Todos os campos (nome, matricula, ano e curso) são obrigatórios.",
    });
  }

  const novoEstudante = {
    id: Date.now(),
    nome,
    matricula,
    curso,
    ano,
  };

  const estudantes = lerDadosEstudantes();

  estudantes.push(novoEstudante);

  salvarDadosEstudantes(estudantes);

  res.status(201).send(`Estudante: "${novoEstudante.nome}" adicionado`);
};