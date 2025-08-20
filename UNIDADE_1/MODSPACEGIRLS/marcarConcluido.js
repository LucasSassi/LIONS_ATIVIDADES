import { exibirMenu, missoes, prompt } from "./spacegirlsMOD.js";


export function marcarConcluido() {
    console.clear();
    console.log("====== MARCAR MISSÃO COMO CONCLUÍDA ======");
    if (missoes.length === 0) {
      console.log("Não há missoes a serem concluídas");
      exibirMenu();
    }
    missoes.forEach((missao, index) => {
      const status = missao.concluida ? "CONCLUÍDA" : "PENDENTE";
      console.log(
        `ID: ${index + 1} | Nome: ${missao.Nome} | Status: ${status}`
      );
    });
    console.log("Digite o ID da missão que deseja marcar como concluído: ")
    let idMissaoInput = prompt("> ");

      const idMissao = parseInt(idMissaoInput);
      if (isNaN(idMissao) || idMissao < 1 || idMissao > missoes.length) {
        console.clear();
        console.log("O ID inserido não existe, te deixo tentar denovo!");
        exibirMenu();
      }
      const indexMissao = idMissao - 1;
      missoes[indexMissao].concluida = true;
      console.clear();
      console.log(`A missão "${missoes[indexMissao].Nome}" foi marcada como CONCLUÍDA.`);
      exibirMenu();
  }