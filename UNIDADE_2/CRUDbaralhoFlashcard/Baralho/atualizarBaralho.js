import { baralhos, prompt, exibirMenu } from "../menu.js";

export function atualzarBaralho() {
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
  console.log("\nQual baralho você deseja atualizar o nome?: ");

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
  console.clear();
  console.log(`Qual o novo nome?\nnome ATUAL: ${baralhoEncontrado.titulo}. `);
  let novoNomeBaralho = prompt("> ");
  baralhoEncontrado.titulo = novoNomeBaralho;
  console.clear();
  console.log("======NOME EDITADO COM SUCESSO======");
  exibirMenu();
}