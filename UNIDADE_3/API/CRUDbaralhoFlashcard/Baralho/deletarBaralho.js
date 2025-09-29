import { baralhos, flashcards, prompt, exibirMenu } from "../menu.js";

export function deletarBaralho() {
  console.clear();
  if (baralhos.length === 0) {
    console.log("Nenhum baralho criado ainda. Crie um baralho primeiro.");
    prompt("Pressione Enter para voltar ao menu...");
    exibirMenu();
    return;
  }

  console.log("Baralhos existentes:");
  baralhos.forEach((baralho) => {
    console.log(`\nID: ${baralho.id}, Nome: ${baralho.titulo}`);
  });
  console.log("\nQual o id do baralho deseja deletar??: ");

  const IDBaralhoSelecionado = prompt("> ").trim();

  const baralhoEncontrado = baralhos.find(
    (baralho) => baralho.id === parseInt(IDBaralhoSelecionado)
  );

  if (!baralhoEncontrado) {
    console.clear();
    console.log("\n====== Baralho não encontrado! ======");
    prompt("Pressione Enter para voltar ao menu...");
    exibirMenu();
    return;
  }

  const indexDoBaralho = baralhos.findIndex(
    (b) => b.id === baralhoEncontrado.id
  );

  baralhos.splice(indexDoBaralho, 1);

  let flashcardsRestantes = flashcards.filter(
    (flashcard) => flashcard.idBaralho !== baralhoEncontrado.id
  );

  flashcards.splice(0, flashcards.length);
  flashcards.push(...flashcardsRestantes);

  console.clear();
  console.log(
    `\n=== Baralho "${baralhoEncontrado.titulo}" e seus flashcards foram deletados com sucesso! ===\n`
  );
  prompt("Pressione Enter para voltar ao menu...");
  exibirMenu();
}
