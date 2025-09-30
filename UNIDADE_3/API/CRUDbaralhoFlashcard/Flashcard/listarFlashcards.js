import MFlashcard from "../Schemas/schemaFlashcards.js"

export async function listarFlashcards(req, res) {
  try {
    const flashcards = await MFlashcard.find()
    res.status(200).send(flashcards)
  } catch (error) {
    res.status(500).send({ message: "Falha ao buscar os flashcards.", error: error.message })
  }
}