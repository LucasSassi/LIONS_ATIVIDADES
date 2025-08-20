import { atualzarBaralho } from "./Baralho/atualizarBaralho.js";
import { atualzarFlashcard } from "./Flashcard/atualizarFlashcards.js";
import { adicionarBaralho } from "./Baralho/createBaralho.js";
import { adicionarFlashcards } from "./Flashcard/createFlashcards.js";
import { listarBaralhos } from "./Baralho/listarBaralhos.js";
import { listarFlashcards } from "./Flashcard/listarFlashcards.js";
import { listarFlashcardsPorBaralho } from "./Flashcard/listarFlashcardsPorBaralho.js"
import PromptSync from "prompt-sync";
import { deletarBaralho } from "./Baralho/deletarBaralho.js";
import { deletarFlashcard } from "./Flashcard/deletarFlashcards.js";
import { BuscarFlashcardsPorPergunta } from "./Flashcard/buscarFlashcardsPorPergunta.js";
import { BuscarFlashcardsPorID } from "./Flashcard/buscarFlashcardPorID.js";
export const prompt = PromptSync({ sigint: true });
export let baralhos = [];
export let flashcards = [];

export function exibirMenu() {
  console.log(
    "=========MENU=========\n1-Adicionar Baralho\n2-Adicionar Flashcards\n3-Listar Baralhos\n4-Listar Flashcards\n5-Listar Flashcards Por Baralho\n6-Atualizar Baralho\n7-Atualizar Flashcards\n8-Deletar Baralho\n9-Deletar Flashcards\n10-Busxar Flashcards Por Pergunta\n11-Buscar Flashcards por ID\n0-Sair\n"
  );

  console.log("Insira a opção desejada.\n");
  let opcaoMenu = prompt("> ");
  opcaoMenu = parseInt(opcaoMenu, 10);
  switch (opcaoMenu) {
    case 1:
      console.clear();
      adicionarBaralho();
      break;
    case 2:
      adicionarFlashcards();
    case 3:
      listarBaralhos();
      break;
    case 4:
      listarFlashcards();
      break;
    case 5:
      listarFlashcardsPorBaralho();
      break;
    case 6:
      atualzarBaralho();
      break;
    case 7:
      atualzarFlashcard();
      break;
    case 8:
      deletarBaralho();
      break;
    case 9:
      deletarFlashcard();
      break;
    case 10:
      BuscarFlashcardsPorPergunta();
      break;
    case 11:
      BuscarFlashcardsPorID()
      break;
    case 0:
      process.exit();
      break;
    default:
      console.log("Insira uma opção válida!\n");
      exibirMenu();
  }
}

exibirMenu();
