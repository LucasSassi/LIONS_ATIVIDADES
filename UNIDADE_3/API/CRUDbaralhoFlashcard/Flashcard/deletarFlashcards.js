import { flashcards, prompt, exibirMenu } from "../menu.js";

export function deletarFlashcard(){
    console.clear()

    if (flashcards.length === 0) {
        console.log("Nenhum flashcard criado ainda. Crie um primeiro.");
        prompt("Pressione Enter para voltar ao menu...");
        exibirMenu();
        return;
      }

    console.log("Flashcards existentes:");
    flashcards.forEach((flashcard) => {
      console.log(`- ${flashcard.idFlashcard}\nPERGUNTA: ${flashcard.pergunta}\nRESPOSTA: ${flashcard.resposta}\n\n`);
    });

    console.log("Digite o ID do flashcard que deseja deletar.")
    let idFlashcardSelecionado = prompt("> ").trim()

    const flashcardEncontrado2 = flashcards.find(
        (flashcard) =>
            flashcard.idFlashcard=== parseInt(idFlashcardSelecionado)
      );
    
      if (!flashcardEncontrado2) {
        console.clear();
        console.log("\n====== Flashcard não encontrado! ======");
        prompt("Pressione Enter para voltar ao menu...");
        exibirMenu();
        return;
      }

      const indexDoFlashcard = flashcards.findIndex(
        (f) => f.idFlashcard === flashcardEncontrado2.idFlashcard
      );
    
      if (indexDoFlashcard > -1) {
        flashcards.splice(indexDoFlashcard, 1);
      }

      console.clear()
      console.log("===Flashcard deletado com sucesso===")
      exibirMenu()

}