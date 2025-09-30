import MFlashcard from "../Schemas/schemaFlashcards.js";

export async function adicionarFlashcards (req, res) {
  const { pergunta, resposta, id_do_baralho } = req.body;
try {
  if (!pergunta || !resposta || !id_do_baralho) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios.",
    });
  }

  const novoFlashcard = new MFlashcard({
    pergunta,
    resposta,
    id_do_baralho
  });

  const salvarFlashcard = await novoFlashcard.save();

  res.status(201).send(`Flashcard: "${novoFlashcard.id_do_baralho}" adicionado`, salvarFlashcard);
}
catch (err){
  console.error(`O erro é: ${err}`)
}
};