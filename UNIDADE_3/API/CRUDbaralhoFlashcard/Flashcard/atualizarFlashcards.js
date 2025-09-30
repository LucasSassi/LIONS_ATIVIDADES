import MFlashcard from "../Schemas/schemaFlashcards.js";

export async function atualizarFlashcards(req, res) {
  try {
    const { id } = req.params;
    const novosDados = req.body;

    const flashcardAtualizado = await MFlashcard.findByIdAndUpdate(
      id,
      novosDados,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!flashcardAtualizado) {
      return res.status(404).json({ message: "Flashcard não encontrado." });
    }
    
    res.status(200).json(flashcardAtualizado);

  } catch (error) {
    console.error("Erro ao atualizar flashcard:", error);
    res.status(500).json({ message: `Ocorreu um erro no servidor: ${error.message}` });
  }
}