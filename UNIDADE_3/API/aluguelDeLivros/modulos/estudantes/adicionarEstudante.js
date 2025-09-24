import MEstudante from "../../schemaEstudantes.js";

export async function adicionarEstudantes (req, res) {
  const { nome, matricula, ano, curso } = req.body;
try {
  if (!nome || !matricula || !ano || !curso) {
    return res.status(400).json({
      message: "Todos os campos (nome, matricula, ano e curso) são obrigatórios.",
    });
  }

  const novoEstudante = new MEstudante({
    nome,
    matricula,
    curso,
    ano,
  });

  const salvarEstudante = await novoEstudante.save();

  res.status(201).send(`Estudante: "${novoEstudante.nome}" adicionado`, salvarEstudante);
}
catch (err){
  console.error(`O erro é: ${message.err}`)
}
};