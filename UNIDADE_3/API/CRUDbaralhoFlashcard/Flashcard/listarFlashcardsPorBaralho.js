import MFlashcard from "../Schemas/schemaFlashcards.js"

export async function listarFlashcardsPorBaralho(req, res) {
  try {
    const id_do_baralho = req.params.id_do_baralho

    const flashcards = await MFlashcard.find({ id_do_baralho: id_do_baralho })

    if (flashcards.length > 0) {
      res.status(200).send(flashcards)
    } else {
      res.status(404).send({ message: "Nenhum flashcard encontrado para este baralho." })
    }
  } catch (error) {
    res.status(500).send({ message: "Falha ao buscar os flashcards.", error: error.message })
  }
}