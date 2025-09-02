import { lerDados, salvarDados } from "../index.js";

export function adicionar (req, res) {
  const { nome, curso, ano } = req.body;

  if (!nome || !curso || !ano) {
    return res.status(400).json({
      message: "Todos os campos (nome, curso, ano) são obrigatórios.",
    });
  }

  const novoEstudante = {
    matricula: Date.now(),
    nome,
    curso,
    ano,
  };

  const estudantes = lerDados();

  estudantes.push(novoEstudante);

  salvarDados(estudantes);

  res.status(201).send(`Estudante "${novoEstudante.nome}" adicionado`);
};