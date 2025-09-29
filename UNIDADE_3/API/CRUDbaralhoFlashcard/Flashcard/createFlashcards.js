import { baralhos, flashcards, prompt, exibirMenu } from "../menu.js";

export function adicionarFlashcards() {
  console.clear();

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
  console.log("\nEm qual baralho você deseja adicionar um flashcard?");
  
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

  let adicionarOutro = 's';
  
  do {
    console.clear();
    console.log(`Adicionando flashcard ao baralho: "${baralhoEncontrado.titulo}"`);

    console.log("Digite a PERGUNTA do flashcard:");
    let pergunta = prompt("> ").trim();
    
    console.log("Digite a RESPOSTA do flashcard:");
    let resposta = prompt("> ").trim();

    flashcards.push({
      idFlashcard: Date.now(),
      tituloBaralho: baralhoEncontrado.titulo,
      idBaralho: baralhoEncontrado.id,
      pergunta: pergunta,
      resposta: resposta,
    });

    console.log("\n====== FLASHCARD ADICIONADO COM SUCESSO! ======");

    console.log("Deseja adicionar outro flashcard a este baralho? (s/n)");
    adicionarOutro = prompt("> ").toLowerCase();
    console.clear()

  } while (adicionarOutro === 's');
  
  exibirMenu();
}