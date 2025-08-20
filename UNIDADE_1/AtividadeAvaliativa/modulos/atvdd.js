import { adicionarContato } from "./adicionarContato.js";
import { listarContatos } from "./listarContatos.js";
import { atualizarContato } from "./atualizarContato.js";
import { removerContatos } from "./removerContatos.js";
import PromptSync from "prompt-sync";

export const prompt = PromptSync({ sigint: true });
export let contatos = [];

export function exibirMenu() {
  console.log(
    "=========MENU=========\n1-Adicionar Contatos\n2-Listar Contatos\n3-Atualizar Contatos\n4-Deletar contatos\n0-Sair do programa"
  ); // saida

  console.log("Insira a opção desejada.\n"); // saida
  let opcaoMenu = prompt("> "); // entrada
  opcaoMenu = parseInt(opcaoMenu, 10);
  switch (opcaoMenu) {
    case 1:
      console.clear()
      adicionarContato();
      break;
    case 2:
      listarContatos();
      break;
    case 3:
      atualizarContato();
      break;
    case 4:
      console.clear()
      removerContatos();
      break;
    case 0:
      process.exit();
      break;
    default:
      console.log("Insira uma opção válida!\n"); // saida
      exibirMenu();
  }
}

exibirMenu();