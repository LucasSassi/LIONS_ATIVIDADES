import { flashcards, prompt, exibirMenu } from "../menu.js";

export function BuscarFlashcardsPorID() {
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
      `- ${flashcard.tituloBaralho}\nID: ${flashcard.idFlashcard}\nPERGUNTA: ${flashcard.pergunta}\nRESPOSTA: ${flashcard.resposta}\n\n`
    );
  });

  console.log("Qual ID que deseja procurar?: ");
  let idSelecionado = prompt("> ");
  idSelecionado = parseInt(idSelecionado)


  const idEncontrado = flashcards.find(
    (flashcard) =>
      flashcard.idFlashcard === idSelecionado
  );

  if (!idEncontrado) {
    console.clear();
    console.log("ID NÃO encontrado!!");
    prompt("Pressione Enter para voltar ao menu...");
    exibirMenu();
    return;
  }

  console.clear();
console.log("Flashcard encontrado com sucesso!\n");
console.log(
  `Baralho: ${idEncontrado.tituloBaralho}\nID: ${idEncontrado.idFlashcard}\n\nPERGUNTA: ${idEncontrado.pergunta}\nRESPOSTA: ${idEncontrado.resposta}\n`
);

prompt("Pressione Enter para voltar ao menu...");
exibirMenu();
}
