import { contatos, exibirMenu, prompt } from "./atvdd.js";

export function listarContatos() {
  console.clear();

  if (contatos.length == 0) {
    console.log("===NENHUM contato registrado!!==="); // saida
    exibirMenu();
  } else {
    console.log("=========Contatos========="); // saida

    contatos.forEach((contato) => {
      console.log(
        `ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`
      ); // saida
    });

    console.log("Pressione Enter para sair"); // saida
    prompt(""); // entrada
    console.clear();
    exibirMenu();
  }
}