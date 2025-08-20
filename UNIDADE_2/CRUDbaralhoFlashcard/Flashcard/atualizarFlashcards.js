import { flashcards, baralhos, prompt, exibirMenu } from "../menu.js";

export function atualzarFlashcard() {
  console.clear();
  if (baralhos.length === 0) {
    console.log("Nenhum baralho criado ainda. Crie um baralho primeiro.");
    prompt("Pressione Enter para voltar ao menu...");
    exibirMenu();
    return;
  }

  console.log("Baralhos existentes:");
  baralhos.forEach((baralho) => {
    console.log(`- ${baralho.titulo}`);
  });
  console.log("\nQual baralho você deseja listar os flashcard?");

  const nomeBaralhoSelecionado = prompt("> ").trim();

  const baralhoEncontrado = baralhos.find(
    (baralho) =>
      baralho.titulo.toLowerCase() === nomeBaralhoSelecionado.toLowerCase()
  );

  if (!baralhoEncontrado) {
    console.clear();
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
    console.log(
      `\nO baralho "${baralhoEncontrado.titulo}" não possui flashcards.`
    );
  } else {
    console.clear();
    console.log("Selecione o ID do flashcard que deseja editar");
    console.log(`\n--- Flashcards do Baralho: ${baralhoEncontrado.titulo} ---`);
    flashcardsDoBaralho.forEach((flashcard) => {
    console.log(`\nID: ${flashcard.idFlashcard}`)
      console.log(`PERGUNTA: ${flashcard.pergunta}`);
      console.log(`RESPOSTA: ${flashcard.resposta}`);
    });
    console.log("\n-------------------------------------------");
  }

  console.log(`Digite o ID do flashcard que deseja editar: `)
  const idFlashcardSelecionado = prompt("> ").trim();

  const flashcardEncontrado = flashcardsDoBaralho.find(
    (flashcard) => flashcard.idFlashcard === parseInt(idFlashcardSelecionado)
  );

  if (!flashcardEncontrado) {
    console.clear();
    console.log("\n====== Flashcard não encontrado! ======");
    console.log("Aperte ENTER para voltar ao menu...");
    prompt("");
    console.clear()
    exibirMenu();
    return;
  }

  console.log(
    `(Atual: ${flashcardEncontrado.pergunta}) Digite a NOVA pergunta do flashcard (ou deixe em branco): `
  );
  let novaPergunta = prompt("> ");

  if (novaPergunta !== "") {
    flashcardEncontrado.pergunta = novaPergunta;
  }

  console.log(
    `(Atual: ${flashcardEncontrado.resposta}) Digite a NOVA resposta do flashcard (ou deixe em branco): `
  );
  let novaResposta = prompt("> ");

  if (novaResposta !== "") {
    flashcardEncontrado.resposta = novaResposta;
  }    

  console.clear()
  console.log(`===Flashcard: ${flashcardEncontrado.idFlashcard} editado com sucesso===`)
  exibirMenu()
}
