import { adicionarCandidato } from "./adicionarCandidato.js";
import { Votacao } from "./resultadoVotacao.js";
import { apuramentoVotos } from "./apuramentoVotos.js";
import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
export let candidatos = [];

export let eleitores = []

export function exibirMenu() {
  console.log(
    "=========MENU=========\n1-Adicionar Candidato\n2-Votar\n3-Resultado da votação\n0-Sair do programa"
  );

  console.log("Insira a opção desejada.\n");
  let opcaoMenu = prompt("> ");
  opcaoMenu = parseInt(opcaoMenu, 10);
  switch (opcaoMenu) {
    case 1:
      console.clear();
      adicionarCandidato();
      break;
    case 2:
      apuramentoVotos();
      break;
    case 3:
      Votacao();
      break;
    case 0:
      process.exit();
      break;
    default:
      console.clear();
      console.log("Insira uma opção válida!\n");
      exibirMenu();
  }
}

exibirMenu();
