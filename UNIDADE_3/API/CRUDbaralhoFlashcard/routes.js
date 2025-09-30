import express from "express"
// BARALHOS
import { adicionarBaralho } from "./Baralho/createBaralho.js";
import { listarBaralhos } from "./Baralho/listarBaralhos.js";
import { atualizarBaralho } from "./Baralho/atualizarBaralho.js";
// FLASHCARDS
import { BuscarFlashcardsPorID } from "./Flashcard/buscarFlashcardPorID.js";
import { adicionarFlashcards } from "./Flashcard/createFlashcards.js";
import { listarFlashcards } from "./Flashcard/listarFlashcards.js";
import { listarFlashcardsPorBaralho } from "./Flashcard/listarFlashcardsPorBaralho.js";
import { atualizarFlashcards } from "./Flashcard/atualizarFlashcards.js";
import { deletarFlashcard } from "./Flashcard/deletarFlashcards.js";

export const router = express.Router();
// BARALHOS
router.post("/baralhos", adicionarBaralho)
router.get("/baralhos", listarBaralhos)
router.put("/baralhos/:idBaralho", atualizarBaralho)
// FLASHCARD
router.get("/flashcards/:id", BuscarFlashcardsPorID)
router.post("/flashcards", adicionarFlashcards)
router.get("/flashcards", listarFlashcards)
router.get("/flashcards/baralho/:id_do_baralho", listarFlashcardsPorBaralho)
router.put("/flashcards/:id", atualizarFlashcards)
router.delete("/flashcards/:id", deletarFlashcard)