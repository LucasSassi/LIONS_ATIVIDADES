import { flashcards, baralhos, prompt, exibirMenu } from "../menu.js";

export function listarFlashcardsPorBaralho(){
    console.clear()
    if (baralhos.length === 0) {
        console.log("Nenhum baralho criado ainda. Crie um baralho primeiro.");
        prompt("Pressione Enter para voltar ao menu...");
        exibirMenu();
        return;
      }
    
      console.log("Baralhos existentes:");
      baralhos.forEach(baralho => {
        console.log(`- ${baralho.titulo}`);
      });
      console.log("\nQual baralho você deseja listar os flashcard?");
      
      const nomeBaralhoSelecionado = prompt("> ").trim();
    
      const baralhoEncontrado = baralhos.find(
        (baralho) => baralho.titulo.toLowerCase() === nomeBaralhoSelecionado.toLowerCase()
      );
    
      if (!baralhoEncontrado) {
        console.clear()
        console.log("\n====== Baralho não encontrado! ======");
        prompt("Pressione Enter para voltar ao menu...");
        exibirMenu();
        return;
      }

      const flashcardsDoBaralho = flashcards.filter(
        (flashcard) => flashcard.idBaralho === baralhoEncontrado.id
      );
    
      console.clear();
      
      if (flashcardsDoBaralho.length === 0) {
        console.log(`\nO baralho "${baralhoEncontrado.titulo}" não possui flashcards.`);
      } else {
        console.log(`\n--- Flashcards do Baralho: ${baralhoEncontrado.titulo} ---`);
        flashcardsDoBaralho.forEach((flashcard) => {
          console.log(`\nPERGUNTA: ${flashcard.pergunta}`);
          console.log(`RESPOSTA: ${flashcard.resposta}`);
        });
        console.log("\n-------------------------------------------");
      }
    
      console.log("Aperte ENTER para voltar ao menu...");
      prompt("");
      console.clear()
      exibirMenu();
}