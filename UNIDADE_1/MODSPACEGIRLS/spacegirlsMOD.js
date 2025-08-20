import PromptSync from "prompt-sync";
import { adicionarMissao } from "./adicionarMissao.js";
import { editarMissao } from "./editar.js";
import { marcarConcluido } from "./marcarConcluido.js";
export const prompt = PromptSync({ sigint: true });

export let missoes = [];

export function exibirMenu() {
  console.clear();
  console.log(
    "=========MENU=========\n1-Adicionar missão\n2-Listar missões\n3-Editar missao\n4-Marcar como concluída\n5-Filtrar por prioridades\n6-Ranking de destinos\n7-Listar por tripulantes\n0-Sair do programa\nInsira a opção desejada."
  );
  let opcaoMenu = prompt("> ");
  opcaoMenu = parseInt(opcaoMenu, 10);
  switch (opcaoMenu) {
    case 1:
      console.clear();
      adicionarMissao();
      break;
    case 2:
      listarMissoes();
      break;
    case 3:
      editarMissao();
      break;
    case 4:
      marcarConcluido();
      break;
    case 5:
      filtrarPrioridade();
      break;
    case 6:
      rankingDestinos();
      break;
    case 7:
      listarPorTripulantes();
      break;
    case 0:
      console.log("Saindo do programa!");
      process.exit();
      break;
    default:
      console.log("Insira uma opção válida!\n");
      exibirMenu();
  }
}

exibirMenu();