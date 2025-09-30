import MFlashcard from "../Schemas/schemaFlashcards.js";

export async function BuscarFlashcardsPorID(req, res) {
  try {
    const id = req.params.id;
    const flashcard = await MFlashcard.findById(id);

    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard não encontrado" });
    }

    res.status(200).json(flashcard);

  } catch (error) {
    res.status(500).json({ message: "Ocorreu um erro no servidor" });
  }
}
