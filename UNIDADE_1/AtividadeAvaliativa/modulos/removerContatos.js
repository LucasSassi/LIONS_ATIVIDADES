import { contatos, exibirMenu, prompt } from "./atvdd.js";

export function removerContatos() {
  console.log("=========CONTATOS========="); // saida
  contatos.forEach((contato) => {
    console.log(
      `ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`
    ); // saida
  });

  console.log("Qual o ID do contato que deseja remover?: "); // saida
  let idSelecionado = prompt("> "); // entrada
  idSelecionado = parseInt(idSelecionado);

  let indiceParaDeletar = -2;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i].id === idSelecionado) {
      indiceParaDeletar = i;
      break;
    }
  }

  console.clear();

  if (indiceParaDeletar != -2) {
    console.log("===Contato deletado com sucesso!!==="); // saida
    contatos.splice(indiceParaDeletar, 1);
    exibirMenu();
  } else {
    console.clear();
    console.log(
      "===Contato NAO encontrado ou contato NAO valido, tente novamente!!===\n"
    ); // saida
    removerContatos();
  }
}