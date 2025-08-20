import { flashcards, prompt, exibirMenu } from "../menu.js";

export function BuscarFlashcardsPorPergunta() {
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

  console.log("Qual a pergunta que deseja procurar?: ");
  let perguntaSelecionada = prompt("> ");

  const perguntaEncontrada = flashcards.find(
    (flashcard) =>
      flashcard.pergunta.toLowerCase().trim() === perguntaSelecionada.toLowerCase().trim()
  );

  if (!perguntaEncontrada) {
    console.clear();
    console.log("Pergunta NÃO encontrada!!");
    prompt("Pressione Enter para voltar ao menu...");
    exibirMenu();
    return;
  }

  console.clear();
console.log("Flashcard encontrado com sucesso!\n");
console.log(
  `Baralho: ${perguntaEncontrada.tituloBaralho}\nID: ${perguntaEncontrada.idFlashcard}\n\nPERGUNTA: ${perguntaEncontrada.pergunta}\nRESPOSTA: ${perguntaEncontrada.resposta}\n`
);

prompt("Pressione Enter para voltar ao menu...");
exibirMenu();
}
