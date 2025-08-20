import { flashcards, prompt, exibirMenu } from "../menu.js";

export function listarFlashcards() {
  console.clear();

  if (flashcards.length === 0) {
    console.log("Nenhum flashcard criado ainda. Crie um primeiro.");
    prompt("Pressione Enter para voltar ao menu...");
    exibirMenu();
    return;
  }

  console.log("Flashcards existentes:");
  flashcards.forEach((flashcard) => {
    console.log(
      `- ${flashcard.tituloBaralho}\nPERGUNTA: ${flashcard.pergunta}\nRESPOSTA: ${flashcard.resposta}\n\n`
    );
  });
  console.log("Aperte ENTER para voltar ao menu...");
  prompt("");
  console.clear();
  exibirMenu();
}
