import MFlashcard from "../Schemas/schemaFlashcards.js";

export async function deletarFlashcard(req, res) {
  try {
    const idParaDeletar = req.params.id;

    const deletarFlashcard = await MFlashcard.findByIdAndDelete(idParaDeletar);

    res.status(200).send("Flashcard deletado com sucesso!", deletarFlashcard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
}
