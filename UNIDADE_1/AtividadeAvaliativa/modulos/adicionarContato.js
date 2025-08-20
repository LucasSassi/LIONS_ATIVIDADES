import { contatos, exibirMenu, prompt } from "./atvdd.js";

export function adicionarContato() {
  console.log("Qual o nome do contato que deseja adicionar?: "); // saida
  let nome = prompt("> "); // entrada
  console.log("Qual o telefone do contato que deseja adicionar? (com DDD): "); // saida
  let telefone = prompt("> "); // entrada

  if (isNaN(telefone)|| telefone.length != 11) {
    console.clear();
    console.log("Digite um numero valido!!"); // saida
    adicionarContato();
  }

  let telefoneFormatado = "(" + telefone.substring(0, 2) + ")" + telefone.substring(2, 7) + "-" + telefone.substring(7);

  console.log("Qual o email do contato que deseja adicionar?: "); // saida
  let email = prompt("> "); // entrada
  let id;
  do {
    id = Date.now();
  } while (contatos.some(contato => contato.id === id));


 

  contatos.push({
    id,
    nome,
    telefone: telefoneFormatado,
    email,
  });

  console.clear();
  console.log("===Contato adicionado com sucesso!!==="); // saida
  exibirMenu();
}