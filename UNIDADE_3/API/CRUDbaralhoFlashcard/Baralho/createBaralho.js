import MBaralho from "../Schemas/schemaBaralhos.js";

export async function adicionarBaralho (req, res) {
  const { nome } = req.body;
try {
  if (!nome) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios.",
    });
  }

  const novoBaralho = new MBaralho({
    nome,
  });

  const salvarBaralho = await novoBaralho.save();

  res.status(201).send(`Baralho: "${novoBaralho.nome}" adicionado`, salvarBaralho);
}
catch (err){
  console.error(`O erro é: ${err}`)
}
};